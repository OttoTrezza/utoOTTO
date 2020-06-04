import { Component, OnInit } from '@angular/core';
import { ChatService} from '../../services/service.index';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})


export class Graficas1Component implements OnInit {

  ElSarmientoSubscription: Subscription;
  num: number;
  msg: any;
  graficos: any = {
    'grafico1': {
      // tslint:disable-next-line:max-line-length
      'labels': ['beta1', 'gamma1', 'alpha1', 'accelerationx', 'accelerationy', 'accelerationz', 'accelerationincludinggravityx', 'accelerationincludinggravityY', 'accelerationincludinggravityZ', 'rotationratebeta', 'rotationrategamma', 'rotationratealpha'],
      'data':  [],
      'type': 'doughnut',
      'leyenda': 'nombre',
      'dataDefault':  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'leyendaDefault': 'NO HAY NADIE'
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
  constructor(public _chatService: ChatService) { }

  ngOnInit() {

  this.ElSarmientoSubscription = this._chatService.getElSarmiento()
  .subscribe( (msg: any) => {
    console.log('ElSarmiento', msg);

  if ( msg.de === 'testa16') {
    this.num = 1 ;
  } else if ( msg.de === 'ignacio1') {
    this.num = 2;
  }

  this.graficos[this.num].data[0] = msg.beta1;
  this.graficos[this.num].data[1] = msg.gamma1;
  this.graficos[this.num].data[2] = msg.alpha1;
  this.graficos[this.num].data[3] = msg.accelerationx1;
  this.graficos[this.num].data[4] = msg.accelerationy1;
  this.graficos[this.num].data[5] = msg.accelerationz1;
  this.graficos[this.num].data[6] = msg.accelerationincludinggravityx1;
  this.graficos[this.num].data[7] = msg.accelerationincludinggravityy1;
  this.graficos[this.num].data[8] = msg.accelerationincludinggravityz1;
  this.graficos[this.num].data[9] = msg.rotationratebeta1;
  this.graficos[this.num].data[10] = msg.rotationrategamma1;
  this.graficos[this.num].data[11] = msg.rotationratealpha1;
  let sala: string = msg.sala;
  this.graficos[this.num].leyenda = msg.de;

  });
  }
  }
