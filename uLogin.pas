unit uLogin;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics,
  Controls, Forms, uniGUITypes, uniGUIAbstractClasses,
  uniGUIClasses, uniGUIRegClasses, uniGUIForm, uniEdit, uniGUIBaseClasses,
  uniLabel, uniButton, System.IniFiles, uniMultiItem, uniComboBox;

type
  Tfrmlogin = class(TUniLoginForm)
    lblusername: TUniLabel;
    edtusername: TUniEdit;
    lblpassword: TUniLabel;
    edtpassword: TUniEdit;
    btnlogin: TUniButton;
    lbltheme: TUniLabel;
    cbbtheme: TUniComboBox;
    procedure LoadLogin;
    procedure UniLoginFormCreate(Sender: TObject);
    procedure btnloginClick(Sender: TObject);
    procedure edtusernameKeyPress(Sender: TObject; var Key: Char);
    procedure edtpasswordKeyPress(Sender: TObject; var Key: Char);
    procedure cbbthemeChange(Sender: TObject);
  private
    { Private declarations }
    username, password, ini_settings: string;
  public
    { Public declarations }
  end;

function frmlogin: Tfrmlogin;

implementation

{$R *.dfm}

uses
  uniGUIVars, MainModule, uniGUIApplication;

function frmlogin: Tfrmlogin;
begin
  Result := Tfrmlogin(UniMainModule.GetFormInstance(Tfrmlogin));
end;

{ Tfrmlogin }

procedure Tfrmlogin.btnloginClick(Sender: TObject);
begin
  LoadLogin;

  if edtusername.Text = username then
    begin
      if edtpassword.Text = password then
        begin
          ModalResult := mrOk;
        end
      else
        begin
          ShowMessage('Incorrect Password!');
        end;
    end
  else
    begin
      ShowMessage('Incorrect Username!');
    end;
end;

procedure Tfrmlogin.cbbthemeChange(Sender: TObject);
begin
  UniMainModule.Theme := LowerCase(cbbtheme.Items[cbbtheme.ItemIndex]);
end;

procedure Tfrmlogin.edtpasswordKeyPress(Sender: TObject; var Key: Char);
begin
  if Ord(Key) = VK_RETURN then
    begin
      Key := #0;
      btnlogin.Click;
    end;
end;

procedure Tfrmlogin.edtusernameKeyPress(Sender: TObject; var Key: Char);
begin
  if Ord(Key) = VK_RETURN then
    begin
      Key := #0;
      btnlogin.Click;
    end;
end;

procedure Tfrmlogin.LoadLogin;
var
  ini: TiniFile;
begin
  ini := TiniFile.Create(ini_settings);
  try
    username := ini.ReadString('Login', 'username', 'admin');
    password := ini.ReadString('Login', 'password', 'password');
  finally
    ini.Free;
  end;
end;

procedure Tfrmlogin.UniLoginFormCreate(Sender: TObject);
begin
  Application.Title := 'UniFiles';
  ini_settings := '.\config.ini';
end;

initialization

RegisterAppFormClass(Tfrmlogin);

end.
