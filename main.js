mapboxgl.accessToken="pk.eyJ1IjoieWF6ZC1rb3R3YWwiLCJhIjoiY2txcWpxeGRoMTZuNTJvc3R6b3Q3M2hsaCJ9.tDFhJxBD255skqjhNe8lpw";
let latitude=22.7868542,longitude=88.3643296
var map=new mapboxgl.Map({
    container:"map",
    style:"mapbox://styles/mapbox/streets-v11",
    center:[longitude,latitude],
    zoom:18
});
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true,
        },
        trackUserLocation:true
    })
);
map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    "top-left"
)