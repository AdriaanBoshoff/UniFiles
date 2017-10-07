Ext.Date.dayNames = [
    "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"
];

Ext.Date.monthNames = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

Ext.Date.monthNumbers = {
    'Янв': 0,
    'Фев': 1,
    'Мар': 2,
    'Апр': 3,
    'Май': 4,
    'Июн': 5,
    'Июл': 6,
    'Авг': 7,
    'Сен': 8,
    'Окт': 9,
    'Ноя': 10,
    'Дек': 11
};

Ext.Date.shortMonthNames = ["Янв", "Февр", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сент", "Окт", "Нояб", "Дек"];
 
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
        doneText: 'Сделано'    
    });
}

if (Ext.picker.Date) {
    Ext.override(Ext.picker.Date, {
        'dayText': 'День',
        'monthText': 'Mесяц',
        'yearText': 'Год',
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
        'backText': 'Oбратно',
        'loadingText': 'Загрузка...',
        'emptyText': 'Нет продуктов, доступных.'
    });
}

if(Ext.util.Format){
    Ext.util.Format.defaultDateFormat = 'm/d/Y';
}

if(Ext.MessageBox){
    Ext.MessageBox.OK.text = 'OK';
    Ext.MessageBox.CANCEL.text = 'Отмена';
    Ext.MessageBox.YES.text = 'Да';
    Ext.MessageBox.NO.text = 'Нет';
}
