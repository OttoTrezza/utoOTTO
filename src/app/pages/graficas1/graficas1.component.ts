import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/service.index';
import { Subscription } from 'rxjs/Subscription';
import { UsuarioService } from '../../services/service.index';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {
  // ElSarmientoSubscription: Subscription;
  Dispo1Subscription: Subscription;
  // ElSarmiento1Subscription: Subscription;
  beta: number;
  gamma: number;
  alpha: number;
  accelerationx1: number;
  accelerationy1: number;
  accelerationz1: number;
  accelerationincludinggravityx1: number;
  accelerationincludinggravityy1: number;
  accelerationincludinggravityz1: number;
  rotationratebeta1: number;
  rotationrategamma1: number;
  rotationratealpha1: number;
 graficos: any = {
    'grafico1': {
      'labels': ['beta', 'gamma', 'alpha',  'ax1', 'ay1', 'az1', 'acx1', 'accy1', 'accz1', 'rotationratebeta1', 'rgamma1', 'ralpha1'],
      'data':  [10, 20, 30],
      'type': 'doughnut',
      'leyenda': 'MI DISPOSITIVO - sin datos'
    },
    'grafico2': {
      'labels': ['beta', 'gamma', 'alpha',  'ax1', 'ay1', 'az1', 'acx1', 'accy1', 'accz1', 'rotationratebeta1', 'rgamma1', 'ralpha1'],
      'data':  [10, 20, 30],
      'type': 'doughnut',
      'leyenda': 'Otros Dispositivos - sin datos'
    },
    'grafico3': {
      'labels': ['beta', 'gamma', 'alpha',  'ax1', 'ay1', 'az1', 'acx1', 'accy1', 'accz1', 'rotationratebeta1', 'rgamma1', 'ralpha1'],
      'data':  [10, 20, 30],
      'type': 'doughnut',
      'leyenda': 'Otros Dispositivos - sin datos'
    },
    'grafico4': {
      'labels': ['beta', 'gamma', 'alpha',  'ax1', 'ay1', 'az1', 'acx1', 'accy1', 'accz1', 'rotationratebeta1', 'rgamma1', 'ralpha1'],
      'data':  [10, 20, 30],
      'type': 'doughnut',
      'leyenda': 'Otros Dispositivos - sin datos'
    },
  };

  constructor(
    public _chatService: ChatService,
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {

    // tslint:disable-next-line:max-line-length
    this.graficos.grafico1.labels = ['beta', 'gamma', 'alpha',  'ax1', 'ay1', 'az1', 'acx1', 'accy1', 'accz1', 'rotationratebeta1', 'rgamma1', 'ralpha1'];
    // tslint:disable-next-line:max-line-length
    this.graficos.grafico2.labels = ['beta', 'gamma', 'alpha',  'ax1', 'ay1', 'az1', 'acx1', 'accy1', 'accz1', 'rotationratebeta1', 'rgamma1', 'ralpha1'];
    // tslint:disable-next-line:max-line-length
    this.graficos.grafico3.labels = ['beta', 'gamma', 'alpha',  'ax1', 'ay1', 'az1', 'acx1', 'accy1', 'accz1', 'rotationratebeta1', 'rgamma1', 'ralpha1'];
    // tslint:disable-next-line:max-line-length
    this.graficos.grafico4.labels = ['beta', 'gamma', 'alpha',  'ax1', 'ay1', 'az1', 'acx1', 'accy1', 'accz1', 'rotationratebeta1', 'rgamma1', 'ralpha1'];

    this.Dispo1Subscription = this._chatService.getDispo1()
    .subscribe( (paya: any) => {
      let pos: number = paya.pos1;
      let de: string = paya.de;
      this.beta = paya.beta1;
      this.gamma = paya.gamma1;
      this.alpha = paya.alpha1;
      this.accelerationx1 = paya.accelerationx1;
      this.accelerationy1 = paya.accelerationy1;
      this.accelerationz1 = paya.accelerationz1;
      this.accelerationincludinggravityx1 = paya.accelerationincludinggravityx1;
      this.accelerationincludinggravityy1 = paya.accelerationincludinggravityy1;
      this.accelerationincludinggravityz1 = paya.accelerationincludinggravityz1;
      this.rotationratebeta1 = paya.rotationratebeta1;
      this.rotationrategamma1 = paya.rotationrategamma1;
      this.rotationratealpha1 = paya.rotationratealpha1;
         if ( de === this._usuarioService.usuario.nombre) {
            pos = 99;
         }
          switch (pos) {
              case 99: this.graficos.grafico1.leyenda = ' MI DISPOSITIVO ' + de;
              // tslint:disable-next-line:max-line-length
                if ( this.beta === 0 ) {
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico1.labels = [ 'accelerationincludinggravityx1', 'accelerationincludinggravityy1', 'accelerationincludinggravityz1' ];
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico1.data = [this.accelerationincludinggravityx1, this.accelerationincludinggravityy1, this.accelerationincludinggravityz1];
              } else {
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico1.labels = ['beta', 'gamma', 'alpha',  'ax1', 'ay1', 'az1', 'acx1', 'accy1', 'accz1', 'rotationratebeta1', 'rgamma1', 'ralpha1'];
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico1.data = [this.beta, this.gamma, this.alpha, this.accelerationx1, this.accelerationy1, this.accelerationz1, this.accelerationincludinggravityx1, this.accelerationincludinggravityy1, this.accelerationincludinggravityz1, this.rotationratebeta1, this.rotationrategamma1, this.rotationratealpha1];

              }
                break;
              case 0: this.graficos.grafico2.leyenda = ' Otros Dispositivos ' + de;
              if ( this.beta === 0 ) {
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico2.labels = [ 'accelerationincludinggravityx1', 'accelerationincludinggravityy1', 'accelerationincludinggravityz1' ];
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico2.data = [this.accelerationincludinggravityx1, this.accelerationincludinggravityy1, this.accelerationincludinggravityz1];
              } else {
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico2.labels = ['beta', 'gamma', 'alpha',  'ax1', 'ay1', 'az1', 'acx1', 'accy1', 'accz1', 'rotationratebeta1', 'rgamma1', 'ralpha1'];
              // tslint:disable-next-line:max-line-length
              this.graficos.grafico2.data = [this.beta, this.gamma, this.alpha, this.accelerationx1, this.accelerationy1, this.accelerationz1, this.accelerationincludinggravityx1, this.accelerationincludinggravityy1, this.accelerationincludinggravityz1, this.rotationratebeta1, this.rotationrategamma1, this.rotationratealpha1];
            }
              break;
              case 1: this.graficos.grafico3.leyenda = ' Otros Dispositivos ' + de;
              if ( this.beta === 0 ) {
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico3.labels = [ 'accelerationincludinggravityx1', 'accelerationincludinggravityy1', 'accelerationincludinggravityz1' ];
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico3.data = [this.accelerationincludinggravityx1, this.accelerationincludinggravityy1, this.accelerationincludinggravityz1];
              } else {
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico3.labels = ['beta', 'gamma', 'alpha',  'ax1', 'ay1', 'az1', 'acx1', 'accy1', 'accz1', 'rotationratebeta1', 'rgamma1', 'ralpha1'];
              // tslint:disable-next-line:max-line-length
              this.graficos.grafico3.data = [this.beta, this.gamma, this.alpha, this.accelerationx1, this.accelerationy1, this.accelerationz1, this.accelerationincludinggravityx1, this.accelerationincludinggravityy1, this.accelerationincludinggravityz1, this.rotationratebeta1, this.rotationrategamma1, this.rotationratealpha1];
            }break;
              case 2: this.graficos.grafico4.leyenda = ' Otros Dispositivos ' + de;
              if ( this.beta === 0 ) {
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico4.labels = [ 'accelerationincludinggravityx1', 'accelerationincludinggravityy1', 'accelerationincludinggravityz1' ];
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico4.data = [this.accelerationincludinggravityx1, this.accelerationincludinggravityy1, this.accelerationincludinggravityz1];
              } else {
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico4.labels = ['beta', 'gamma', 'alpha',  'ax1', 'ay1', 'az1', 'acx1', 'accy1', 'accz1', 'rotationratebeta1', 'rgamma1', 'ralpha1'];
              // tslint:disable-next-line:max-line-length
              this.graficos.grafico4.data = [this.beta, this.gamma, this.alpha, this.accelerationx1, this.accelerationy1, this.accelerationz1, this.accelerationincludinggravityx1, this.accelerationincludinggravityy1, this.accelerationincludinggravityz1, this.rotationratebeta1, this.rotationrategamma1, this.rotationratealpha1];
            }break;
          }

    });
  }
}
