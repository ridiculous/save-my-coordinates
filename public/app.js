//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'MBA': 'app'
});
//</debug>

var bus = {};

Ext.application({
    controllers: ["coordinates"],

    name: 'MBA',

    requires: [
        'Ext.MessageBox',
        'Ext.Map'
    ],

    views: ['Main', 'Home', 'Coordinates'],
    layout: 'fit',
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },
    coords: {
        lat: 0,
        lng: 0
    },
    launch: function () {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('MBA.view.Main'));
        navigator.geolocation.getCurrentPosition(function (loc) {
            MBA.app.coords.lat = loc.coords.latitude;
            MBA.app.coords.lng = loc.coords.longitude;
            var myLatlng = new google.maps.LatLng(MBA.app.coords.lat, MBA.app.coords.lng)
                , mapOptions = {
                    center: myLatlng,
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }
                , myMap = new google.maps.Map(document.getElementById("ext-element-8"), mapOptions)
                , marker = new google.maps.Marker({
                    position: myLatlng,
                    map: myMap,
                    title: "My Current Location"
                });

            Ext.Viewport.add({
                xtype: 'map',
                useCurrentLocation: true,
                map: myMap
            });
        });
    },

    onUpdated: function () {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function (buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
