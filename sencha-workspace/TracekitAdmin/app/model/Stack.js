/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('TracekitAdmin.model.Stack', {
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
            defaultValue: "Stack"
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
            name: "ReportID",
            type: "int"
        },
        {
            name: "StackItem",
            type: "int"
        },
        {
            name: "Url",
            type: "string"
        },
        {
            name: "Line",
            type: "string"
        },
        {
            name: "ColumnNo",
            type: "string"
        },
        {
            name: "Func",
            type: "string"
        },
        {
            name: "Context",
            type: "string"
        }
    ],

    proxy: {
        type: 'tracekitadmin',
        url: '/api/stacks'
    }

});
