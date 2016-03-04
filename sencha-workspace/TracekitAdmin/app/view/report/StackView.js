/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('TracekitAdmin.view.report.StackView', {
    extend: 'Ext.panel.Panel',
    xtype: 'report-stackview',

    autoScroll  : true,

    tpl: '<pre>{stack}</pre>'
});

