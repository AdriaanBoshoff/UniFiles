object frmvideoplayer: Tfrmvideoplayer
  Left = 0
  Top = 0
  ClientHeight = 441
  ClientWidth = 788
  Caption = 'Video Player'
  OnShow = UniFormShow
  OldCreateOrder = False
  BorderIcons = [biSystemMenu]
  MonitoredKeys.Keys = <>
  PixelsPerInch = 96
  TextHeight = 13
  object htmlfrmvideo: TUniHTMLFrame
    Left = 0
    Top = 0
    Width = 788
    Height = 441
    Hint = ''
    Align = alClient
    Anchors = [akLeft, akTop, akRight, akBottom]
    ExplicitLeft = 464
    ExplicitTop = 256
    ExplicitWidth = 256
    ExplicitHeight = 128
  end
end
