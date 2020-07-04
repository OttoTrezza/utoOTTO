import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/service.index';
import { Subscription } from 'rxjs/Subscription';
import { UsuarioService } from '../../services/service.index';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit, OnDestroy {
  // ElSarmientoSubscription: Subscription;
  autoChotaSubscription: Subscription;
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


    this.autoChotaSubscription = this._chatService.getMessagesAuto()
    .subscribe( (msg: any) => {
       let de: string = msg.de;
       let cuerpo: string = msg.cuerpo;
       console.log('ESP de cuerpo', de, cuerpo);
    });

    this.Dispo1Subscription = this._chatService.getDispo1()
    .subscribe( (msg: any) => {
      let de: string = msg.de;
      let pos: number = msg.pos1;
      this.beta = msg.beta1;
      this.gamma = msg.gamma1;
      this.alpha = msg.alpha1;
      this.accelerationx1 = msg.accelerationx1;
      this.accelerationy1 = msg.accelerationy1;
      this.accelerationz1 = msg.accelerationz1;
      this.accelerationincludinggravityx1 = msg.accelerationincludinggravityx1;
      this.accelerationincludinggravityy1 = msg.accelerationincludinggravityy1;
      this.accelerationincludinggravityz1 = msg.accelerationincludinggravityz1;
      this.rotationratebeta1 = msg.rotationratebeta1;
      this.rotationrategamma1 = msg.rotationrategamma1;
      this.rotationratealpha1 = msg.rotationratealpha1;
         if ( de === this._usuarioService.usuario.nombre) {
            pos = 99;
         } else {
          switch (pos) {
              case 99: this.graficos.grafico1.leyenda = ' MI DISPOSITIVO ' + de;
              // tslint:disable-next-line:max-line-length
              this.graficos.grafico1.data = [this.beta, this.gamma, this.alpha, this.accelerationx1, this.accelerationy1, this.accelerationz1, this.accelerationincludinggravityx1, this.accelerationincludinggravityy1, this.accelerationincludinggravityz1, this.rotationratebeta1, this.rotationrategamma1, this.rotationratealpha1];
              break;
              case 0: this.graficos.grafico2.leyenda = ' Otros Dispositivos ' + de;
              // tslint:disable-next-line:max-line-length
              this.graficos.grafico2.data = [this.beta, this.gamma, this.alpha, this.accelerationx1, this.accelerationy1, this.accelerationz1, this.accelerationincludinggravityx1, this.accelerationincludinggravityy1, this.accelerationincludinggravityz1, this.rotationratebeta1, this.rotationrategamma1, this.rotationratealpha1];
              break;
              case 1: this.graficos.grafico3.leyenda = ' Otros Dispositivos ' + de;
              // tslint:disable-next-line:max-line-length
              this.graficos.grafico3.data = [this.beta, this.gamma, this.alpha, this.accelerationx1, this.accelerationy1, this.accelerationz1, this.accelerationincludinggravityx1, this.accelerationincludinggravityy1, this.accelerationincludinggravityz1, this.rotationratebeta1, this.rotationrategamma1, this.rotationratealpha1];
              break;
              case 2: this.graficos.grafico4.leyenda = ' Otros Dispositivos ' + de;
              // tslint:disable-next-line:max-line-length
              this.graficos.grafico4.data = [this.beta, this.gamma, this.alpha, this.accelerationx1, this.accelerationy1, this.accelerationz1, this.accelerationincludinggravityx1, this.accelerationincludinggravityy1, this.accelerationincludinggravityz1, this.rotationratebeta1, this.rotationrategamma1, this.rotationratealpha1];
              break;
          }

         }
    });
  }
  //  let accelerationincludinggravityx: number = msg.accelerationincludinggravityx;
  //       let accelerationincludinggravityy: number = msg.accelerationincludinggravityy;
  //       let accelerationincludinggravityz: number = msg.accelerationincludinggravityz;
    // this.ElSarmientoSubscription = this._chatService.getElSarmiento()
    //   .subscribe( (msg: any) => {
    //     console.log('ESPaaaaaaaaaaaa', msg);
    //      let de: string = msg.de;
    //      if ( msg.de === this._usuarioService.usuario.nombre) {
    //       this.graficos.grafico1.leyenda = 'MI DISPOSITIVO ' + de;
    //       this.beta = msg.beta1;
    //       this.gamma = msg.gamma1;
    //       this.alpha = msg.alpha1;
    //       this.graficos.grafico1.data = [this.beta, this.gamma, this.alpha];
    //      } else {
    //     // let cuerpo: string = msg.cuerpo;
    //     this.graficos.grafico2.leyenda = 'Otros Dispositivos ' + de;
    //     this.beta = msg.beta1;
    //     this.gamma = msg.gamma1;
    //     this.alpha = msg.alpha1;
    //     this.graficos.grafico2.data = [this.beta, this.gamma, this.alpha];
    //      }
        // let accelerationx: number = msg.accelerationx;
        // let accelerationy: number = msg.accelerationy;
        // let accelerationz: number = msg.accelerationz;

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
  //      this.ElSarmiento1Subscription = this._chatService.getElSarmiento1()
  //      .subscribe( (msg1: any) => {
  //        console.log('Elsarmiento1', msg1);
  //  this.elsar1 = msg1.Sarmiento;
  //      });

  ngOnDestroy() {
    this.autoChotaSubscription.unsubscribe();
    this.Dispo1Subscription.unsubscribe();
   // this.ElSarmiento1Subscription.unsubscribe();
  }
}
