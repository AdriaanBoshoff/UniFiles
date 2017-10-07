object frmsettings: Tfrmsettings
  Left = 0
  Top = 0
  ClientHeight = 258
  ClientWidth = 351
  Caption = 'Settings'
  BorderStyle = bsSingle
  OldCreateOrder = False
  BorderIcons = []
  MonitoredKeys.Keys = <>
  Font.Height = -16
  OnCreate = UniFormCreate
  DesignSize = (
    351
    258)
  PixelsPerInch = 96
  TextHeight = 19
  object btncancel: TUniButton
    Left = 8
    Top = 213
    Width = 73
    Height = 37
    Hint = ''
    Caption = 'Cancel'
    Anchors = [akLeft, akBottom]
    TabOrder = 5
    OnClick = btncancelClick
  end
  object lblmainbg: TUniLabel
    Left = 8
    Top = 8
    Width = 161
    Height = 19
    Hint = ''
    Caption = 'Main Background URL:'
    TabOrder = 0
  end
  object edtmainbgurl: TUniEdit
    Left = 8
    Top = 33
    Width = 335
    Height = 25
    Hint = ''
    Text = ''
    ParentFont = False
    Font.Height = -13
    TabOrder = 1
  end
  object lblloginbg: TUniLabel
    Left = 8
    Top = 64
    Width = 167
    Height = 19
    Hint = ''
    Caption = 'Login Background URL:'
    TabOrder = 2
  end
  object edtloginbgurl: TUniEdit
    Left = 8
    Top = 89
    Width = 335
    Height = 25
    Hint = ''
    Text = ''
    ParentFont = False
    TabOrder = 3
  end
  object btnok: TUniButton
    Left = 270
    Top = 213
    Width = 73
    Height = 37
    Hint = ''
    Caption = 'Apply'
    Anchors = [akRight, akBottom]
    TabOrder = 4
    OnClick = btnokClick
  end
  object lblusername: TUniLabel
    Left = 8
    Top = 120
    Width = 77
    Height = 19
    Hint = ''
    Caption = 'Username:'
    TabOrder = 6
  end
  object edtusername: TUniEdit
    Left = 8
    Top = 145
    Width = 161
    Height = 25
    Hint = ''
    Text = ''
    TabOrder = 7
  end
  object lblpassword: TUniLabel
    Left = 182
    Top = 120
    Width = 73
    Height = 19
    Hint = ''
    Caption = 'Password:'
    TabOrder = 8
  end
  object edtpassword: TUniEdit
    Left = 182
    Top = 145
    Width = 161
    Height = 25
    Hint = ''
    PasswordChar = '*'
    Text = ''
    TabOrder = 9
  end
end
