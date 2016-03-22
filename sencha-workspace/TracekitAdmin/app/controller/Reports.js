/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('TracekitAdmin.controller.Reports', {
    extend: 'Ext.app.Controller',

    // entry points
    control: {
        'report-grid': {
            select: 'onReportGridSelected'
        },
        'report-stackgrid': {
            select: 'onReportStackGridSelected'
        }
    },

    listen: {
        store: {
             '#Stacks': {
                 load: 'onStacksStoreLoad'
             }
         }
    },


    // controller configuration
    stores: [
        'Reports',
        'Stacks'
    ],

    views: [
        'report.Frame',
        'report.Grid',
        'report.StackGrid',
        'report.StackView'
    ],

    refs: [{
        ref : 'stackView',
        selector: 'report-stackview'
    }],


    // event handlers
    onStacksStoreLoad: function() {
        this.getStackView().update({stack: ''});
    },

    onReportGridSelected: function(grid,rec) {
        this.getStacksStore().load({
            params: {
                error_report_id: rec.getId()
            }
        });
    },

    onReportStackGridSelected: function(grid,rec) {
        this.getStackView().update({stack: rec.get('Context')});
    }

});
