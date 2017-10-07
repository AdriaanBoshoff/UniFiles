unit uVideoPlayer;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics,
  Controls, Forms, uniGUITypes, uniGUIAbstractClasses,
  uniGUIClasses, uniGUIForm, uniGUIBaseClasses, uniPanel, uniHTMLFrame,
  unimVideo;

type
  Tfrmvideoplayer = class(TUniForm)
    htmlfrmvideo: TUniHTMLFrame;
    procedure UniFormShow(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
    videofile: string;
  end;

function frmvideoplayer: Tfrmvideoplayer;

implementation

{$R *.dfm}

uses
  MainModule, uniGUIApplication;

function frmvideoplayer: Tfrmvideoplayer;
begin
  Result := Tfrmvideoplayer(UniMainModule.GetFormInstance(Tfrmvideoplayer));
end;

procedure Tfrmvideoplayer.UniFormShow(Sender: TObject);
var
  fileext: string;
begin
  fileext := ExtractFileExt(videofile);
  fileext := Copy(fileext, 2, Length(fileext));
  htmlfrmvideo.HTML.Text := '<body bgcolor="#E6E6FA">' + sLineBreak +
    '<video width="' + IntToStr(htmlfrmvideo.Width) + '"controls>'
    + sLineBreak + '<source src="' + videofile + '" type="video/' + fileext + '">'
    + sLineBreak + 'Your browser does not support the video.'
    + sLineBreak + '</video>'
    + sLineBreak + '</body>';
end;

end.
