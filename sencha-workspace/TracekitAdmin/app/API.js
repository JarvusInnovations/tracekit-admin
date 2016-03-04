Ext.define('TracekitAdmin.API', {
    extend: 'Emergence.util.AbstractAPI',
    singleton: true

}, function(API) {
    var pageParams = Ext.Object.fromQueryString(location.search);

    // allow API host to be overridden via apiHost param
    if (pageParams.apiHost) {
        API.setHost(pageParams.apiHost);
    }
});
