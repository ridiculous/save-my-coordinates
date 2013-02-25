Ext.define('MBA.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'top',

        items: [
            {
                xtype: 'homepanel'
            },
            {
                xtype: 'locationform',
                id: 'locationForm'
            }
        ]
    }
});
