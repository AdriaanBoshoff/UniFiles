Ext.Date.dayNames = [
    "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"
];

Ext.Date.monthNames = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];

Ext.Date.monthNumbers = {
    "Janvier": 0,
    "Janv": 0,
    "Février": 1,
    "Févr": 1,
    "Mars": 2,
    "Avril": 3,
    "Avr": 3,
    "Mai": 4,
    "Juin": 5,
    "Juillet": 6,
    "Juil": 6, 
    "Août": 7,
    "Septembre": 8,
    "Sept": 8,
    "Octobre": 9,
    "Oct": 9,
    "Novembre": 10,
    "Nov": 10,
    "Décembre": 11,
    "Déc": 11
};

Ext.Date.shortMonthNames = ["Janv", "Févr", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"];

        Ext.Date.getShortMonthName = function(month) {
            return Ext.Date.shortMonthNames[month];
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
        doneText: 'Fini'    
    });
}

if (Ext.picker.Date) {
    Ext.override(Ext.picker.Date, {
        'dayText': 'Jour',
        'monthText': 'Mois',
        'yearText': 'Année',
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
        'backText': 'Arrière',
        'loadingText': 'Chargement...',
        'emptyText': 'Aucun éléments disponibles.'
    });
}

if(Ext.util.Format){
    Ext.util.Format.defaultDateFormat = 'm/d/Y';
}

if(Ext.MessageBox){
    Ext.MessageBox.OK.text = 'Bien';
    Ext.MessageBox.CANCEL.text = 'Annuler';
    Ext.MessageBox.YES.text = 'Oui';
    Ext.MessageBox.NO.text = 'Aucun';
}
