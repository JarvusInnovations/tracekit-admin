/*jslint browser: true, undef: true *//*global Ext*/
Ext.define('TracekitAdmin.proxy.Records', {
    extend: 'Emergence.proxy.Records',
    alias: 'proxy.tracekitadmin',

    connection: 'TracekitAdmin.API'
});
