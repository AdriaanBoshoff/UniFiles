Ext.Date.dayNames = [
    "Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"
];

Ext.Date.monthNames = [
    "Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"
];

Ext.Date.monthNumbers = {
    'Jan': 0,
    'Feb': 1,
    'Már': 2,
    'Ápr': 3,
    'Máj': 4,
    'Jún': 5,
    'Júl': 6,
    'Aug': 7,
    'Sze': 8,
    'Okt': 9,
    'Nov': 10,
    'Dec': 11
};

Ext.Date.getShortMonthName = function(month) {
    return Ext.Date.monthNames[month].substring(0, 3);
};

Ext.Date.getShortDayName = function(day) {
    return Ext.Date.dayNames[day].substring(0, 3);
};

Ext.Date.getMonthNumber = function(name) {
  return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
};

Ext.Date.parseCodes.S.s = '(?:st|nd|rd|th)';

if (Ext.picker.Picker){
    Ext.override(Ext.picker.Picker, {
        doneText: 'Csinált'    
    });
}

if (Ext.picker.Date) {
    Ext.override(Ext.picker.Date, {
        'dayText': 'Nap',
        'monthText': 'Hónap',
        'yearText': 'Év',
        'slotOrder': ['month', 'day', 'year']    
    });
}

if(Ext.IndexBar){
    Ext.override(Ext.IndexBar, {
        'letters': ['A', 'Á', 'B', 'C', 'CS', 'D', 'Dz', 'Dzs', 'E', 'É', 'F', 'G', 'GY', 'H', 'I', 'Í', 'J', 'K', 'L', 'LY', 'M', 'N', 'NY', 'O', 'Ó', 'Ö', 'Ő', 'P', 'Q', 'R', 'S', 'SZ', 'T', 'TY', 'U', 'Ú', 'Ü', 'V', 'W', 'X', 'Y', 'Z', 'ZS']    
    });
}

if(Ext.NestedList){
    Ext.override(Ext.NestedList, {
        'backText': 'Vissza',
        'loadingText': 'Betöltés...',
        'emptyText': 'Nincs tétel áll rendelkezésre.'
    });
}

if(Ext.util.Format){
    Ext.util.Format.defaultDateFormat = 'm/d/Y';
}

if(Ext.MessageBox){
    Ext.MessageBox.OK.text = 'OK';
    Ext.MessageBox.CANCEL.text = 'Mégsem';
    Ext.MessageBox.YES.text = 'Igen';
    Ext.MessageBox.NO.text = 'Nincs';
}
