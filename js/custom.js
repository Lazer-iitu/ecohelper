
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);


/* =========================
   Leaflet Map (Almaty)
========================= */
document.addEventListener("DOMContentLoaded", () => {
  if (typeof L === "undefined") return;

  const mapEl = document.getElementById("map");
  if (!mapEl) return;

  // Initialize map
  const map = L.map("map").setView([43.238949, 76.889709], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);


    const locations = [
  // ♻️ PAPER RECYCLING
  { name: "Kazakhstan Waste Recycling", type: "Paper", coords: [43.2375, 76.8848], address: "мкр. Аксай-3а, ул. Толеби (между Момышулы и Яссауи)", phone: "+7 701 721 55 72", hours: "Mon-Fri 10:00–17:30" },
  { name: "Kagazy Recycling", type: "Paper", coords: [43.2239, 76.8685], address: "ул. Шаляпина, уг. ул. Алтынсарина", phone: "+7 771 993 86 92" },
  { name: "KazWaste – Сары-Арка", type: "Paper", coords: [43.2421, 76.8628], address: "мкр-4, дом 22 (возле кинотеатра Сары-Арка)", phone: "+7 701 721 55 31" },
  { name: "Стрела – Прием макулатуры", type: "Paper", coords: [43.2473, 76.9186], address: "ул. Толеби уг. ул. Байзакова", phone: "+7 701 721 55 41" },
  { name: "Жолдасбекова/Мендикулова", type: "Paper", coords: [43.2193, 76.9369], address: "ул. Жолдасбекова уг. ул. Мендикулова", phone: "+7 701 721 55 30" },
  { name: "Тимирязева 81", type: "Paper", coords: [43.2256, 76.9089], address: "ул. Тимирязева 81 уг. ул. Ауэзова", phone: "+7 701 721 55 73" },
  { name: "Ворошилова 15А", type: "Paper", coords: [43.2894, 76.9122], address: "ул. Ворошилова 15 А", phone: "245-81-33" },
  { name: "ТОO РЕИЗ", type: "Paper", coords: [43.3048, 76.9486], address: "ул. Бекмаханова 93", phone: "30-00-454" },
  { name: "ТОO КАРИНА TRADING", type: "Paper", coords: [43.2682, 76.9194], address: "ул. Казыбаева 264 А", phone: "+7 701 557 57 64" },
  { name: "Компания Маолин", type: "Paper", coords: [43.2199, 76.8577], address: "мкр. Мамыр, ул. Садовый бульвар 1 З", phone: "+7 777 008 83 50" },
  { name: "Вторсырье-Маркет", type: "Paper", coords: [43.2652, 76.9225], address: "ул. Казыбаева 26", phone: "+7 701 744 26 43" },
  { name: "ИП Михаил (мобильный пункт)", type: "Paper", coords: [43.2435, 76.8901], address: "Передвижной пункт, город Алматы", phone: "+7 707 680 73 10" },
  { name: "ЭкоПромПереработка", type: "Paper", coords: [43.4098, 77.0193], address: "п. Отеген Батыр, ул. Калинина 17 А", phone: "8 (727) 973-51-82" },

  // 🔋 BATTERY / ACCUMULATORS
  { name: "Кайнар АКБ", type: "Battery", coords: [43.2484, 76.9178], address: "ул. Казыбаева 3", phone: "233-28-40" },
  { name: "Аккумуляторный центр БАРС", type: "Battery", coords: [43.2498, 76.9105], address: "ул. Казыбаева 5 (ACBARS)", phone: "+7 701 963 28 32", link: "https://acbars.kz" },
  { name: "Сынап плюс", type: "Battery", coords: [43.2796, 76.9881], address: "пр. Рыскулова 51", phone: "384-39-12" },
  { name: "АлматыЭкологоСтрой", type: "Battery", coords: [43.2171, 76.8704], address: "9 мкр-н, д. 9", phone: "242-40-20" },
  { name: "КСК Коктем-1", type: "Battery", coords: [43.2284, 76.9372], address: "мкр. Коктем-1, д. 45 (за магазином Ардагер)" },
  { name: "ПКСК Елим Ай", type: "Battery", coords: [43.2396, 76.9311], address: "ул. Сатпаева 50 уг. Жарокова", phone: "245-95-35" },
  { name: "КСК Надежда", type: "Battery", coords: [43.2278, 76.9197], address: "ул. Байкадамова 10 (между Розыбакиева и Жарокова)" },
  { name: "КСК Орбита-1", type: "Battery", coords: [43.2123, 76.8578], address: "мкр. Орбита-1, д. 10 по Навои", phone: "265-60-69" },
  { name: "ПКСК Алмагуль", type: "Battery", coords: [43.2264, 76.9533], address: "мкр. Алмагуль, 49", phone: "396-29-05" },
  { name: "КСК Жалын (Медикер)", type: "Battery", coords: [43.2146, 76.8608], address: "Орбита-1, под аркой магазина «Медикер»" },

  // 💻 ELECTRONIC WASTE / ECOBOXES
  { name: "Satel Kazakhstan", type: "Electronics", coords: [43.2636, 76.9431], address: "ул. Жибек Жолы 106 уг. Абылай хана", link: "https://www.facebook.com/satel.kz/" },
  { name: "Technodom Ecobox", type: "Electronics", coords: [43.2489, 76.9313], address: "ул. Валиханова 170" },
  { name: "Armada Mall Ecobox", type: "Electronics", coords: [43.2366, 76.8704], address: "ул. Кабдолова 1" },
  { name: "Mega Center Alma-Ata Ecobox", type: "Electronics", coords: [43.2227, 76.8872], address: "ул. Розыбакиева 247а" },
  { name: "Mega Park Ecobox", type: "Electronics", coords: [43.2628, 76.9323], address: "ул. Макатаева 127" },
  { name: "Ainabulak Ecobox", type: "Electronics", coords: [43.2701, 76.9255], address: "мкр. Айнабулак-3, 98" },
  { name: "Promenad Center Ecobox", type: "Electronics", coords: [43.2492, 76.9423], address: "пр. Абая 44а" },
  { name: "Prime Plaza Ecobox", type: "Electronics", coords: [43.2464, 76.8543], address: "ул. Саина уг. пр. Райымбека" },
  { name: "Aport Mall Ecobox", type: "Electronics", coords: [43.2925, 76.8094], address: "пр. Райымбека Апорт Молл" },
  { name: "Ramstore Ecobox", type: "Electronics", coords: [43.2359, 76.9491], address: "пр. Назарбаева 226" },
  { name: "PromTechnoResource Белка", type: "Electronics", coords: [43.2512, 76.9154], address: "возле кафе Белка" },
  { name: "PromTechnoResource Gymnasium 12", type: "Electronics", coords: [43.2622, 76.9359], address: "ул. Валиханова 79" },
  { name: "PromTechnoResource School 13", type: "Electronics", coords: [43.2268, 76.8564], address: "11 мкр-н, 36" },
  { name: "PromTechnoResource School 16", type: "Electronics", coords: [43.2548, 76.9475], address: "ул. Ади Шарипова 23" },
  { name: "PromTechnoResource Lyceum 24", type: "Electronics", coords: [43.2562, 76.9329], address: "ул. Гоголя 187" },
  { name: "PromTechnoResource Gymnasium 36", type: "Electronics", coords: [43.2533, 76.9492], address: "ул. Масанчи 70" },
  { name: "PromTechnoResource School 40", type: "Electronics", coords: [43.2289, 76.8413], address: "мкр. Орбита-3, ул. Биржана 55а" }
];


  const icons = {
    Paper: L.icon({ iconUrl: "images/paper.png", iconSize: [32, 32] }),
    Battery: L.icon({ iconUrl: "images/battery.png", iconSize: [32, 32] }),
    Electronics: L.icon({ iconUrl: "images/electric.png", iconSize: [32, 32] }),
  };

  locations.forEach(loc => {
    const icon = icons[loc.type];
    const popup = `
      <b>${loc.name}</b><br>
      ${loc.address}<br>
      📞 ${loc.phone || "—"}
    `;
    L.marker(loc.coords, { icon }).addTo(map).bindPopup(popup);
  });
});
