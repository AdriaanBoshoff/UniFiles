object frmsettings: Tfrmsettings
  Left = 0
  Top = 0
  ClientHeight = 389
  ClientWidth = 501
  Caption = 'Settings'
  BorderStyle = bsSingle
  OldCreateOrder = False
  BorderIcons = []
  MonitoredKeys.Keys = <>
  Movable = False
  Font.Height = -16
  ScreenMask.Color = clBlack
  OnCreate = UniFormCreate
  DesignSize = (
    501
    389)
  PixelsPerInch = 96
  TextHeight = 19
  object btncancel: TUniButton
    Left = 8
    Top = 344
    Width = 73
    Height = 37
    Hint = ''
    Caption = 'Cancel'
    Anchors = [akLeft, akBottom]
    TabOrder = 1
    OnClick = btncancelClick
    ExplicitTop = 213
  end
  object btnok: TUniButton
    Left = 420
    Top = 344
    Width = 73
    Height = 37
    Hint = ''
    Caption = 'Apply'
    Anchors = [akRight, akBottom]
    TabOrder = 0
    OnClick = btnokClick
    ExplicitLeft = 270
    ExplicitTop = 213
  end
  object grplogin: TUniGroupBox
    Left = 8
    Top = 8
    Width = 209
    Height = 161
    Hint = ''
    Caption = 'Login'
    TabOrder = 2
    object edtpassword: TUniEdit
      Left = 16
      Top = 113
      Width = 177
      Height = 25
      Hint = ''
      PasswordChar = '*'
      Text = ''
      TabOrder = 1
    end
    object edtusername: TUniEdit
      Left = 16
      Top = 57
      Width = 177
      Height = 25
      Hint = ''
      Text = ''
      TabOrder = 2
    end
    object lblusername: TUniLabel
      Left = 16
      Top = 32
      Width = 77
      Height = 19
      Hint = ''
      Caption = 'Username:'
      TabOrder = 3
    end
    object lblpassword: TUniLabel
      Left = 16
      Top = 88
      Width = 73
      Height = 19
      Hint = ''
      Caption = 'Password:'
      TabOrder = 4
    end
  end
  object grpbackgrounds: TUniGroupBox
    Left = 8
    Top = 175
    Width = 485
    Height = 161
    Hint = ''
    Caption = 'Background'
    TabOrder = 3
    object edtloginbgurl: TUniEdit
      Left = 16
      Top = 113
      Width = 457
      Height = 25
      Hint = ''
      Text = ''
      ParentFont = False
      TabOrder = 1
    end
    object edtmainbgurl: TUniEdit
      Left = 16
      Top = 57
      Width = 457
      Height = 25
      Hint = ''
      Text = ''
      ParentFont = False
      Font.Height = -13
      TabOrder = 2
    end
    object lblloginbg: TUniLabel
      Left = 16
      Top = 88
      Width = 167
      Height = 19
      Hint = ''
      Caption = 'Login Background URL:'
      TabOrder = 3
    end
    object lblmainbg: TUniLabel
      Left = 16
      Top = 32
      Width = 161
      Height = 19
      Hint = ''
      Caption = 'Main Background URL:'
      TabOrder = 4
    end
  end
end
