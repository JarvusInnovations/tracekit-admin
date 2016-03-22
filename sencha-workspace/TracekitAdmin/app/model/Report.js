/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('TracekitAdmin.model.Report', {
    extend: 'Ext.data.Model',
    requires: [
        'TracekitAdmin.proxy.Records'
    ],

    idProperty: 'ID',

    fields: [
        {
            name: 'ID',
            type: 'int',
            useNull: true
        },
        {
            name: 'Class',
            type: 'string',
            defaultValue: 'Report'
        },
        {
            name: 'Created',
            type: 'date',
            dateFormat: 'timestamp',
            useNull: true
        },
        {
            name: 'CreatorID',
            type: 'int',
            useNull: true
        },
        {
            name: 'ApplicationName',
            type: 'string'
        },
        {
            name: 'ErrorMode',
            type: 'string'
        },
        {
            name: 'ErrorMode',
            type: 'string'
        },
        {
            name: 'ErrorUrl',
            type: 'string'
        },
        {
            name: 'UserAgent',
            type: 'string'
        }
    ],

    proxy: {
        type: 'tracekitadmin',
        url: '/tracekit/report'
    }

});
