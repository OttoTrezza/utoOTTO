import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/service.index';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {
  ElSarmientoSubscription: Subscription;
  graficos: any = {
    'grafico1': {
      // tslint:disable-next-line:max-line-length
      'labels': ['beta1', 'gamma1', 'alpha1', 'accelerationx', 'accelerationy', 'accelerationz', 'accelerationincludinggravityx', 'accelerationincludinggravityY', 'accelerationincludinggravityZ', 'rotationratebeta', 'rotationrategamma', 'rotationratealpha'],
      'data':  [],
      'type': 'doughnut',
      'leyenda': 'nacho'
    },
    'grafico2': {
      // tslint:disable-next-line:max-line-length
      'labels': ['beta1', 'gamma1', 'alpha1', 'accelerationx', 'accelerationy', 'accelerationz', 'accelerationincludinggravityx', 'accelerationincludinggravityY', 'accelerationincludinggravityZ', 'rotationratebeta', 'rotationrategamma', 'rotationratealpha'],
      'data':  [],
      'type': 'doughnut',
      'leyenda': 'nombre',
      'dataDefault':  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'leyendaDefault': 'NO HAY NADIE'
    },
    'grafico3': {
      // tslint:disable-next-line:max-line-length
      'labels': ['beta1', 'gamma1', 'alpha1', 'accelerationx', 'accelerationy', 'accelerationz', 'accelerationincludinggravityx', 'accelerationincludinggravityY', 'accelerationincludinggravityZ', 'rotationratebeta', 'rotationrategamma', 'rotationratealpha'],
      'data':  [],
      'type': 'doughnut',
      'leyenda': 'nombre',
      'dataDefault':  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'leyendaDefault': 'NO HAY NADIE'
    },
    'grafico4': {
      // tslint:disable-next-line:max-line-length
      'labels': ['beta1', 'gamma1', 'alpha1', 'accelerationx', 'accelerationy', 'accelerationz', 'accelerationincludinggravityx', 'accelerationincludinggravityY', 'accelerationincludinggravityZ', 'rotationratebeta', 'rotationrategamma', 'rotationratealpha'],
      'data':  [],
      'type': 'doughnut',
      'leyenda': 'nombre',
      'dataDefault':  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'leyendaDefault': 'NO HAY NADIE'
    },
  };

  constructor(
    public _chatService: ChatService
  ) { }

  ngOnInit() {
    this.ElSarmientoSubscription = this._chatService.getElSarmiento()
      .subscribe( (msg: any) => {
        console.log('ESPmsg', msg);
       // let sala: string = msg.sala;
       // if (sala === this._usuarioService.usuario.sala) {
        // let de: string = msg.de;
        // let cuerpo: string = msg.cuerpo;
        let beta1: number = msg.beta1;
        let gamma1: number = msg.gamma1;
        let alpha1: number = msg.alpha1;
        this.graficos.grafico1.data = beta1;
        this.graficos.grafico1.data = gamma1;
        this.graficos.grafico1.data = alpha1;
        // let accelerationx: number = msg.accelerationx;
        // let accelerationy: number = msg.accelerationy;
        // let accelerationz: number = msg.accelerationz;
        // let accelerationincludinggravityx: number = msg.accelerationincludinggravityx;
        // let accelerationincludinggravityy: number = msg.accelerationincludinggravityy;
        // let accelerationincludinggravityz: number = msg.accelerationincludinggravityz;
        // let rotationratebeta: number = msg.rotationratebeta;
        // let rotationrategamma: number = msg.rotationrategamma;
        // let rotationratealpha: number = msg.rotationratealpha;
// tslint:disable-next-line:max-line-length
// this.graficos.grafico1.lablels = ['beta1', 'gamma1', 'alpha1']; // , 'accelerationx', 'accelerationy', 'accelerationz', 'accelerationincludinggravityx', 'accelerationincludinggravityy', 'accelerationincludinggravityz', 'rotationratebeta', 'rotationrategamma', 'rotationratealpha'
// tslint:disable-next-line:max-line-length
// this.graficos.grafico1.data = [beta1, gamma1, alpha1]; // , msg.acelerationx1, msg.acelerationy1, msg.acelerationz1, msg.accelerationincludinggravityx1, msg.accelerationincludinggravityy1, msg.accelerationincludinggravityz1, msg.rotationratebeta1, msg.rotationrategamma1, msg.rotationratealpha1

// this.graficos.grafico1.leyenda = 'ignacio';

        // if ( msg.de === 'ignacio1' ) {
        //   console.log('ignacio1');
        //   this.progreso1 = msg.cuerpo;
        //   this.progreso1r = msg.cuerpo1;
        // }
        // if ( msg.de === 'ignacio2' ) {
        //   console.log('ignacio2');
        //   this.progreso2 = msg.cuerpo;
        //   this.progreso2r = msg.cuerpo1;
        // }
       });
  }

  // this.graficos[this.num].data[0] = msg.beta1;
  // this.graficos[this.num].data[1] = msg.gamma1;
  // this.graficos[this.num].data[2] = msg.alpha1;
  // this.graficos[this.num].data[3] = msg.accelerationx1;
  // this.graficos[this.num].data[4] = msg.accelerationy1;
  // this.graficos[this.num].data[5] = msg.accelerationz1;
  // this.graficos[this.num].data[6] = msg.accelerationincludinggravityx1;
  // this.graficos[this.num].data[7] = msg.accelerationincludinggravityy1;
  // this.graficos[this.num].data[8] = msg.accelerationincludinggravityz1;
  // this.graficos[this.num].data[9] = msg.rotationratebeta1;
  // this.graficos[this.num].data[10] = msg.rotationrategamma1;
  // this.graficos[this.num].data[11] = msg.rotationratealpha1;
  // let sala: string = msg.sala;
  // this.graficos[this.num].leyenda = msg.de;
  // });
  // }
  }
