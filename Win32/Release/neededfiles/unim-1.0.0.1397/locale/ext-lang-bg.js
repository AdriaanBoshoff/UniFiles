Ext.Date.dayNames = [
    "Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"
];

Ext.Date.monthNames = [
    "Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"
];

Ext.Date.monthNumbers = {
    'Jan': 0,
    'Feb': 1,
    'Mar': 2,
    'Apr': 3,
    'May': 4,
    'Jun': 5,
    'Jul': 6,
    'Aug': 7,
    'Sep': 8,
    'Oct': 9,
    'Nov': 10,
    'Dec': 11
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
        doneText: 'Свършен'    
    });
}

if (Ext.picker.Date) {
    Ext.override(Ext.picker.Date, {
        'dayText': 'Ден',
        'monthText': 'Месец',
        'yearText': 'Година',
        'slotOrder': ['month', 'day', 'year']    
    });
}

if(Ext.IndexBar){
    Ext.override(Ext.IndexBar, {
        'letters': ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ь', 'Ю', 'Я']    
    });
}

if(Ext.NestedList){
    Ext.override(Ext.NestedList, {
        'backText': 'Обратно',
        'loadingText': 'Товарене...',
        'emptyText': 'Няма елементи на разположение..'
    });
}

if(Ext.util.Format){
    Ext.util.Format.defaultDateFormat = 'm/d/Y';
}

if(Ext.MessageBox){
    Ext.MessageBox.OK.text = 'Добре';
    Ext.MessageBox.CANCEL.text = 'Анулира';
    Ext.MessageBox.YES.text = 'Да';
    Ext.MessageBox.NO.text = 'Не';
}
