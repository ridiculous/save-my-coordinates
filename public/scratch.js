(new google.maps.DirectionsService()).route({
    origin: new google.maps.LatLng(20.886570, -156.475375),
    destination: new google.maps.LatLng(20.8943, -156.4377),
    waypoints: [
        {
            location: new google.maps.LatLng(20.883693, -156.471705)
        },
        {
            location: new google.maps.LatLng(20.88789, -156.4676064)
        }
    ],
    travelMode: 'DRIVING'
}, function (result, status) {
    var x = google.maps.geometry.encoding.encodePath(result.routes[0].overview_path);
    console.log(x)
});
// get current users location
var t = navigator.geolocation.getCurrentPosition(function(a) { alert(a) })
t.coords.latitude + ','+ t.coords.longitude
/*
URL for a static map fof upcountry islander
http://maps.googleapis.com/maps/api/staticmap?zoom=14&size=600x600&sensor=false&maptype=roadmap&path=weight:3|enc:_in~Bzy`z\dAUt@Ml@EtAIb@Df@RHKJ_@d@mBPmANcBNgCP{CNmIBs@{@]sBq@uA[eEe@cAMoAe@q@a@c@c@i@{@e@mASu@qA_Gj@Qk@PqA{FuA}FcA_EcBsHOc@Ua@}@_AqA}@_BaAxAaCfFkIlAoBzD}G`C{DlDoG~AcDnCmF[KoE}AiE_Bc@_@g@q@]u@yBuFgEyK{GePaBiEeAuByAkDk@aBw@eBAW?o@Da@tC}EN_@F]Ag@Ci@MYeJgGw@m@
 */
