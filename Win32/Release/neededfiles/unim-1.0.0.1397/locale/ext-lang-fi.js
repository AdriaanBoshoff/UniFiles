Ext.Date.dayNames = [
    "sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"
];

Ext.Date.monthNames = [
    "tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"
];

Ext.Date.monthNumbers = {
    'tammikuu': 0,
    'helmikuu': 1,
    'maaliskuu': 2,
    'huhtikuu': 3,
    'toukokuu': 4,
    'kesäkuu': 5,
    'heinäkuu': 6,
    'elokuu': 7,
    'syyskuu': 8,
    'lokakuu': 9,
    'marraskuu': 10,
    'joulukuu': 11
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
        doneText: 'Valmis'    
    });
}

if (Ext.picker.Date) {
    Ext.override(Ext.picker.Date, {
        'dayText': 'Päivä',
        'monthText': 'Kuukausi',
        'yearText': 'Vuosi',
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
        'backText': 'Takaisin',
        'loadingText': 'Ladataan...',
        'emptyText': 'Ei kohteita saatavilla.'
    });
}

if(Ext.util.Format){
    Ext.util.Format.defaultDateFormat = 'm/d/Y';
}

if(Ext.MessageBox){
    Ext.MessageBox.OK.text = 'Okei';
    Ext.MessageBox.CANCEL.text = 'Peruuttaa';
    Ext.MessageBox.YES.text = 'Kyllä';
    Ext.MessageBox.NO.text = 'Ei';
}
