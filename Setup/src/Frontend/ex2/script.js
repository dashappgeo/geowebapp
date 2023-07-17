// Initialize the Leaflet map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer (OpenStreetMap) to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(map);

// Define the GeoServer WMS layer URL
var wmsUrl = 'http://localhost:8080/geoserver/wms';

// Add a WMS layer from GeoServer
var wmsLayer = L.tileLayer.wms(wmsUrl, {
    layers: 'workspace:layer_name',
    format: 'image/png',
    transparent: true,
}).addTo(map);

// Define marker locations and popups
var markers = [
    {
        latlng: [51.5, -0.1],
        popupText: 'Marker 1: This is a point of interest.',
    },
    {
        latlng: [51.505, -0.09],
        popupText: 'Marker 2: Another interesting location.',
    },
    // Add more marker objects as needed
];

// Add markers and popups to the map
markers.forEach(function (marker) {
    L.marker(marker.latlng)
        .addTo(map)
        .bindPopup(marker.popupText);
});
