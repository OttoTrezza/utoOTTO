import { Component, OnInit, OnDestroy, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { ChatService, ModalUploadService} from '../../services/service.index';
import { Subscription } from 'rxjs/Subscription';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-auto-otto',
  templateUrl: './auto-otto.component.html',
  styleUrls: ['./auto-otto.component.css']
})
export class AutoOTTOChatComponent implements OnInit, OnDestroy {
  // @ViewChild('txtDir', {static: false}) txtDir: ElementRef;
  // @ViewChild('txtSen', {static: false}) txtSen: ElementRef;
  // @ViewChild('txtLongPulse', {static: false}) txtLongPulse: ElementRef;
  [x: string]: any;
  textoUser = '';
  texto = '';
  estado: string = 'DESCONECTADO';
  codEv: number = 0;

  usuariosSubscription: Subscription;
  mensajesAutoOTTOSubscription: Subscription;
  mensajespSubscription: Subscription;
  autoOTTOSubscription: Subscription;
  ElSarmientoSubscription: Subscription;
  ElSarmientoGravitySubscription: Subscription;
  elemento: HTMLElement;
  usuario: Usuario;
  mensajes: any[] = [];
  msg: any;
  fecha: Date;
  hora: any;
  pos1: number = 0;
  beta1: number = 1;
  gamma1: number = 0;
  alpha1: number = 0;
  accelerationx: number = 0;
  accelerationy: number = 0;
  accelerationz: number = 0;
  accelerationincludinggravityx: number = 0;
  accelerationincludinggravityy: number = 0;
  accelerationincludinggravityz: number = 0;
  rotationratebeta: number = 0;
  rotationrategamma: number = 0;
  rotationratealpha: number = 0;
  listener: any;
  listener1: any;
  vibrate: boolean = false;
  constructor(
    public _chatService: ChatService,
    public _usuarioService: UsuarioService,
    public _modalUploadService: ModalUploadService,
    private renderer: Renderer2,
    private renderer1: Renderer2,
    ) {  }
// tslint:disable-next-line:max-line-length
// gamma1, alpha1, accelerationx, accelerationy, accelerationz, accelerationincludinggravityx, accelerationincludinggravityY, accelerationincludinggravityZ, rotationratebeta, rotationrategamma, rotationratealpha

  ngOnInit() {

    this.listener = this.renderer.listen( window , 'deviceorientation', (event) => {

      console.log('eventdeviceorientation', event);
      console.log('eventdeviceorientationbets', event.beta);
      console.log('eventdeviceorientationgammalph', event.gamma, event.alpha);
      this.beta1 = Math.round(event.beta);
      this.gamma1 = Math.round(event.gamma);
      this.alpha1 = Math.round(event.alpha);
      this.sendElSarmiento(this.pos1, this.beta1, this.gamma1, this.alpha1);
    });


    this.listener1 = this.renderer1.listen( window , 'devicemotion', (event) => {
    console.log('eventdevicemmotion', event);
    console.log('eventdevicemmotion.accele', event.acceleration);
    console.log('eventdevicemmotion.accele.x', event.acceleration.x);
     this.accelerationx1 = Math.round(event.acceleration.x);
     this.accelerationy1 = Math.round(event.acceleration.y);
     this.accelerationz1 = Math.round(event.acceleration.z);
     this.accelerationincludinggravityx1 = Math.round(event.accelerationincludinggravity.x);
     this.accelerationincludinggravityy1 = Math.round(event.accelerationincludinggravity.y);
     this.accelerationincludinggravityz1 = Math.round(event.accelerationincludinggravity.z);
     this.rotationratebeta1 = Math.round(event.rotationrate.beta);
     this.rotationrategamma1 = Math.round(event.rotationrate.gamma);
     this.rotationratealpha1 = Math.round(event.rotationrate.alpha);

     // tslint:disable-next-line:max-line-length
     this.sendElSarmientoGravity( this.pos1, this.accelerationx1, this.accelerationy1, this.accelerationz1, this.accelerationincludinggravityx1, this.accelerationincludinggravityy1, this.accelerationincludinggravityz1, this.rotationratebeta1, this.rotationrategamma1, this.rotationratealpha1);
    });

    this.elemento = document.getElementById('divChatbox1');

    this.mensajesAutoOTTOSubscription = this._chatService.getMessagesAutoOTTO()
     .subscribe( (msg: any) => {
       console.log('En Subscribe', msg);
       let sala: string = msg.sala;
      // if (sala === this._usuarioService.usuario.sala) {
       let de: string = msg.de;
       let cuerpo: string = msg.cuerpo;
       let fecha = new Date(msg.fecha);
       let img: string = msg.img;
       if ( msg.de === this._usuarioService.usuario.nombre ) {
        de = 'yo';
       }
        //  if ( msg.de === 'Administrador') {
        //   this.adminClass = 'box bg-light-danger';
        //  }

        let hora = fecha.getHours() + ':' + fecha.getMinutes();
        this.msg = {
          de,
          cuerpo,
          sala,
          hora,
          img
        };

        this.mensajes.push( this.msg );
        // this.scrollBottom();
        setTimeout(() => {
       // this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 50);
      });

    this.autoOTTOSubscription = this._chatService.getMessagesAuto()
         .subscribe( (msg: any) => {
           let de: string = msg.de;
           let cuerpo: string = msg.cuerpo;
           let codevv = msg.codEv;
           this.codEv = codevv;
           this.estado = de + cuerpo;
           if ( msg.cuerpo === 'Movimiento-1') {
             if (this.vibrate = true) { window.navigator.vibrate(200); // vibrate for 200ms
             }

            // window.navigator.share(msg.cuerpo); // vibrate for 200ms
         }
         });
         this.autoOTTOLOGSubscription = this._chatService.getMessagesAutoLOG()
         .subscribe( (msg: any) => {
           let de: string = msg.nombre;
           let beta: string = msg.bet;
           let gamma: string = msg.gamm;
           let motor: string = msg.MOTOR;
           console.log('log de auto', de, beta, gamma, motor);
         } );

}
  ngOnDestroy() {
   this.mensajesAutoOTTOSubscription.unsubscribe();
   this.autoOTTOSubscription.unsubscribe();
   this.ElSarmientoGravitySubscription.unsubscribe();
  }
  vibrar() {
    this.vibrate = !this.vibrate;
}
  enviar() {

    if ( this.texto.trim().length === 0 ) {
   //   this.scrollBottom();
      return;
    }

     this._chatService.sendMessageAutoOTTO( this.texto, this._usuarioService.usuario.sala, (resp: any) => {
       this.msg = resp;
       console.log('this.msg = ', this.msg);
   //    this.scrollBottom();
      });
     this.texto = '';

  }
  sendElSarmiento(pos1: number, beta1: number, gamma1: number, alpha1: number) {
    // tslint:disable-next-line:max-line-length
    this._chatService.sendElSarmiento( pos1, 'juegos', beta1, gamma1, alpha1, (resp: any) => { // this.accelerationx1, this.accelerationy1, this.accelerationz1, this.accelerationincludinggravityx1, this.accelerationincludinggravityy1, this.accelerationincludinggravityz1, this.rotationratebeta1, this.rotationrategamma1, this.rotationratealpha1,
    this.msg = resp;
    console.log('this.msg = ', this.msg);
//    this.scrollBottom();
   });
  }

  // tslint:disable-next-line:max-line-length
  sendElSarmientoGravity(pos1: number, accelerationx1: number, accelerationy1: number, accelerationz1: number, accelerationincludinggravityx1: number, accelerationincludinggravityy1: number, accelerationincludinggravityz1: number, rotationratebeta1: number, rotationrategamma1: number, rotationratealpha1: number) {
    // tslint:disable-next-line:max-line-length
    this._chatService.sendElSarmientoGravity( pos1, 'juegos', accelerationx1, accelerationy1, accelerationz1, accelerationincludinggravityx1, accelerationincludinggravityy1, accelerationincludinggravityz1, rotationratebeta1, rotationrategamma1, rotationratealpha1, (resp: any) => {
    this.msg = resp;
    console.log('this.msg = ', this.msg);
//    this.scrollBottom();
   });
  }
//   cambiarValor1( valor: number ) {

//     this.txtProgress.nativeElement.value = this.progreso;
//     if ( this.progreso >= 600 && valor > 0 ) {
//       this.progreso = 600;
//       return;
//     }

//     if ( this.progreso <= 0 && valor < 0 ) {
//       this.progreso = 0;
//       return;
//     }

//     this.progreso = this.progreso + valor;
//     this.cambioValor1.emit( this.progreso );
//   }

// onChanges( newValue: number ) {

//   // let elemHTML: any = document.getElementsByName('progreso')[0];

//   // console.log( this.txtProgress );

//   if ( newValue >= 600 ) {
//     this.progreso = 600;
//   } else if ( newValue <= 0 ) {
//     this.frecuencia = 0;
//   } else {
//     this.frecuencia = newValue;
//   }

//   // elemHTML.value = this.progreso;
//   this.txtFrecuencia.nativeElement.value = this.frecuencia;

//   console.log('frecuencia en chatComp', this.frecuencia);
//   this._chatService.sendFrecuencia( this.frecuencia,  this._usuarioService.usuario.sala, (resp: any) => {
//     this.msg = resp;
//     console.log('this.msg = ', this.msg);
// //    this.scrollBottom();
//    });
// }
// onChanges1( newValue: number ) {

//   // let elemHTML: any = document.getElementsByName('progreso')[0];

//   // console.log( this.txtProgress );

//   if ( newValue >= 100 ) {
//     this.progreso = 100;
//   } else if ( newValue <= 0 ) {
//     this.LongPulse = 0;
//   } else {
//     this.LongPulse = newValue;
//   }

//   // elemHTML.value = this.progreso;
//   this.txtLongPulse.nativeElement.value = this.LongPulse;

//   console.log('LongPulse en chatComp', this.LongPulse);
//   this._chatService.sendLongPulse( this.LongPulse,  this._usuarioService.usuario.sala, (resp: any) => {
//     this.msg = resp;
//     console.log('this.msg = ', this.msg);
// //    this.scrollBottom();
//    });
// }

// onChanges2( newValue: number ) {

//   // let elemHTML: any = document.getElementsByName('progreso')[0];

//   // console.log( this.txtProgress );

//   if ( newValue >= 90 ) {
//     this.dir = 90;
//   } else if ( newValue <= -90 ) {
//     this.dir = -90;
//   } else {
//     this.dir = newValue;
//   }

//   // elemHTML.value = this.progreso;
//   this.txtDir.nativeElement.value = this.dir;

//   console.log('dir en chatComp', this.dir);
//   this._chatService.sendDir( this.dir,  this._usuarioService.usuario.sala, (resp: any) => {
//     this.msg = resp;
//     console.log('this.msg = ', this.msg);
// //    this.scrollBottom();
//    });
// }
// onChanges3( newValue: number ) {

//   // let elemHTML: any = document.getElementsByName('progreso')[0];

//   // console.log( this.txtProgress );

//   if ( newValue >= 90 ) {
//     this.sen = 90;
//   } else if ( newValue <= -90 ) {
//     this.sen = -90;
//   } else {
//     this.sen = newValue;
//   }

//   // elemHTML.value = this.progreso;
//   this.txtSen.nativeElement.value = this.sen;

//   console.log('sen en chatComp', this.sen);
//   this._chatService.sendSen( this.sen,  this._usuarioService.usuario.sala, (resp: any) => {
//     this.msg = resp;
//     console.log('this.msg = ', this.msg);
// //    this.scrollBottom();
//    });
// }

}
