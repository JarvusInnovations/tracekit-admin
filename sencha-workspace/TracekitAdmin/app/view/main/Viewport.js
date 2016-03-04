/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 */
Ext.define('TracekitAdmin.view.main.Viewport', {
    extend: 'Ext.Panel',
    xtype: 'main-viewport',

    title: 'Viewport',

    layout: 'fit',

    items: {
        xtype: 'report-frame'
    }

});
