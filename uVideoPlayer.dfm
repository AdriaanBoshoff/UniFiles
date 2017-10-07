object frmvideoplayer: Tfrmvideoplayer
  Left = 0
  Top = 0
  ClientHeight = 448
  ClientWidth = 798
  Caption = 'Video Player'
  OnShow = UniFormShow
  BorderStyle = bsSingle
  OldCreateOrder = False
  BorderIcons = [biSystemMenu]
  MonitoredKeys.Keys = <>
  Movable = False
  PixelsPerInch = 96
  TextHeight = 13
  object htmlfrmvideo: TUniHTMLFrame
    Left = 0
    Top = 0
    Width = 798
    Height = 448
    Hint = ''
    Align = alClient
    Anchors = [akLeft, akTop, akRight, akBottom]
    ExplicitHeight = 4455
  end
end
