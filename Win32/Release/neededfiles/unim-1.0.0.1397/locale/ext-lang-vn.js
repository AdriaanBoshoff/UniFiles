Ext.Date.dayNames = [
    "Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"
];

Ext.Date.monthNames = [
    "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
];

Ext.Date.monthNumbers = {
    "Tháng 1": 0,
    "Tháng 2": 1,
    "Tháng 3": 2,
    "Tháng 4": 3,
    "Tháng 5": 4,
    "Tháng 6": 5,
    "Tháng 7": 6,
    "Tháng 8": 7,
    "Tháng 9": 8,
    "Tháng 10": 9,
    "Tháng 11": 10,
    "Tháng 12": 11,
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
        doneText: 'làm xong'    
    });
}

if (Ext.picker.Date) {
    Ext.override(Ext.picker.Date, {
        'dayText': 'Ngày',
        'monthText': 'Tháng',
        'yearText': 'Năm',
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
        'backText': 'Trở lại',
        'loadingText': 'Đang tải...',
        'emptyText': 'Không có mục nào có sẵn.'
    });
}

if(Ext.util.Format){
    Ext.util.Format.defaultDateFormat = 'm/d/Y';
}

if(Ext.MessageBox){
    Ext.MessageBox.OK.text = 'Đồng ý';
    Ext.MessageBox.CANCEL.text = 'Hủy bỏ';
    Ext.MessageBox.YES.text = 'Có';
    Ext.MessageBox.NO.text = 'Không';
}
