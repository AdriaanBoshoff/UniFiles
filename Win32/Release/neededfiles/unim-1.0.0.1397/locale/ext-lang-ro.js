Ext.Date.dayNames = [
    "Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"
];

Ext.Date.monthNames = [
    "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
];

Ext.Date.monthNumbers = {
    Ian: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    Mai: 4,
    Iun: 5,
    Iul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Noi: 10,
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
        doneText: 'Terminat'    
    });
}

if (Ext.picker.Date) {
    Ext.override(Ext.picker.Date, {
        'dayText': 'Zi',
        'monthText': 'Luna',
        'yearText': 'An',
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
        'backText': 'Înapoi',
        'loadingText': 'Încărcare...',
        'emptyText': 'Nu sunt elemente disponibile.'
    });
}

if(Ext.util.Format){
    Ext.util.Format.defaultDateFormat = 'm/d/Y';
}

if(Ext.MessageBox){
    Ext.MessageBox.OK.text = 'OK';
    Ext.MessageBox.CANCEL.text = 'Renunţă';
    Ext.MessageBox.YES.text = 'Da';
    Ext.MessageBox.NO.text = 'Nu';
}
