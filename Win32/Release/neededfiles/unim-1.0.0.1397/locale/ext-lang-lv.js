Ext.Date.dayNames = [
    "Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"
];

Ext.Date.monthNames = [
    "Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"
];

Ext.Date.monthNumbers = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11
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
        doneText: 'Gatavots'    
    });
}

if (Ext.picker.Date) {
    Ext.override(Ext.picker.Date, {
        'dayText': 'Diena',
        'monthText': 'Mēnesis',
        'yearText': 'Gads',
        'slotOrder': ['month', 'day', 'year']    
    });
}

if(Ext.IndexBar){
    Ext.override(Ext.IndexBar, {
        'letters': ['A', 'Ā', 'B', 'C', 'Č', 'D', 'E', 'Ē', 'F', 'G', 'Ģ', 'H', 'I', 'Ī', 'J', 'K', 'Ķ', 'L', 'Ļ', 'M', 'N', 'Ņ', 'O', 'P', 'Q', 'R', 'S', 'Š', 'T', 'U', 'Ū', 'V', 'W', 'X', 'Y', 'Z', 'Ž']    
    });
}

if(Ext.NestedList){
    Ext.override(Ext.NestedList, {
        'backText': 'Atpakaļ',
        'loadingText': 'Ielādē...',
        'emptyText': 'Nav preču pieejamību.'
    });
}

if(Ext.util.Format){
    Ext.util.Format.defaultDateFormat = 'm/d/Y';
}

if(Ext.MessageBox){
    Ext.MessageBox.OK.text = 'Labi';
    Ext.MessageBox.CANCEL.text = 'Atcelt';
    Ext.MessageBox.YES.text = 'Jā';
    Ext.MessageBox.NO.text = 'Nē';
}
