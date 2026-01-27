window.TT_MAPS = (function(){
  function initClientTracking(mapId="map"){
    const el = document.getElementById(mapId);
    if(!el) return;

    const map = L.map(mapId).setView([-4.2634, 15.2429], 12); // Brazzaville
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap"
    }).addTo(map);

    const client = L.marker([-4.267, 15.246]).addTo(map).bindPopup("Client");
    const rider = L.marker([-4.24, 15.20]).addTo(map).bindPopup("Livreur (simulation)");
    const shop = L.marker([-4.263, 15.2429]).addTo(map).bindPopup("TchoTchop");

    const path = L.polyline([shop.getLatLng(), rider.getLatLng(), client.getLatLng()], { }).addTo(map);

    // simulation movement
    let t = 0;
    const route = [
      [-4.24, 15.20],
      [-4.245, 15.212],
      [-4.252, 15.222],
      [-4.258, 15.232],
      [-4.263, 15.240],
      [-4.266, 15.245],
      [-4.267, 15.246]
    ];

    const etaEl = document.getElementById("ttEta");
    const statusEl = document.getElementById("ttOrderStatus");

    const statuses = ["Commande reçue", "En préparation", "Prête", "En livraison", "Livrée"];
    let s = 0;

    const timer = setInterval(() => {
      t++;
      const idx = Math.min(route.length-1, t);
      rider.setLatLng(route[idx]);
      path.setLatLngs([shop.getLatLng(), rider.getLatLng(), client.getLatLng()]);
      map.panTo(rider.getLatLng(), { animate: true, duration: 0.5 });

      if (etaEl) {
        const remaining = Math.max(0, (route.length-1-idx)*4);
        etaEl.textContent = remaining + " min";
      }
      if (statusEl && t % 2 === 0) {
        s = Math.min(statuses.length-1, s+1);
        statusEl.textContent = statuses[s];
      }
      if (idx === route.length-1) {
        clearInterval(timer);
      }
    }, 1200);

    return map;
  }

  function initAdminGeo(mapId="adminMap"){
    const el = document.getElementById(mapId);
    if(!el) return;

    const map = L.map(mapId).setView([-4.2634, 15.2429], 12);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap"
    }).addTo(map);

    const points = [
      { name:"Boutique TchoTchop", lat:-4.2634, lng:15.2429, icon:"bi-shop" },
      { name:"Client A", lat:-4.267, lng:15.246, icon:"bi-person" },
      { name:"Client B", lat:-4.275, lng:15.22, icon:"bi-person" },
      { name:"Livreur 1", lat:-4.24, lng:15.20, icon:"bi-bicycle" },
      { name:"Livreur 2", lat:-4.29, lng:15.26, icon:"bi-bicycle" }
    ];

    points.forEach(p => {
      L.marker([p.lat, p.lng]).addTo(map).bindPopup(p.name);
    });

    const btn = document.getElementById("ttGeolocBtn");
    if (btn && navigator.geolocation) {
      btn.addEventListener("click", () => {
        navigator.geolocation.getCurrentPosition((pos) => {
          const { latitude, longitude } = pos.coords;
          L.marker([latitude, longitude]).addTo(map).bindPopup("Ma position (admin)").openPopup();
          map.setView([latitude, longitude], 14);
        }, () => {
          alert("Impossible d'obtenir la géolocalisation.");
        });
      });
    }
    return map;
  }

  return { initClientTracking, initAdminGeo };
})();
