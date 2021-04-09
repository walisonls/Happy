// create map
var map = L.map("mapid").setView([-22.5787973, -47.4495751], 13);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create and add icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  isonSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMArker({ id, name, lat, lng }) {
  // creat popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"></a>`
  );

  // create and add marker
  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll(".orphanages span");
console.log(orphanagesSpan);
orphanagesSpan.forEach((span) => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng,
  };

  addMArker(orphanage);
});
