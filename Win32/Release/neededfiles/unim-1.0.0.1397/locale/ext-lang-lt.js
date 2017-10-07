Ext.Date.dayNames = [
    "Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"
];

Ext.Date.monthNames = [
    "Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"
];

Ext.Date.monthNumbers = {
    Sau: 0,
    Vas: 1,
    Kov: 2,
    Bal: 3,
    Geg: 4,
    Bir: 5,
    Lie: 6,
    Rgp: 7,
    Rgs: 8,
    Spa: 9,
    Lap: 10,
    Grd: 11
};

Ext.Date.getShortMonthName = function(month) {
    // Uncommons
    if (month == 7) return "Rgp";
    if (month == 8) return "Rgs";
    if (month == 11) return "Grd";
    return Ext.Date.monthNames[month].substring(0, 3);
};

Ext.Date.getShortDayName = function(day) {
    return Ext.Date.dayNames[day].substring(0, 3);
};

Ext.Date.getMonthNumber = function(name) {
  // Some uncommons
  if (name == "Rugpjūtis") return 7;
  if (name == "Rugsėjis") return 8;
  if (name == "Gruodis") return 11;
  return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
};

Ext.Date.parseCodes.S.s = '(?:st|nd|rd|th)';

if (Ext.picker.Picker){
    Ext.override(Ext.picker.Picker, {
        doneText: 'Gatavas'    
    });
}

if (Ext.picker.Date) {
    Ext.override(Ext.picker.Date, {
        'dayText': 'Diena',
        'monthText': 'Mėnuo',
        'yearText': 'Metai',
        'slotOrder': ['month', 'day', 'year']    
    });
}

if(Ext.IndexBar){
    Ext.override(Ext.IndexBar, {
        'letters': ['A', 'Ą',	'B', 'C', 'Č', 'D', 'E', 'Ę', 'Ė', 'F', 'G', 'H', 'I', 'Į', 'Y', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'Š', 'T', 'U', 'Ų', 'Ū', 'V', 'Z', 'Ž']    
    });
}

if(Ext.NestedList){
    Ext.override(Ext.NestedList, {
        'backText': 'Atgal',
        'loadingText': 'Kraunasi...',
        'emptyText': 'Nėra turimi daiktai.'
    });
}

if(Ext.util.Format){
    Ext.util.Format.defaultDateFormat = 'm/d/Y';
}

if(Ext.MessageBox){
    Ext.MessageBox.OK.text = 'Gerai';
    Ext.MessageBox.CANCEL.text = 'Atsisakyti';
    Ext.MessageBox.YES.text = 'Taip';
    Ext.MessageBox.NO.text = 'Ne';
}
