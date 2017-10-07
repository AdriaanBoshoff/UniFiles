unit Main;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics,
  Controls, Forms, uniGUITypes, uniGUIAbstractClasses,
  uniGUIClasses, uniGUIRegClasses, uniGUIForm, uniGUIBaseClasses, uniMultiItem,
  uniListBox, uniTimer, ServerModule, uniButton, uniPanel,
  uniThreadTimer, uniFileUpload, uSettings, uniLabel, uniImage, uniEdit, JSON,
  IdHTTP, uniGroupBox, uVideoPlayer, uniHTMLFrame;

type
  Tfrmmain = class(TUniForm)
    lstbxfiles: TUniListBox;
    pnltools: TUniPanel;
    btnrefresh: TUniButton;
    btnupload: TUniButton;
    fileupload1: TUniFileUpload;
    btnsettings: TUniButton;
    pnlinfo: TUniPanel;
    lblfilename: TUniLabel;
    img1: TUniImage;
    lblfileextension: TUniLabel;
    lblfilesize: TUniLabel;
    grpfileoptions: TUniGroupBox;
    btndelete: TUniButton;
    btndownload: TUniButton;
    edtrename: TUniEdit;
    lblrename: TUniLabel;
    btnrename: TUniButton;
    btnplay: TUniButton;
    htmlfrmaudio: TUniHTMLFrame;
    procedure ListFileDir(Path: string; FileList: TStrings);
    procedure btnrefreshClick(Sender: TObject);
    procedure thrdtmrrefreshlistTimer(Sender: TObject);
    procedure btnuploadClick(Sender: TObject);
    procedure fileupload1Completed(Sender: TObject; AStream: TFileStream);
    procedure btnsettingsClick(Sender: TObject);
    procedure UniFormCreate(Sender: TObject);
    procedure lstbxfilesDblClick(Sender: TObject);
    procedure lstbxfilesChange(Sender: TObject);
    function FileSize(const aFilename: String): Int64;
    procedure btndownloadClick(Sender: TObject);
    procedure btndeleteClick(Sender: TObject);
    procedure btnrenameClick(Sender: TObject);
    procedure btnplayClick(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

function frmmain: Tfrmmain;

implementation

{$R *.dfm}

uses
  uniGUIVars, MainModule, uniGUIApplication;

function frmmain: Tfrmmain;
begin
  Result := Tfrmmain(UniMainModule.GetFormInstance(Tfrmmain));
end;

procedure Tfrmmain.btndeleteClick(Sender: TObject);
begin
  DeleteFile('.\files\' + lstbxfiles.Items[lstbxfiles.ItemIndex]);
  btnrefresh.Click;
end;

procedure Tfrmmain.btndownloadClick(Sender: TObject);
begin
  UniSession.SendFile('.\files\' + lstbxfiles.Items[lstbxfiles.ItemIndex]);
end;

procedure Tfrmmain.btnplayClick(Sender: TObject);
var
  fileext: string;
  htmlcode: TStringList;
begin
  htmlfrmaudio.HTML.Text := '';
  htmlfrmaudio.Visible := False;
  fileext := ExtractFileExt('.\files\' + lstbxfiles.Items
    [lstbxfiles.ItemIndex]);

  if (fileext = '.mp4') or (fileext = '.webm') or (fileext = '.ogg') then
  begin
    frmvideoplayer.ShowModal;
    frmvideoplayer.videofile := 'files/' + lstbxfiles.Items
      [lstbxfiles.ItemIndex];
  end
  else if (fileext = '.mp3') or (fileext = '.wav') then
  begin
    htmlcode := TStringList.Create;
    try
      htmlcode.Add('<audio controls autoplay>');
      htmlcode.Add('<source src="' + 'files/' + lstbxfiles.Items
        [lstbxfiles.ItemIndex] + '" type="audio/mpeg">');
      htmlcode.Add('Your browser does not support the audio element.');
      htmlcode.Add('</audio>')
    finally
      htmlfrmaudio.HTML.Text := htmlcode.Text;
      htmlcode.Free;
      htmlfrmaudio.Visible := True;
    end;
  end;

end;

procedure Tfrmmain.btnrefreshClick(Sender: TObject);
begin
  lstbxfiles.Clear;
  ListFileDir('.\files\', lstbxfiles.Items);
end;

procedure Tfrmmain.btnrenameClick(Sender: TObject);
begin
  if RenameFile('.\files\' + lstbxfiles.Items[lstbxfiles.ItemIndex],
    '.\files\' + edtrename.Text) then
    btnrefresh.Click
  else
    ShowMessage('There was an error renaiming the file.');
end;

procedure Tfrmmain.btnsettingsClick(Sender: TObject);
begin
  frmsettings.ShowModal();
end;

procedure Tfrmmain.btnuploadClick(Sender: TObject);
begin
  fileupload1.Execute;
end;

function Tfrmmain.FileSize(const aFilename: String): Int64;
var
  info: TWin32FileAttributeData;
begin
  Result := -1;

  if NOT GetFileAttributesEx(PWideChar(aFilename), GetFileExInfoStandard, @info)
  then
    EXIT;

  Result := Int64(info.nFileSizeLow) or Int64(info.nFileSizeHigh shl 32);
end;

procedure Tfrmmain.fileupload1Completed(Sender: TObject; AStream: TFileStream);
var
  DestName: string;
  DestFolder: string;
begin
  DestFolder := '.\files\';
  DestName := DestFolder + ExtractFileName(fileupload1.FileName);
  CopyFile(PChar(AStream.FileName), PChar(DestName), False);
  btnrefresh.Click;
end;

procedure Tfrmmain.ListFileDir(Path: string; FileList: TStrings);
var
  SR: TSearchRec;
begin
  if FindFirst(Path + '*.*', faAnyFile, SR) = 0 then
  begin
    repeat
      if (SR.Attr <> faDirectory) then
      begin
        FileList.Add(SR.Name);
      end;
    until FindNext(SR) <> 0;
    FindClose(SR);
  end;
end;

procedure Tfrmmain.lstbxfilesChange(Sender: TObject);
var
  fileext, FileName, filepath: string;
begin
  filepath := '.\files\' + lstbxfiles.Items[lstbxfiles.ItemIndex];
  FileName := lstbxfiles.Items[lstbxfiles.ItemIndex];
  fileext := ExtractFileExt(filepath);
  lblfilename.Caption := 'File Name: ' + FileName;
  lblfileextension.Caption := 'File Extension: ' + fileext;
  lblfilesize.Caption := 'File Size: ' + IntToStr(FileSize(filepath));
  edtrename.Text := FileName;

  if (fileext = '.png') or (fileext = '.jpg') or (fileext = '.gif') or
    (fileext = '.bmp') then
  begin
    img1.Picture.LoadFromFile(filepath);
  end
  else
    img1.Picture := nil;

  if (fileext = '.mp4') or (fileext = '.webm') or (fileext = '.ogg') or
    (fileext = '.mp3') or (fileext = '.wav') then
  begin
    btnplay.Enabled := True;
  end
  else
  begin
    btnplay.Enabled := False;
  end;
end;

procedure Tfrmmain.lstbxfilesDblClick(Sender: TObject);
begin
  UniSession.SendFile('.\files\' + lstbxfiles.Items[lstbxfiles.ItemIndex]);
end;

procedure Tfrmmain.thrdtmrrefreshlistTimer(Sender: TObject);
begin
  lstbxfiles.Clear;
  ListFileDir('.\files\', lstbxfiles.Items);
end;

procedure Tfrmmain.UniFormCreate(Sender: TObject);
begin
  btnrefresh.Click;
end;

initialization

RegisterAppFormClass(Tfrmmain);

end.
