Ext.Date.dayNames = [
    "Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"
];

Ext.Date.monthNames = [
    "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"
];

Ext.Date.monthNumbers = {
    Sty: 0,
    Lut: 1,
    Mar: 2,
    Kwi: 3,
    Maj: 4,
    Cze: 5,
    Lip: 6,
    Sie: 7,
    Wrz: 8,
    Paź: 9,
    Lis: 10,
    Gru: 11
};

Ext.Date.getShortMonthName = function(month) {
    return Ext.Date.monthNames[month].substring(0, 3);
};

Ext.Date.getShortDayName = function(day) {
    switch (day) {
            case 0:
                return 'ndz';
            case 1:
                return 'pon';
            case 2:
                return 'wt';
            case 3:
                return 'śr';
            case 4:
                return 'czw';
            case 5:
                return 'pt';
            case 6:
                return 'sob';
            default:
                return '';
            }
        };
};

Ext.Date.getMonthNumber = function(name) {
  return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
};

Ext.Date.parseCodes.S.s = '(?:st|nd|rd|th)';

if (Ext.picker.Picker){
    Ext.override(Ext.picker.Picker, {
        doneText: 'Done'    
    });
}

if (Ext.picker.Date) {
    Ext.override(Ext.picker.Date, {
        'dayText': 'Dzień',
        'monthText': 'Miesiąc',
        'yearText': 'Rok',
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
        'backText': 'Z powrotem',
        'loadingText': 'Wczytywanie danych...',
        'emptyText': 'Brak dostępnych pozycji.'
    });
}

if(Ext.util.Format){
    Ext.util.Format.defaultDateFormat = 'm/d/Y';
}

if(Ext.MessageBox){
    Ext.MessageBox.OK.text = 'OK';
    Ext.MessageBox.CANCEL.text = 'Anuluj';
    Ext.MessageBox.YES.text = 'Tak';
    Ext.MessageBox.NO.text = 'Nie';
}
