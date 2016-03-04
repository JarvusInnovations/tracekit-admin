/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('TracekitAdmin.model.Report', {
    extend: 'Ext.data.Model',
    requires: [
        'TracekitAdmin.proxy.Records'
    ],

    idProperty: 'ID',

    fields: [
        {
            name: "ID",
            type: "int",
            useNull: true
        },
        {
            name: "Class",
            type: "string",
            defaultValue: "Report"
        },
        {
            name: "Created",
            type: "date",
            dateFormat: "timestamp",
            useNull: true
        },
        {
            name: "CreatorID",
            type: "int",
            useNull: true
        },
        {
            name: "error_mode",
            type: "string"
        },
        {
            name: "error_name",
            type: "string"
        },
        {
            name: "message",
            type: "string"
        },
        {
            name: "url",
            type: "string"
        },
        {
            name: "useragent",
            type: "string"
        }
    ],

    proxy: {
        type: 'tracekitadmin',
        url: '/api/reports'
    }

});
