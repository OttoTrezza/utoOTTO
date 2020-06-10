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
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'nacho'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'type': 'doughnut',
      'leyenda': '¿Le importa que le den gases?'
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
        let de: string = msg.de;
        let cuerpo: string = msg.cuerpo;
        let beta1: number = msg.beta1;
        let gamma1: number = msg.gamma1;
        let alpha1: number = msg.alpha1;
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
this.graficos.grafico1.lablels = ['beta1', 'gamma1', 'alpha1']; // , 'accelerationx', 'accelerationy', 'accelerationz', 'accelerationincludinggravityx', 'accelerationincludinggravityy', 'accelerationincludinggravityz', 'rotationratebeta', 'rotationrategamma', 'rotationratealpha'
// tslint:disable-next-line:max-line-length
this.graficos.grafico1.data = [beta1, gamma1, alpha1]; // , msg.acelerationx1, msg.acelerationy1, msg.acelerationz1, msg.accelerationincludinggravityx1, msg.accelerationincludinggravityy1, msg.accelerationincludinggravityz1, msg.rotationratebeta1, msg.rotationrategamma1, msg.rotationratealpha1

this.graficos.grafico1.leyenda = 'ignacio';

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

}
