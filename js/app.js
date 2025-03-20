const $ipAddress = document.querySelector('.ip-address-input').value;
const $submit = document.querySelector('.submit');
const $ipAddressResult = document.querySelector('#ip-address-value')
const $locationResult = document.querySelector('#ip-address-location')
const $timeZone = document.querySelector('#ip-address-timezone')
const $isp = document.querySelector('#ip-address-isp')

$submit.addEventListener('click', (e) => {
    e.preventDefault()
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_QqFXGkGcJlCq3atDPDrXoccyI3PDk&ipAddress=${$ipAddress}`)
        .then(response => response.json())
            .then(function(data) {
                 console.log(data)
                 $ipAddressResult.innerHTML = data.ip
                 $locationResult.innerHTML = data.location.city + ', ' + data.location.country
                 $timeZone.innerHTML = data.location.timezone
                 $isp.innerHTML = data.isp  
                 map.setView([data.location.lat, data.location.lng]);
                 console.log(data.ip)
            }
        )
            .catch(error => console.log(error))

})  


const map = L.map("map").setView([51.505, -0.09], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
  }).addTo(map);