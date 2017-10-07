Ext.Date.dayNames = [
    "Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"
];

Ext.Date.monthNames = [
    "Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"
];

Ext.Date.monthNumbers = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      Maj: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Okt: 9,
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
        doneText: 'Færdig'    
    });
}

if (Ext.picker.Date) {
    Ext.override(Ext.picker.Date, {
        'dayText': 'Dag',
        'monthText': 'Måned',
        'yearText': 'År',
        'slotOrder': ['month', 'day', 'year']    
    });
}

if(Ext.IndexBar){
    Ext.override(Ext.IndexBar, {
        'letters': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Æ', 	'Ø', 	'Å']    
    });
}

if(Ext.NestedList){
    Ext.override(Ext.NestedList, {
        'backText': 'Tilbage',
        'loadingText': 'Loading...',
        'emptyText': 'Ingen elementer til rådighed.'
    });
}

if(Ext.util.Format){
    Ext.util.Format.defaultDateFormat = 'm/d/Y';
}

if(Ext.MessageBox){
    Ext.MessageBox.OK.text = 'OK';
    Ext.MessageBox.CANCEL.text = 'Afbestille';
    Ext.MessageBox.YES.text = 'Ja';
    Ext.MessageBox.NO.text = 'Ingen';
}
