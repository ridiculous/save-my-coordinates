Ext.define('MBA.controller.coordinates', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            locationForm: '#ext-tab-2',
            latitude: 'ext-element-32',
            longitude: 'ext-element-38'
        },
        control: {
            locationForm: {
                tap: 'loadCoords'
            }
        }
    },
    loadCoords: function () {
        var $lat = document.getElementById(this.config.refs.latitude)
            , $long = document.getElementById(this.config.refs.longitude);

        if (MBA.app.coords.lat === 0) {
            navigator.geolocation.getCurrentPosition(function (loc) {
                $lat.value = loc.coords.latitude;
                $long.value = loc.coords.longitude;
            });
        } else {
            $lat.value = MBA.app.coords.lat;
            $long.value = MBA.app.coords.lng;
        }

    }
});