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
            dataIndex: 'stack_item',
            width: 24,
            align: 'right'
        },{
            header: 'Url',
            dataIndex: 'url',
            flex: 6
        },{
            header: 'line',
            dataIndex: 'line',
            width: 64,
            align: 'right'
        },{
            header: 'func',
            dataIndex: 'func',
            flex: 3
        }]
    }
});
