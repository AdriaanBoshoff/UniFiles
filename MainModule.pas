unit MainModule;

interface

uses
  uniGUIMainModule, SysUtils, Classes, IniFiles;

type
  TUniMainModule = class(TUniGUIMainModule)
    procedure LoadSettings;
    procedure UniGUIMainModuleCreate(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

function UniMainModule: TUniMainModule;

implementation

{$R *.dfm}

uses
  UniGUIVars, ServerModule, uniGUIApplication;

function UniMainModule: TUniMainModule;
begin
  Result := TUniMainModule(UniApplication.UniMainModule)
end;

{ TUniMainModule }

procedure TUniMainModule.LoadSettings;
var
  ini: TIniFile;
begin
  ini := TIniFile.Create('.\config.ini');
  try
    LoginBackground.Url := ini.ReadString('Main Settings', 'Login_Background_URL', '');
    Background.Url := ini.ReadString('Main Settings', 'Main_Background_URL', '');
  finally
    ini.Free;
  end;
end;

procedure TUniMainModule.UniGUIMainModuleCreate(Sender: TObject);
begin
  LoadSettings;
end;

initialization
  RegisterMainModuleClass(TUniMainModule);
end.
