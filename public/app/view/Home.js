Ext.define('MBA.view.Home', {
    extend: 'Ext.Map',
    xtype: 'homepanel',
    requires: [
        'Ext.Map'
    ],

    config: {
        title: 'Home',
        iconCls: 'home',
        styleHtmlContent: true,
        scrollable: true,
        html: '<div id="map_canvas" style="width:100%; height:100%"></div>'
    }
});