/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('TracekitAdmin.view.report.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'report-grid',
    store: 'Reports',

    autoScroll: true,

    viewConfig: {
        loadMask : { msg : 'loading' },
        emptyText: 'No data found'
    },

    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'Reports',
        dock: 'bottom',
        displayInfo: true
    }],

    columns : [{
        header: 'Created',
        dataIndex: 'Created',
        width: 124,
        xtype: 'datecolumn',
        format: 'Y-m-d h:i:s A'
    },{
        header: 'App',
        dataIndex: 'app_name',
        width: 144
    },{
        header: 'Error',
        dataIndex: 'error_name',
        flex: 1
    },{
        header: 'Mode',
        dataIndex: 'error_mode',
        width: 64
    },{
        header: 'Message',
        dataIndex: 'message',
        flex: 3,
        renderer: function(val) {
            return '<span data-qtip="'+val+'">'+val+'</span>';
        }
    }]

});
