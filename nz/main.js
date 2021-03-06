/* Neuseelandreise Script */
// zwei Schrägstriche für einzeiligen Kommentar

/*var map = L.map('map').setView([-45.031389, 168.660833], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-45.031389, 168.660833]).addTo(map)
    .bindPopup('<h3> Queenstown </h3>')
    .openPopup();*/

    let lat = -45.031389
    let lng = 168.660833
    let zoom = 11
    
    let coords = [-45.031389, 168.660833]
    //console.log(coords);
    //console.log(coords[0]);
    //console.log(coords[1]);
    //console.log(coords.length);
    
    //console.log("text");
    //console.log('text');
    //console.log('id="map"');
    //console.log(`latitude = ${lat}`)
    
    let popup = `
    <h3>Queenstown</h3>
        <ul>
        <li>geogr. Länge: ${lng}</li> 
        <li>geogr. Breite: ${lat}</li>
        </ul>`
    
    let map = L.map('map').setView(coords, zoom);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker(coords).addTo(map)
        .bindPopup(popup)
        .openPopup();
    
    for (let etappe of ETAPPEN) {
        let popup = `
        <h3>${etappe.titel} (Etappe ${etappe.nr})</h3>
        <ul>
        <li>geogr. Länge: ${etappe.lng}</li> 
        <li>geogr. Breite: ${etappe.lat}</li>
        <li><a href="${etappe.wikipedia}">Link zur Wikipediaseite</a></li>
        <li><a href="https://${etappe.github}.github.io/nz/index.html">Link zur Etappenseite</a></li>
        </ul>`
        //console.log(etappe)
        L.marker([etappe.lat, etappe.lng]).addTo(map)
        .bindPopup(popup)
    
        //Etappennavigation erweitern
        let link = `<a href="https://${etappe.github}.github.io/nz/index.html" class="etappenLink" title="${etappe.titel}">${etappe.nr}</a>`;
        document.querySelector("#navigation").innerHTML += link
    }
    
    //https://webmapping.github.io/nz/huts.js
    for (let hut of HUTS){
        let popup = `
        <h3>${hut.name}</h3>
        <h4>${hut.region}</h3>
        <hr>
        <p>${hut.info}</p>
        <img src="${hut.image}" alt="Vorschaubild">
        <hr>
        <a href="${hut.link}" target="Neuseeland">Link zur Hütte</a>
        `
        L.circleMarker([hut.lat, hut.lng]).addTo(map)
        .bindPopup(popup)
    }