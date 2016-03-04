/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('TracekitAdmin.view.report.Frame', {
    extend: 'Ext.Container',
    xtype: 'report-frame',

    requires: [
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox'
    ],

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [{
        xtype: 'report-grid',
        split: true,
        flex: 10
    },{
        xtype: 'container',
        flex: 10,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'report-stackgrid',
            split: true,
            flex: 10
        },{
            xtype: 'report-stackview',
            split: true,
            flex: 10
        }]
    }]
});
