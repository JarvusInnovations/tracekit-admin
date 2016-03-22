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
        xtype: 'datecolumn',
        format: 'Y-m-d h:i:s A',
        flex: 2
    },{
        header: 'App',
        dataIndex: 'ApplicationName',
        flex: 2
    },{
        header: 'Error',
        dataIndex: 'ErrorName',
        flex: 2
    },{
        header: 'Mode',
        dataIndex: 'ErrorMode',
        flex: 1
    },{
        header: 'Message',
        dataIndex: 'ErrorMessage',
        flex: 3,
        renderer: function(val) {
            return '<span data-qtip="'+val+'">'+val+'</span>';
        }
    },{
        header: 'User Agent',
        dataIndex: 'UserAgent',
        flex: 3,
        renderer: function(val) {
            return '<span data-qtip="'+val+'">'+val+'</span>';
        }
    }]

});
