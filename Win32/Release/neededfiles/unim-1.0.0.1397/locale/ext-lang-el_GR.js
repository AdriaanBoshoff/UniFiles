Ext.Date.dayNames = [
    "Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"
];

Ext.Date.monthNames = [
    "Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"
];

Ext.Date.monthNumbers = {
    "Ιαν":0, 
    "Φεβ": 1, 
    "Μάρ": 2,
    "Απρ": 3, 
    "Μάι": 4, 
    "Ιού": 5, 
    "Ιού": 6, 
    "Αύγ": 7, 
    "Σεπ": 8, 
    "Οκτ": 9, 
    "Νοέ": 10, 
    "Δεκ": 11
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
        doneText: 'Έγινε'    
    });
}

if (Ext.picker.Date) {
    Ext.override(Ext.picker.Date, {
        'dayText': 'Ημέρα',
        'monthText': 'Μήνας',
        'yearText': 'Ετος',
        'slotOrder': ['month', 'day', 'year']    
    });
}

if(Ext.IndexBar){
    Ext.override(Ext.IndexBar, {
        'letters': ['Α', 'Β', 'Γ', 'Δ',	'Ε', 'Ζ', 'Η', 'Θ', 'Ι', 'Κ', 'Λ', 'Μ',	'Ν', 'Ξ',	'Ο', 'Π', 'Ρ', 'Σ', 'Τ', 'Υ', 'Φ', 'Χ', 'Ψ', 'Ω']    
    });
}

if(Ext.NestedList){
    Ext.override(Ext.NestedList, {
        'backText': 'Πίσω',
        'loadingText': 'Φόρτωση...',
        'emptyText': 'Δεν υπάρχουν διαθέσιμα στοιχεία.'
    });
}

if(Ext.util.Format){
    Ext.util.Format.defaultDateFormat = 'm/d/Y';
}

if(Ext.MessageBox){
    Ext.MessageBox.OK.text = 'Καλά';
    Ext.MessageBox.CANCEL.text = 'Ακύρωση';
    Ext.MessageBox.YES.text = 'Vαί';
    Ext.MessageBox.NO.text = 'Όχι';
}
