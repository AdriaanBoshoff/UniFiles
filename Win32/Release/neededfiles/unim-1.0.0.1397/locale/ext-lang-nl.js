Ext.Date.dayNames = [
    'Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'
];

Ext.Date.monthNames = [
    'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'
];

Ext.Date.monthNumbers = {
    Jan: 0,
    Feb: 1,
    Mrt: 2,
    Apr: 3,
    Mei: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Okt: 9,
    Nov: 10,
    Dec: 11
};

Ext.Date.getShortMonthName = function(month) {
    if (month == 2) {
        return 'mrt';
    }
    return Ext.Date.monthNames[month].substring(0, 3);
};

Ext.Date.getShortDayName = function(day) {
    return Ext.Date.dayNames[day].substring(0, 3);
};

Ext.Date.getMonthNumber = function(name) {
  var sname = name.substring(0, 3).toLowerCase();
  if (sname == 'maa') {
      return 2;
  }
  return Ext.Date.monthNumbers[sname];
};

Ext.Date.parseCodes.S.s = '(?:st|nd|rd|th)';

if (Ext.picker.Picker){
    Ext.override(Ext.picker.Picker, {
        doneText: 'Gedaan'    
    });
}

if (Ext.picker.Date) {
    Ext.override(Ext.picker.Date, {
        'dayText': 'Dag',
        'monthText': 'Maand',
        'yearText': 'Jaar',
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
        'backText': 'Terug',
        'loadingText': 'Bezig met laden...',
        'emptyText': 'Geen items aanwezig.'
    });
}

if(Ext.util.Format){
    Ext.util.Format.defaultDateFormat = 'm/d/Y';
}

if(Ext.MessageBox){
    Ext.MessageBox.OK.text = 'OK';
    Ext.MessageBox.CANCEL.text = 'Annuleren';
    Ext.MessageBox.YES.text = 'Ja';
    Ext.MessageBox.NO.text = 'Nee';
}
