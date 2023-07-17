// Initialize the Leaflet map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer (OpenStreetMap) to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
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

// Define a GeoJSON layer for overlay
var geojsonLayer = L.geoJSON(null, {
    style: function (feature) {
        return {
            color: 'green',
            weight: 2,
            fillOpacity: 0.5,
        };
    },
});

// Load GeoJSON data and add it to the layer
// Replace 'path/to/your/geojson/file.geojson' with the actual path to your GeoJSON file
fetch('path/to/your/geojson/file.geojson')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        geojsonLayer.addData(data);
    });

// Add the GeoJSON layer to the map
geojsonLayer.addTo(map);
