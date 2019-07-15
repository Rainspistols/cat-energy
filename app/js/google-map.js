"use strict"

let iconBase = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.1998143444616!2d20.950442215891588!3d52.20341626739473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471933554fcb36a5%3A0x5d726b966baa6cc3!2sDrawska+10B%2C+02-001+Warszawa!5e0!3m2!1sru!2spl!4v1560005327264!5m2!1sru!2spl';
let marker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  icon: iconBase + 'map-pin.png'
});

function addMarker(feature) {
  let marker = new google.maps.Marker({
    position: feature.position,
    icon: icons[feature.type].icon,
    map: map
  });
}
