unit uSettings;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics,
  Controls, Forms, uniGUITypes, uniGUIAbstractClasses,
  uniGUIClasses, uniGUIForm, uniGUIBaseClasses, uniLabel, uniMultiItem,
  uniComboBox, uniEdit, uniButton, IniFiles;

type
  Tfrmsettings = class(TUniForm)
    lblmainbg: TUniLabel;
    edtmainbgurl: TUniEdit;
    lblloginbg: TUniLabel;
    edtloginbgurl: TUniEdit;
    btnok: TUniButton;
    btncancel: TUniButton;
    lblusername: TUniLabel;
    edtusername: TUniEdit;
    lblpassword: TUniLabel;
    edtpassword: TUniEdit;
    procedure btnokClick(Sender: TObject);
    procedure WriteSettingString(Section, Name, Value: string);
    procedure btncancelClick(Sender: TObject);
    procedure LoadSettings;
    procedure UniFormCreate(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

function frmsettings: Tfrmsettings;

implementation

{$R *.dfm}

uses
  MainModule, uniGUIApplication;

function frmsettings: Tfrmsettings;
begin
  Result := Tfrmsettings(UniMainModule.GetFormInstance(Tfrmsettings));
end;

procedure Tfrmsettings.btncancelClick(Sender: TObject);
begin
  Close;
end;

procedure Tfrmsettings.btnokClick(Sender: TObject);
begin
  WriteSettingString('Main Settings', 'Login_Background_URL', edtloginbgurl.Text);
  WriteSettingString('Main Settings', 'Main_Background_URL', edtmainbgurl.Text);
  WriteSettingString('Login', 'username', edtusername.Text);
  WriteSettingString('Login', 'password', edtpassword.Text);
  UniApplication.Restart;
end;

procedure Tfrmsettings.LoadSettings;
var
  ini: TIniFile;
begin
  ini := TIniFile.Create('.\config.ini');
  try
    edtmainbgurl.Text := ini.ReadString('Main Settings', 'Main_Background_URL', 'http://myweb.com/image.png');
    edtloginbgurl.Text := ini.ReadString('Main Settings', 'Login_Background_URL', 'http://myweb.com/image.png');
    edtusername.Text := ini.ReadString('Login', 'username', 'admin');
    edtpassword.Text := ini.ReadString('Login', 'password', 'password');
  finally
    ini.Free;
  end;
end;

procedure Tfrmsettings.UniFormCreate(Sender: TObject);
begin
  LoadSettings;
end;

procedure Tfrmsettings.WriteSettingString(Section, Name, Value: string);
var
  ini: TIniFile;
begin
  ini := TIniFile.Create('.\config.ini');
  try
    ini.WriteString(Section, Name, Value);
  finally
    ini.Free;
  end;
end;

end.
