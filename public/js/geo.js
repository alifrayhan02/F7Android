var nav = navigator.geolocation.getCurrentPosition(showPosition1, showError1);
var lati = 23.1;
var longi = 21.3;
function showPosition1(position) {
    lati = position.coords.latitude;
    longi = position.coords.longitude;
}
function showError1(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            break;
        case error.POSITION_UNAVAILABLE:
            break;
        case error.TIMEOUT:
            break;
        case error.UNKNOWN_ERROR:
            break;
    }
}
// Call Geocode
//geocode();

function mbo() {
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            latlng: lati + "," + longi,
            key: 'AIzaSyC27LzLfV5wYJydIW6-k5iygCt55pv8sGg'
        }
    })
        .then(function (response) {
            // Log full response
            console.log(response);

            // Formatted Address
            var formattedAddress = response.data.results[0].formatted_address;
            var formattedAddressOutput = `
          <ul class="list-group">
            <li class="list-group-item">${formattedAddress}</li>
          </ul>
        `;

            // Address Components
            //         var addressComponents = response.data.results[0].address_components;
            //         var addressComponentsOutput = '<ul class="list-group">';
            //         for(var i = 0;i < addressComponents.length;i++){
            //           addressComponentsOutput += `
            //             <li class="list-group-item"><strong>${addressComponents[i].types[0]}</strong>: ${addressComponents[i].long_name}</li>
            //           `;
            //         }
            //         addressComponentsOutput += '</ul>';

            // Geometry

            var lat = response.data.results[0].geometry.location.lat;
            var lng = response.data.results[0].geometry.location.lng;
            var geometryOutput = `
          <ul class="list-group">
            <li class="list-group-item"><strong>Latitude</strong>: ${lat}</li>
            <li class="list-group-item"><strong>Longitude</strong>: ${lng}</li>
          </ul>
        `;

            // Output to app
            document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
            //        document.getElementById('address-components').innerHTML = addressComponentsOutput;
            document.getElementById('geometry').innerHTML = geometryOutput;
        })
        .catch(function (error) {
            console.log(error);
        });
}

// Get location form
var locationForm = document.getElementById('location-form');

// Listen for submiot
locationForm.addEventListener('submit', geocode);


function geocode(e) {
    // Prevent actual submit
    e.preventDefault();

    var location = document.getElementById('location-input').value;

    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address: location,
            key: 'AIzaSyC27LzLfV5wYJydIW6-k5iygCt55pv8sGg'
        }
    })
        .then(function (response) {
            // Log full response
            console.log(response);

            // Formatted Address
            var formattedAddress = response.data.results[0].formatted_address;
            var formattedAddressOutput = `
          <ul class="list-group">
            <li class="list-group-item">${formattedAddress}</li>
          </ul>
        `;

            // Address Components
            //         var addressComponents = response.data.results[0].address_components;
            //         var addressComponentsOutput = '<ul class="list-group">';
            //         for(var i = 0;i < addressComponents.length;i++){
            //           addressComponentsOutput += `
            //             <li class="list-group-item"><strong>${addressComponents[i].types[0]}</strong>: ${addressComponents[i].long_name}</li>
            //           `;
            //         }
            //         addressComponentsOutput += '</ul>';

            // Geometry

            var lat = response.data.results[0].geometry.location.lat;
            var lng = response.data.results[0].geometry.location.lng;
            var geometryOutput = `
          <ul class="list-group">
            <li class="list-group-item"><strong>Latitude</strong>: ${lat}</li>
            <li class="list-group-item"><strong>Longitude</strong>: ${lng}</li>
          </ul>
        `;

            // Output to app
            document.getElementById('formatted-address1').innerHTML = formattedAddressOutput;
            //        document.getElementById('address-components').innerHTML = addressComponentsOutput;
            document.getElementById('geometry1').innerHTML = geometryOutput;
        })
        .catch(function (error) {
            console.log(error);
        });
}

