const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// get values from html
const locationSpan = document.querySelector("#location");
const lat = locationSpan.dataset.lat;
const lng = locationSpan.dataset.lng;

// create map
const map = L.map("mapid", options).setView([lat, lng], 13);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create and add icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  isonSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create and add marker
L.marker([lat, lng], { icon }).addTo(map);

// image gallery
function selectImage(event) {
  const button = event.currentTarget;

  // remover todas as classes 'active' nos botões
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // selecionar a imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // atualizar o container de imagem selecionada
  imageContainer.src = image.src;

  // adicionar a classe 'active' para o botão clicado
  button.classList.add("active");
}
