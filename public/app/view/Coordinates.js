Ext.define('MBA.view.Coordinates', {
    extend: 'Ext.form.Panel',
    xtype: 'locationform',
    requires: ['Ext.form.FieldSet'],

    config: {
        title: 'Coordinates',
        iconCls: 'arrow_down',
        url: '/location',
        items: [
            {
                xtype: 'fieldset',
                title: 'New Location',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        label: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'latitude',
                        label: 'Latitude'
                    },
                    {
                        xtype: 'textfield',
                        name: 'longitude',
                        label: 'Longitude'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Save',
                ui: 'info',
                handler: function () {
                    this.up('locationform').submit();
                }
            }
        ]
    }
});