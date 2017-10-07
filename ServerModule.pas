unit ServerModule;

interface

uses
  Classes, SysUtils, uniGUIServer, uniGUIMainModule, uniGUIApplication,
  uIdCustomHTTPServer, uniGUITypes, IniFiles;

type
  TUniServerModule = class(TUniGUIServerModule)
    procedure CreateSettings;
    procedure LoadSettings;
    procedure UniGUIServerModuleCreate(Sender: TObject);
  private
    { Private declarations }
    ini_settings: string;
  protected
    procedure FirstInit; override;
  public
    { Public declarations }
  end;

function UniServerModule: TUniServerModule;

implementation

{$R *.dfm}

uses
  UniGUIVars;

function UniServerModule: TUniServerModule;
begin
  Result := TUniServerModule(UniGUIServerInstance);
end;

procedure TUniServerModule.CreateSettings;
var
  ini: TIniFile;
begin
  ini := TIniFile.Create(ini_settings);
  try
    with ini do
    begin
      WriteInteger('Server Settings', 'AjaxTimeout', AjaxTimeout);
      WriteBool('Server Settings', 'AllowWebMonitor', AllowWebMonitor);
      WriteBool('Server Settings', 'AllowMultiIP', AllowMultiIP);
      WriteBool('Server Settings', 'AsyncRequest', AsyncRequest);
      WriteInteger('Server Settings', 'Port', Port);
      WriteInteger('Server Settings', 'MaxConnections',
        ServerLimits.MaxConnections);
      WriteInteger('Server Settings', 'MaxRequests', ServerLimits.MaxRequests);
      WriteInteger('Server Settings', 'MaxSessions', ServerLimits.MaxSessions);
      WriteInteger('Server Settings', 'SessionTimeout', SessionTimeout);
      WriteBool('Server Settings', 'compression', Compression.Enabled);
      WriteString('Main Settings', 'Login_Background_URL', '');
      WriteString('Main Settings', 'Main_Background_URL', '');
    end;
    BlockedIPList.SaveToFile('.\BlockedIPList.txt');
  finally
    ini.Free;
  end;
end;

procedure TUniServerModule.FirstInit;
begin
  InitServerModule(Self);
end;

procedure TUniServerModule.LoadSettings;
var
  ini: TIniFile;
begin
  ini := TIniFile.Create(ini_settings);
  try
    with ini do
    begin
      AjaxTimeout := ReadInteger('Server Settings', 'AjaxTimeout', 30000);
      AllowWebMonitor := ReadBool('Server Settings', 'AllowWebMonitor', True);
      AllowMultiIP := ReadBool('Server Settings', 'AllowMultiIP', True);
      AsyncRequest := ReadBool('Server Settings', 'AsyncRequest', True);
      Port := ReadInteger('Server Settings', 'Port', 8077);
      ServerLimits.MaxConnections := ReadInteger('Server Settings',
        'MaxConnections', 500);
      ServerLimits.MaxRequests := ReadInteger('Server Settings',
        'MaxRequests', 50);
      ServerLimits.MaxSessions := ReadInteger('Server Settings',
        'MaxSessions', 250);
      SessionTimeout := ReadInteger('Server Settings',
        'SessionTimeout', 600000);
      Compression.Enabled := ReadBool('Server Settings', 'compression', True);
      // SSL Settings
      SSL.Enabled := ReadBool('SSL Settings', 'enabled', False);
    end;
    BlockedIPList.LoadFromFile('.\BlockedIPList.txt');
  finally
    ini.Free;
  end;
end;

procedure TUniServerModule.UniGUIServerModuleCreate(Sender: TObject);
begin
  ini_settings := '.\config.ini';
  if FileExists(ini_settings) then
    LoadSettings
  else
    CreateSettings;
end;

initialization

RegisterServerModuleClass(TUniServerModule);

end.
