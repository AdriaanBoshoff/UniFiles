/*!
 * uniGUI Library extension for ExtJS
 * by Farshad Mohajeri  
 * Copyright(c) 2009-2015 FMSoft Inc.
 * info@fmsoft.net
 * http://www.unigui.com
 !*/

Ext.override(Ext.calendar.dd.DragZone, {
	constructor:	function(el, config) { 
		Ext.calendar._statusProxyInstance =	this.proxy = new Ext.calendar.dd.StatusProxy();
		this.callParent(arguments);
	}
});

Ext.override(Ext.calendar.view.Month, {
    // private
    initDD: function() {
        var cfg = {
            view: this,
            createText: this.ddCreateEventText,
            moveText: this.ddMoveEventText,
            ddGroup: 'MonthViewDD'+this.id 
        };									

        this.dragZone = new Ext.calendar.dd.DragZone(this.el, cfg);
        this.dropZone = new Ext.calendar.dd.DropZone(this.el, cfg);
    }
});

// http://ext.ensible.com/forum/viewtopic.php?f=3&t=57&hilit=dst&start=10
Ext.override(Ext.calendar.view.AbstractCalendar, {
    // private
    prepareData: function() {
        var lastInMonth = Ext.Date.getLastDateOfMonth(this.startDate),
            w = 0, d,
            dt = Ext.Date.clone(this.viewStart),
            weeks = this.weekCount < 1 ? 6: this.weekCount;

        this.eventGrid = [[]];
        this.allDayGrid = [[]];
        this.evtMaxCount = [];
        
        var evtsInView = this.store.queryBy(function(rec) {
            return this.isEventVisible(rec.data);
        },
        this);

        for (; w < weeks; w++) {
            this.evtMaxCount[w] = 0;
            if (this.weekCount == -1 && dt > lastInMonth) {
                //current week is fully in next month so skip
                break;
            }
            this.eventGrid[w] = this.eventGrid[w] || [];
            this.allDayGrid[w] = this.allDayGrid[w] || [];

            for (d = 0; d < this.dayCount; d++) {
                if (evtsInView.getCount() > 0) {
                    var evts = evtsInView.filterBy(function(rec) {
                        var startDt = Ext.Date.clearTime(rec.data[Ext.calendar.data.EventMappings.StartDate.name], true),
//                            startsOnDate = dt.getTime() == startDt.getTime(), // FM: UNG-1877
  													startsOnDate = Ext.Date.clearTime(dt).getTime() == startDt.getTime(),
                            spansFromPrevView = (w == 0 && d == 0 && (dt > rec.data[Ext.calendar.data.EventMappings.StartDate.name]));
                            
                        return startsOnDate || spansFromPrevView;
                    },
                    this);

                    this.sortEventRecordsForDay(evts);
                    this.prepareEventGrid(evts, w, d);
                }
                dt = Ext.calendar.util.Date.add(dt, {days: 1});
            }
        }
        this.currentWeekCount = w;
    }
});