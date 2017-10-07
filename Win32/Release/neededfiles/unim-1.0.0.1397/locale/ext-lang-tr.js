Ext.Date.dayNames = [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi'
];

Ext.Date.monthNames = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık'
];

Ext.Date.monthNumbers = {
    'Oca': 0,
    'Şub': 1,
    'Mar': 2,
    'Nis': 3,
    'May': 4,
    'Haz': 5,
    'Tem': 6,
    'Ağu': 7,
    'Eyl': 8,
    'Eki': 9,
    'Kas': 10,
    'Ara': 11
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
        doneText: 'Tamam'    
    });
}

if (Ext.picker.Date) {
    Ext.override(Ext.picker.Date, {
        'dayText': 'Gün',
        'monthText': 'Ay',
        'yearText': 'Yıl',
        'slotOrder': ['day', 'month', 'year']    
    });
}

if(Ext.IndexBar){
    Ext.override(Ext.IndexBar, {
        'letters': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']    
    });
}

if(Ext.NestedList){
    Ext.override(Ext.NestedList, {
        'backText': 'Geri',
        'loadingText': 'Yükleniyor...',
        'emptyText': 'Hiçbir kalem bulunamadı.'
    });
}

if(Ext.util.Format){
    Ext.util.Format.defaultDateFormat = 'd/m/Y';
}

if(Ext.MessageBox){
    Ext.MessageBox.OK.text = 'Tamam';
    Ext.MessageBox.CANCEL.text = 'İptal';
    Ext.MessageBox.YES.text = 'Evet';
    Ext.MessageBox.NO.text = 'Hayır';
}
