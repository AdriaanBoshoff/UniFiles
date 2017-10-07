object frmlogin: Tfrmlogin
  Left = 0
  Top = 0
  ClientHeight = 196
  ClientWidth = 298
  Caption = 'Login'
  BorderStyle = bsSingle
  OldCreateOrder = False
  BorderIcons = []
  MonitoredKeys.Keys = <>
  Movable = False
  Font.Height = -16
  OnCreate = UniLoginFormCreate
  PixelsPerInch = 96
  TextHeight = 19
  object lblusername: TUniLabel
    Left = 35
    Top = 19
    Width = 77
    Height = 19
    Hint = ''
    Caption = 'Username:'
    TabOrder = 0
  end
  object edtusername: TUniEdit
    Left = 35
    Top = 44
    Width = 229
    Height = 24
    Hint = ''
    Text = ''
    TabOrder = 1
    OnKeyPress = edtusernameKeyPress
  end
  object lblpassword: TUniLabel
    Left = 35
    Top = 83
    Width = 73
    Height = 19
    Hint = ''
    Caption = 'Password:'
    TabOrder = 2
  end
  object edtpassword: TUniEdit
    Left = 35
    Top = 108
    Width = 229
    Height = 24
    Hint = ''
    PasswordChar = '*'
    Text = ''
    TabOrder = 3
    OnKeyPress = edtpasswordKeyPress
  end
  object btnlogin: TUniButton
    Left = 215
    Top = 148
    Width = 75
    Height = 40
    Hint = ''
    Caption = 'Login'
    TabOrder = 4
    OnClick = btnloginClick
  end
  object lbltheme: TUniLabel
    Left = 8
    Top = 136
    Width = 55
    Height = 19
    Hint = ''
    Caption = 'Theme:'
    TabOrder = 5
  end
  object cbbtheme: TUniComboBox
    Left = 8
    Top = 161
    Width = 145
    Height = 27
    Hint = ''
    Text = 'Select a Theme'
    Items.Strings = (
      'Access'
      'Neptune')
    TabOrder = 6
    OnChange = cbbthemeChange
  end
end
