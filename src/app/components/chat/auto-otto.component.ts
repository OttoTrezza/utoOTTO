import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { ChatService, ModalUploadService} from '../../services/service.index';
import { Subscription } from 'rxjs/Subscription';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-auto-otto',
  templateUrl: './auto-otto.component.html',
  styleUrls: ['./auto-otto.component.css']
})
export class AutoOTTOChatComponent implements OnInit {
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
  autoOTTOSubscription: Subscription;
  Dispo1Subscription: Subscription;
  elemento: HTMLElement;
  usuario: Usuario;
  mensajes: any[] = [];
  msg: any;
  fecha: Date;
  hora: any;
  pos: number;
  pos1: number = 99;
  alpha1: number = 0;
  beta1: number = 0;
  gamma1: number = 0;
  positionX:  number = 0;
  positionY:  number = 0;
  // accelerationx1: number = 0;
  // accelerationy1: number = 0;
  // accelerationz1: number = 0;
  accelerationincludinggravityx1: number = 0;
  accelerationincludinggravityy1: number = 0;
  accelerationincludinggravityz1: number = 0;
  // rotationratebeta1: number = 0;
  // rotationrategamma1: number = 0;
  // rotationratealpha1: number = 0;
  listener: any;
  listener1: any;
  listener2: any;
  // listener3: any;
  vibrate: boolean = false;
  noorientation: boolean = false;
  constructor(
    public _chatService: ChatService,
    public _usuarioService: UsuarioService,
    public _modalUploadService: ModalUploadService,
    private renderer: Renderer2,
    private renderer1: Renderer2,
    private renderer2: Renderer2
   // private renderer3: Renderer2
    ) {  }
// tslint:disable-next-line:max-line-length
// gamma1, alpha1, accelerationx, accelerationy, accelerationz, accelerationincludinggravityx, accelerationincludinggravityY, accelerationincludinggravityZ, rotationratebeta, rotationrategamma, rotationratealpha

  ngOnInit() {
// this.Dispo1Subscription = this._chatService.getDispo1()
// .subscribe( (msg: any) => {
//  this.pos = msg.pos1;
// });
// this.listener = this.renderer3.listen( window , 'deviceorientationabsolute', (event) => {

//   console.log('eventdeviceorientationabso', event);
//   console.log('eventdeviceorientationbets', window);
//   this.beta1 = Math.round(event.beta);
//   this.gamma1 = Math.round(event.gamma);
//   this.alpha1 = Math.round(event.alpha);
//    tslint:disable-next-line:max-line-length
//   this.sendElSarmiento(this.pos, this.beta1, this.gamma1, this.alpha1, this.accelerationx1, this.accelerationy1, this.accelerationz1, this.accelerationincludinggravityx1, this.accelerationincludinggravityy1, this.accelerationincludinggravityz1, this.rotationratebeta1, this.rotationrategamma1, this.rotationratealpha1);
// });
this.listener2 = this.renderer2.listen( window , 'mousemove', (event) => {

    this.positionX = event.clientX ;
    this.positionY = event.clientY ;
      console.log(' this.position X e Y', this.positionX, this.positionY);

      this.sendmousePos(this.positionX, this.positionY);
});
    this.listener = this.renderer.listen( window , 'deviceorientation', (event) => {
      if (event.beta) {
        this.noorientation = true;
        console.log('eventdeviceorientation', event);
        this.alpha1 = Math.round(event.alpha);
        this.beta1 = Math.round(event.beta);
        this.gamma1 = Math.round(event.gamma);
        // tslint:disable-next-line:max-line-length
        this.sendElSarmiento(this.alpha1, this.beta1, this.gamma1); // this.accelerationx1, this.accelerationy1, this.accelerationz1, , this.rotationratebeta1, this.rotationrategamma1, this.rotationratealpha1, this.accelerationincludinggravityx1, this.accelerationincludinggravityy1, this.accelerationincludinggravityz1
      } else {
        this.noorientation = true;
      }
    });
      this.listener1 = this.renderer1.listen( window , 'devicemotion', (event) => {
        console.log('eventdevicedevicemotion', event);
        // this.accelerationx1 = Math.round(event.acceleration.x);
        // this.accelerationy1 = Math.round(event.acceleration.y);
        // this.accelerationz1 = Math.round(event.acceleration.z);
        if (this.noorientation === true) {
        this.alpha1 = Math.round(event.accelerationIncludingGravity.x);
        this.beta1 = Math.round(event.accelerationIncludingGravity.y);
        this.gamma1 = Math.round(event.accelerationIncludingGravity.z);
        // tslint:disable-next-line:max-line-length
        this.sendElSarmiento(this.alpha1, this.beta1, this.gamma1); // this.accelerationx1, this.accelerationy1, this.accelerationz1, , this.rotationratebeta1, this.rotationrategamma1, this.rotationratealpha1, this.accelerationincludinggravityx1, this.accelerationincludinggravityy1, this.accelerationincludinggravityz1
        }
        // this.rotationratebeta1 = Math.round(event.rotationRate.beta);
        // this.rotationrategamma1 = Math.round(event.rotationRate.gamma);
        // this.rotationratealpha1 = Math.round(event.rotationRate.alpha);

      });

    this.elemento = document.getElementById('divChatbox1');

    this.mensajesAutoOTTOSubscription = this._chatService.getMessagesAutoOTTO()
     .subscribe( (msg: any) => {
      // console.log('En Subscribe', msg);
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
         .subscribe( (pay: any) => {
           let de: string = pay.de;
           let cuerpo: string = pay.cuerpo;
           this.estado = de + cuerpo;
           if ( de === this._usuarioService.usuario.nombre ) {
             if ( cuerpo === 'Movimiento-1') {
               this.codEv = 1;
             if (this.vibrate === true) {
                window.navigator.vibrate(200); // vibrate for 200ms
             }

           } else if ( cuerpo === 'sin magicMoves') {
            this.codEv = 2;
           }
         }
         });
         this.autoOTTOLOGSubscription = this._chatService.getMessagesAutoLOG()
         .subscribe( (msg: any) => {
           let de: string = msg.nombre;
           let beta: string = msg.bet;
           let gamma: string = msg.gamm;
           let motor: string = msg.MOTOR;
         //  console.log('log de auto', de, beta, gamma, motor);
         } );

}
//    ngOnDestroy() {
//    // this._chatService.sendMessageAutoOTTO( 'salirDsala', this._usuarioService.usuario.sala, (resp: any) => {
//     //  this.msg = resp;
//       console.log('this.msg = '); // , this.msg
//   //    this.scrollBottom();
//    //  });
// //     // this.usuariosSubscription.unsubscribe();
// //   // this.mensajesAutoOTTOSubscription.unsubscribe();
// //    this.autoOTTOSubscription.unsubscribe();
//    }
  vibrar() {
   if (this.vibrate === true) {
    this.vibrate = false;
   } else {
    this.vibrate = true;
   }
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
  // tslint:disable-next-line:max-line-length
  sendElSarmiento(alpha1: number, beta1: number, gamma1: number) { // , accelerationx1: number, accelerationy1: number, accelerationz1: number, accelerationincludinggravityx1: number, accelerationincludinggravityy1: number, accelerationincludinggravityz1: number, rotationratebeta1: number, rotationrategamma1: number, rotationratealpha1: number
    // tslint:disable-next-line:max-line-length
    this._chatService.sendElSarmiento('juegos', alpha1, beta1, gamma1, (resp: any) => {  // , accelerationx1, accelerationy1, accelerationz1, accelerationincludinggravityx1, accelerationincludinggravityy1, accelerationincludinggravityz1, rotationratebeta1, rotationrategamma1, rotationratealpha1/
    this.msg = resp;
    console.log('this.msg = ', this.msg);
//    this.scrollBottom();
   });
  }
  sendmousePos(posX: number, posY: number) {
    // tslint:disable-next-line:max-line-length
    this._chatService.sendmousePos('juegos', posX, posY, (resp: any) => {
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
