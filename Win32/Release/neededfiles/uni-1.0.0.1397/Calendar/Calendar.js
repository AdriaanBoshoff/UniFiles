/*!
 * uniGUI Library extension for ExtJS
 * by Farshad Mohajeri  
 * Copyright(c) 2009-2015 FMSoft Inc.
 * info@fmsoft.net
 * http://www.unigui.com
 !*/


Ext.override(Ext.calendar.CalendarPanel, {
	setStartDate: function(dt) {
		this.callParent(arguments);
		this.startDate = dt;
  }
});

