// Leaflet map для Алматы
var map = L.map('map').setView([43.238949, 76.889709], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Пример маркеров пунктов переработки
var recyclePoints = [
  {lat:43.240, lng:76.89, name:"Пункт переработки 1"},
  {lat:43.245, lng:76.88, name:"Пункт переработки 2"},
  {lat:43.235, lng:76.895, name:"Пункт переработки 3"}
];

recyclePoints.forEach(function(p){
  L.marker([p.lat, p.lng]).addTo(map)
    .bindPopup(p.name);
});
