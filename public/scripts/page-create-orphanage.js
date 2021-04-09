// create map
var map = L.map("mapid").setView([-22.5787973, -47.4495751], 13);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  isonSize: [58, 68],
  iconAnchor: [29, 68],
});

// create and add marker
let marker;
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove previous icons
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photo field
function addPhotoField() {
  // pegar o container de fotos #images
  const container = document.querySelector("#images");
  // pegar o container para duplicar .new-image
  const fieldContainers = document.querySelectorAll(".new-upload");
  // realizar o clone da última imagem adicionada
  const newFieldContainer = fieldContainers[
    fieldContainers.length - 1
  ].cloneNode(true);
  // verificar se o campo está vazio; se sim não adicionar outro
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }
  // limpar o campo
  newFieldContainer.children[0].value = "";
  // adicionar o clone ao container de imagens
  container.appendChild(newFieldContainer);
}

// delete photo field
function deletePhotoField(event) {
  const span = event.currentTarget;
  const fieldContainers = document.querySelectorAll(".new-upload");
  if (fieldContainers.length <= 1) {
    span.parentNode.children[0].value = "";
    return;
  }
  // deletar o campo
  span.parentNode.remove();
}

// select yes or no
function toggleSelect(event) {
  // retirar as classes .active
  const buttons = document.querySelectorAll(".button-select button");
  buttons.forEach((button) => button.classList.remove("active"));
  // colocar a classe .active
  const button = event.currentTarget;
  button.classList.add("active");
  // atualizar o input hidden com o valor selecionado
  const input = document.querySelector("[name=open-on-weekends]");
  input.value = button.dataset.value;
}
