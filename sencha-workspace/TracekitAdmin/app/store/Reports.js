/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('TracekitAdmin.store.Reports', {
    extend: 'Ext.data.Store',
    model: 'TracekitAdmin.model.Report',

    pageSize: 25,
    autoLoad: {start: 0, limit: 25},
    remoteSort: true

});
