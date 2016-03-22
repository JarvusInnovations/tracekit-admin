/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('TracekitAdmin.view.report.StackGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'report-stackgrid',

    store: 'Stacks',

    autoScroll: true,

    columns : {
        defaults: {
            sortable: false,
            menuDisabled: true
        },
        items: [{
            header: '#',
            dataIndex: 'StackItem',
            width: 24,
            align: 'right'
        },{
            header: 'Url',
            dataIndex: 'Url',
            flex: 6
        },{
            header: 'line',
            dataIndex: 'Line',
            width: 64,
            align: 'right'
        },{
            header: 'func',
            dataIndex: 'Func',
            flex: 3
        }]
    }
});
