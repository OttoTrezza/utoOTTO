import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class DevicerefService {

  constructor( @Inject(DOCUMENT) private _document ) {
    this.disponible();
  }

disponible() {
  if (!('ondeviceorientation' in window)) {
    document.getElementById('do-unsupported').classList.remove('hidden');
  } else {
    document.getElementById('do-info').classList.remove('hidden');

    window.addEventListener('deviceorientation', function(event) {
            document.getElementById('cube').style.webkitTransform =
            document.getElementById('cube').style.transform =
            'rotateX(' + event.beta + 'deg) ' +
            'rotateY(' + event.gamma + 'deg) ' +
            'rotateZ(' + event.alpha + 'deg)';

            let bet = document.getElementById('beta') as HTMLInputElement;
            bet.value = JSON.stringify(Math.round(event.beta));
            let gam = document.getElementById('gamma') as HTMLInputElement;
            gam.value = JSON.stringify(Math.round(event.gamma));
            let alp = document.getElementById('alpha') as HTMLInputElement;
            alp.value = JSON.stringify(Math.round(event.alpha));
            document.getElementById('is-absolute').innerHTML = event.absolute ? 'true' : 'false';
    });
  }
  if (!('ondevicemotion' in window)) {
    document.getElementById('dm-unsupported').classList.remove('hidden');
  } else {
    document.getElementById('dm-info').classList.remove('hidden');

    window.addEventListener('devicemotion', function(event) {
      let acx = document.getElementById('acceleration-x') as HTMLInputElement;
      acx.value = JSON.stringify(Math.round(event.acceleration.x));

      let acy = document.getElementById('acceleration-y') as HTMLInputElement;
      acy.value = JSON.stringify(Math.round(event.acceleration.y));

      let acz = document.getElementById('cceleration-z') as HTMLInputElement;
      acz.value = JSON.stringify(Math.round(event.acceleration.z));

      let acgx = document.getElementById('acceleration-including-gravity-x') as HTMLInputElement;
      acgx.value = JSON.stringify(Math.round(event.accelerationIncludingGravity.x));

      let acgy = document.getElementById('acceleration-including-gravity-y') as HTMLInputElement;
      acgy.value = JSON.stringify(Math.round(event.accelerationIncludingGravity.y));

      let acgz = document.getElementById('acceleration-including-gravity-z') as HTMLInputElement;
      acgz.value = JSON.stringify(Math.round(event.accelerationIncludingGravity.z));

      let acrbet = document.getElementById('rotation-rate-beta') as HTMLInputElement;
      acrbet.value = JSON.stringify(Math.round(event.rotationRate.beta));

      let acrgam = document.getElementById('rotation-rate-gamma') as HTMLInputElement;
      acrgam.value = JSON.stringify(Math.round(event.rotationRate.gamma));

      let acralp = document.getElementById('rotation-rate-alpha') as HTMLInputElement;
      acralp.value = JSON.stringify(Math.round(event.rotationRate.alpha));

      let interval = document.getElementById('interval') as HTMLInputElement;
      interval.value = JSON.stringify(Math.round(event.interval));

    });

    if (!('oncompassneedscalibration' in window)) {
      document.getElementById('cnc-unsupported').classList.remove('hidden');
  } else {
    window.addEventListener('compassneedscalibration', function(event) {
        alert('Compass needs calibrating! Wave your device in a figure-eight motion');
    });
}
  }
}
}

