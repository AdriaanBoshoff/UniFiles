Ext.Date.dayNames = [
    "รร’ยทร”ยตรรฌ",
    "กร‘ยนยทรรฌ",
    'วันอังคาร',
    'วันพุธ',
    'วันพฤหัสบดี',
    'วันศุกร์',
    'เสาร์'             
];

Ext.Date.monthNames = [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม'
];

Ext.Date.monthNumbers = {
      "รโฌ": 0,
      "ยกลธ": 1,
      "รร•โฌ": 2,
      "ร รร": 3,
      "ลธโฌ": 4,
      "รร”ร": 5,
      "ยกโฌ": 6,
      "รโฌ": 7,
      "ยกร": 8,
      "ยตโฌ": 9,
      "ลธร": 10,
      "ลพโฌ": 11
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
        doneText: 'ทำเสร็จแล้ว'    
    });
}

if (Ext.picker.Date) {
    Ext.override(Ext.picker.Date, {
        'dayText': 'วัน',
        'monthText': 'เดือน',
        'yearText': 'ปี',
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
        'backText': 'กลับ',
        'loadingText': 'ยกร“ร…ร‘ยงรขรร…ลฝ..."',
        'emptyText': 'ไม่มีรายการที่มีอยู่'
    });
}

if(Ext.util.Format){
    Ext.util.Format.defaultDateFormat = 'm/d/Y';
}

if(Ext.MessageBox){
    Ext.MessageBox.OK.text = 'ยตยกร…ยง';
    Ext.MessageBox.CANCEL.text = 'รยกร ร…ร”ยก"';
    Ext.MessageBox.YES.text = 'รฃยชรจ';
    Ext.MessageBox.NO.text = 'รครรจรฃยชรจ"';
}
