program UniFiles;

uses
  Forms,
  ServerModule in 'ServerModule.pas' {UniServerModule: TUniGUIServerModule},
  MainModule in 'MainModule.pas' {UniMainModule: TUniGUIMainModule},
  Main in 'Main.pas' {frmmain: TUniForm},
  uLogin in 'uLogin.pas' {frmlogin: TUniLoginForm},
  uSettings in 'uSettings.pas' {frmsettings: TUniForm},
  uVideoPlayer in 'uVideoPlayer.pas' {frmvideoplayer: TUniForm};

{$R *.res}

begin
  ReportMemoryLeaksOnShutdown := True;
  Application.Initialize;
  TUniServerModule.Create(Application);
  Application.Run;
end.
