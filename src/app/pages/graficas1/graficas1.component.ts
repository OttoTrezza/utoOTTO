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
  alpha: number;
  beta: number;
  gamma: number;
  // accelerationx1: number;
  // accelerationy1: number;
  // accelerationz1: number;
  // accelerationincludinggravityx1: number;
  // accelerationincludinggravityy1: number;
  // accelerationincludinggravityz1: number;
  // rotationratebeta1: number;
  // rotationrategamma1: number;
  // rotationratealpha1: number;
 graficos: any = {
    'grafico1': {
      'labels': ['alpha', 'beta', 'gamma'],
      'data':  [10, 20, 30],
      'type': 'doughnut',
      'leyenda': 'MI DISPOSITIVO - sin datos'
    },
    'grafico2': {
      'labels': ['alpha', 'beta', 'gamma'],
      'data':  [10, 20, 30],
      'type': 'doughnut',
      'leyenda': 'Otros Dispositivos - sin datos'
    },
    'grafico3': {
      'labels': ['alpha', 'beta', 'gamma'],
      'data':  [10, 20, 30],
      'type': 'doughnut',
      'leyenda': 'Otros Dispositivos - sin datos'
    },
    'grafico4': {
      'labels': ['alpha', 'beta', 'gamma'],
      'data':  [10, 20, 30],
      'type': 'doughnut',
      'leyenda': 'Otros Dispositivos - sin datos'
    },
  };

  constructor(
    public _chatService: ChatService,
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {

    // tslint:disable-next-line:max-line-length
    this.graficos.grafico1.labels = ['alpha', 'beta', 'gamma'];
    // tslint:disable-next-line:max-line-length
    this.graficos.grafico2.labels = ['alpha', 'beta', 'gamma'];
    // tslint:disable-next-line:max-line-length
    this.graficos.grafico3.labels = ['alpha', 'beta', 'gamma'];
    // tslint:disable-next-line:max-line-length
    this.graficos.grafico4.labels = ['alpha', 'beta', 'gamma'];

    this.Dispo1Subscription = this._chatService.getDispo1()
    .subscribe( (paya: any) => {
      let pos: number = paya.pos1;
      let de: string = paya.de;
      this.alpha = paya.alpha1;
      this.beta = paya.beta1;
      this.gamma = paya.gamma1;
      // this.accelerationx1 = paya.accelerationx1;
      // this.accelerationy1 = paya.accelerationy1;
      // this.accelerationz1 = paya.accelerationz1;
      // this.accelerationincludinggravityx1 = paya.accelerationincludinggravityx1;
      // this.accelerationincludinggravityy1 = paya.accelerationincludinggravityy1;
      // this.accelerationincludinggravityz1 = paya.accelerationincludinggravityz1;
      // this.rotationratebeta1 = paya.rotationratebeta1;
      // this.rotationrategamma1 = paya.rotationrategamma1;
      // this.rotationratealpha1 = paya.rotationratealpha1;
         if ( de === this._usuarioService.usuario.nombre) {
            pos = 99;
         }
          switch (pos) {
              case 99: this.graficos.grafico1.leyenda = ' MI DISPOSITIVO ' + de;
              // tslint:disable-next-line:max-line-length
                if ( this.beta === 0 ) {
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico1.labels = ['alpha', 'beta', 'gamma'];
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico1.data = [this.alpha, this.beta, this.gamma];
              } else {
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico1.labels = ['alpha', 'beta', 'gamma'];
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico1.data = [this.alpha, this.beta, this.gamma];

              }
                break;
              case 0: this.graficos.grafico2.leyenda = ' Otros Dispositivos ' + de;
              if ( this.beta === 0 ) {
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico2.labels = ['alpha', 'beta', 'gamma'];
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico2.data = [this.alpha, this.beta, this.gamma];
              } else {
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico2.labels = ['alpha', 'beta', 'gamma'];
              // tslint:disable-next-line:max-line-length
              this.graficos.grafico2.data = [this.alpha, this.beta, this.gamma];
            }
              break;
              case 1: this.graficos.grafico3.leyenda = ' Otros Dispositivos ' + de;
              if ( this.beta === 0 ) {
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico3.labels = ['alpha', 'beta', 'gamma'];
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico3.data = [this.alpha, this.beta, this.gamma];
              } else {
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico3.labels = ['alpha', 'beta', 'gamma'];
              // tslint:disable-next-line:max-line-length
              this.graficos.grafico3.data = [this.alpha, this.beta, this.gamma];
            }break;
              case 2: this.graficos.grafico4.leyenda = ' Otros Dispositivos ' + de;
              if ( this.beta === 0 ) {
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico4.labels = ['alpha', 'beta', 'gamma'];
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico4.data = [this.alpha, this.beta, this.gamma]; // , this.accelerationx1, this.accelerationy1, this.accelerationz1, this.accelerationincludinggravityx1, this.accelerationincludinggravityy1, this.accelerationincludinggravityz1, this.rotationratebeta1, this.rotationrategamma1, this.rotationratealpha1
              } else {
                // tslint:disable-next-line:max-line-length
                this.graficos.grafico4.labels = ['alpha', 'beta', 'gamma'];
              // tslint:disable-next-line:max-line-length
              this.graficos.grafico4.data = [this.alpha, this.beta, this.gamma]; // , this.accelerationx1, this.accelerationy1, this.accelerationz1, this.accelerationincludinggravityx1, this.accelerationincludinggravityy1, this.accelerationincludinggravityz1, this.rotationratebeta1, this.rotationrategamma1, this.rotationratealpha1
            }break;
          }

    });
  }
}
