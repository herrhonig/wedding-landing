ymaps.ready(init);

function init() {
  const coords = [56.049013, 36.734825];

  const map = new ymaps.Map("map", {
    center: coords,
    zoom: 15,
    controls: [],
  });

  const placemark = new ymaps.Placemark(
    coords,
    {
      balloonContent: "Мы будем здесь 💍",
    },
    {
      preset: "islands#redIcon",
    },
  );

  map.geoObjects.add(placemark);
}
