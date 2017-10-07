Ext.Date.dayNames = [
    "Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"
];

Ext.Date.monthNames = [
    "Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"
];

Ext.Date.monthNumbers = {
    'Led': 0,
    'Úno': 1,
    'Bře': 2,
    'Dub': 3,
    'Kvě': 4,
    'Čer': 5,
    'Čvc': 6,
    'Srp': 7,
    'Zář': 8,
    'Říj': 9,
    'Lis': 10,
    'Pro': 11
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
        doneText: 'Udělaný'    
    });
}

if (Ext.picker.Date) {
    Ext.override(Ext.picker.Date, {
        'dayText': 'Den',
        'monthText': 'Měsíc',
        'yearText': 'Rok',
        'slotOrder': ['month', 'day', 'year']    
    });
}

if(Ext.IndexBar){
    Ext.override(Ext.IndexBar, {
        'letters': ['A', 'Á', 'B', 'C', 'Č', 'D', 'Ď', 'E', 'É', 'Ě', 'F', 'G', 'H', 'Ch', 'I', 'Í', 'J', 'K', 'L', 'M', 'N', 'Ň', 'O', 'Ó', 'P', 'Q', 'R', 'Ř', 'S', 'Š', 'T', 'Ť', 'U', 'Ú', 'Ů', 'V', 'W', 'X', 'Y', 'Ý', 'Z', 'Ž']    
    });
}

if(Ext.NestedList){
    Ext.override(Ext.NestedList, {
        'backText': 'Zpět',
        'loadingText': 'Nakládání...',
        'emptyText': 'Žádné položky k dispozici.'
    });
}

if(Ext.util.Format){
    Ext.util.Format.defaultDateFormat = 'm/d/Y';
}

if(Ext.MessageBox){
    Ext.MessageBox.OK.text = 'OK';
    Ext.MessageBox.CANCEL.text = 'Zrušit';
    Ext.MessageBox.YES.text = 'Ano';
    Ext.MessageBox.NO.text = 'Ne';
}
