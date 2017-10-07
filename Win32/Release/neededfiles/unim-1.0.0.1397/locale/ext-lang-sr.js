Ext.Date.dayNames = [
    "Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"
];

Ext.Date.monthNames = [
    "Januar", "Februar", "Mart", "April", "Мај", "Jun", "Јul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
];

Ext.Date.monthNumbers = {
    'Jan': 0,
    'Feb': 1,
    'Mar': 2,
    'Apr': 3,
    'Maj': 4,
    'Jun': 5,
    'Jul': 6,
    'Avg': 7,
    'Sep': 8,
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
        doneText: 'Učinio'    
    });
}

if (Ext.picker.Date) {
    Ext.override(Ext.picker.Date, {
        'dayText': 'Dan',
        'monthText': 'Mjesec',
        'yearText': 'Godine',
        'slotOrder': ['month', 'day', 'year']    
    });
}

if(Ext.IndexBar){
    Ext.override(Ext.IndexBar, {
        'letters': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']    
    });
}

if(Ext.NestedList){
    Ext.override(Ext.NestedList, {
        'backText': 'Natrag',
        'loadingText': 'Učitavam...',
        'emptyText': 'Nema dostupnih stavki.'
    });
}

if(Ext.util.Format){
    Ext.util.Format.defaultDateFormat = 'm/d/Y';
}

if(Ext.MessageBox){
    Ext.MessageBox.OK.text = 'U redu';
    Ext.MessageBox.CANCEL.text = 'Odustani';
    Ext.MessageBox.YES.text = 'Da';
    Ext.MessageBox.NO.text = 'Ne';
}
