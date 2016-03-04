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
            name: "error_report_id",
            type: "int"
        },
        {
            name: "stack_item",
            type: "int"
        },
        {
            name: "url",
            type: "string"
        },
        {
            name: "line",
            type: "string"
        },
        {
            name: "column_no",
            type: "string"
        },
        {
            name: "func",
            type: "string"
        },
        {
            name: "context",
            type: "string"
        }
    ],

    proxy: {
        type: 'tracekitadmin',
        url: '/api/stacks'
    }

});
