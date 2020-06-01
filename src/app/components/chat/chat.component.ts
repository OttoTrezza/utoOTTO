import { Component, OnInit, OnDestroy, ElementRef , ViewChild } from '@angular/core';
import { ChatService, ModalUploadService} from '../../services/service.index';
import { Subscription } from 'rxjs/Subscription';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Parser } from '@angular/compiler/src/ml_parser/parser';
// import { DevicerefService } from '../../services/service.index';
// import * as $ from 'jquery';

// var params = new URLSearchParams(window.location.search);ng serve-o

// var nombre = params.get('nombre');
// var sala = params.get('sala');
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  @ViewChild('txtFrecuencia', {static: false}) txtFrecuencia: ElementRef;
  @ViewChild('txtDir', {static: false}) txtDir: ElementRef;
  @ViewChild('txtSen', {static: false}) txtSen: ElementRef;
  @ViewChild('txtLongPulse', {static: false}) txtLongPulse: ElementRef;
  [x: string]: any;
  frecuencia: number;
  dir: number;
  sen: number;
  LongPulse: number;
  progreso1: number = 0;
  progreso2: number = 0;
  progreso1r: number = 0;
  progreso2r: number = 0;
  textoUser = '';
  texto = '';
  mensajesSubscription: Subscription;
  mensajespSubscription: Subscription;
  elemento: HTMLElement;
  usuario: Usuario;
  mensajes: any[] = [];
  msg: any;
  fecha: Date;
  hora: any;
  beta1: any ;
  gamma1: any;
  alpha1: any;
  accelerationx: any;
  accelerationy: any;
  accelerationz: any;
  accelerationincludinggravityx: any;
  accelerationincludinggravityY: any;
  accelerationincludinggravityZ: any;
  rotationratebeta: any;
  rotationrategamma: any;
  rotationratealpha: any;

  constructor(
    public _chatService: ChatService,
    public _usuarioService: UsuarioService,
    public _modalUploadService: ModalUploadService
    ) { }


  ngOnInit() {
    this.disponible();
    this.elemento = document.getElementById('divChatbox');

    this.mensajesSubscription = this._chatService.getMessages()
     .subscribe( (msg: any) => {
       console.log('En Subscribe', msg);
       let sala: string = msg.sala;
      // if (sala === this._usuarioService.usuario.sala) {
       let de: string = msg.de;
       let cuerpo: string = msg.cuerpo;
       let fecha = new Date(msg.fecha);
       let img: string = msg.img;
        console.log('clg de usuaSrevice.nombre', this._usuarioService.usuario.nombre);
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
        console.log('mensaje1', this.msg);

        // this.scrollBottom();
        setTimeout(() => {
       // this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 50);
      });


      this.mensajespSubscription = this._chatService.getMessagesp()
      .subscribe( (msg: any) => {
        console.log('ESPmsg', msg);
        let sala: string = msg.sala;
       // if (sala === this._usuarioService.usuario.sala) {
        let de: string = msg.de;
        let cuerpo: string = msg.cuerpo;
        if ( msg.de === 'ignacio1' ) {
          console.log('ignacio1');
          this.progreso1 = msg.cuerpo;
          this.progreso1r = msg.cuerpo1;
        }
        if ( msg.de === 'ignacio2' ) {
          console.log('ignacio2');
          this.progreso2 = msg.cuerpo;
          this.progreso2r = msg.cuerpo1;
        }
       });



     this._modalUploadService.notificacion
          .subscribe( resp => this._usuarioService.cargarUsuarios() );
         // this.scrollBottom();


}
  ngOnDestroy() {
   this.mensajesSubscription.unsubscribe();
  }
  mostrarModal( id: string) {
    this._modalUploadService.mostrarModal( 'usuarios', id );
    // this.scrollBottom();
  }
//  scrollBottom() {

//     // selectors
//      let newMessage = this.divChatbox.children('li:last-child');
//      // let heights;
//      let clientHeight = this.divChatbox.prop('clientHeight');
//      let scrollTop = this.divChatbox.prop('scrollTop');
//      let scrollHeight = this.divChatbox.prop('scrollHeight');
//      let newMessageHeight = newMessage.innerHeight();
//      let lastMessageHeight = newMessage.prev().innerHeight() || 0;

//     if (clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight) {
//         this.divChatbox.scrollTop(scrollHeight);
//     }
// }
  enviar() {

    if ( this.texto.trim().length === 0 ) {
   //   this.scrollBottom();
      return;
    }

     this._chatService.sendMessage( this.texto, this._usuarioService.usuario.sala, (resp: any) => {
       this.msg = resp;
       console.log('this.msg = ', this.msg);
   //    this.scrollBottom();
      });
     this.texto = '';

  }

  cambiarValor1( valor: number ) {

    this.txtProgress.nativeElement.value = this.progreso;
    if ( this.progreso >= 600 && valor > 0 ) {
      this.progreso = 600;
      return;
    }

    if ( this.progreso <= 0 && valor < 0 ) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
    this.cambioValor1.emit( this.progreso );
  }

onChanges( newValue: number ) {

  // let elemHTML: any = document.getElementsByName('progreso')[0];

  // console.log( this.txtProgress );

  if ( newValue >= 600 ) {
    this.progreso = 600;
  } else if ( newValue <= 0 ) {
    this.frecuencia = 0;
  } else {
    this.frecuencia = newValue;
  }

  // elemHTML.value = this.progreso;
  this.txtFrecuencia.nativeElement.value = this.frecuencia;

  console.log('frecuencia en chatComp', this.frecuencia);
  this._chatService.sendFrecuencia( this.frecuencia,  this._usuarioService.usuario.sala, (resp: any) => {
    this.msg = resp;
    console.log('this.msg = ', this.msg);
//    this.scrollBottom();
   });
}
onChanges1( newValue: number ) {

  // let elemHTML: any = document.getElementsByName('progreso')[0];

  // console.log( this.txtProgress );

  if ( newValue >= 100 ) {
    this.progreso = 100;
  } else if ( newValue <= 0 ) {
    this.LongPulse = 0;
  } else {
    this.LongPulse = newValue;
  }

  // elemHTML.value = this.progreso;
  this.txtLongPulse.nativeElement.value = this.LongPulse;

  console.log('LongPulse en chatComp', this.LongPulse);
  this._chatService.sendLongPulse( this.LongPulse,  this._usuarioService.usuario.sala, (resp: any) => {
    this.msg = resp;
    console.log('this.msg = ', this.msg);
//    this.scrollBottom();
   });
}

onChanges2( newValue: number ) {

  // let elemHTML: any = document.getElementsByName('progreso')[0];

  // console.log( this.txtProgress );

  if ( newValue >= 90 ) {
    this.dir = 90;
  } else if ( newValue <= -90 ) {
    this.dir = -90;
  } else {
    this.dir = newValue;
  }

  // elemHTML.value = this.progreso;
  this.txtDir.nativeElement.value = this.dir;

  console.log('dir en chatComp', this.dir);
  this._chatService.sendDir( this.dir,  this._usuarioService.usuario.sala, (resp: any) => {
    this.msg = resp;
    console.log('this.msg = ', this.msg);
//    this.scrollBottom();
   });
}
onChanges3( newValue: number ) {

  // let elemHTML: any = document.getElementsByName('progreso')[0];

  // console.log( this.txtProgress );

  if ( newValue >= 90 ) {
    this.sen = 90;
  } else if ( newValue <= -90 ) {
    this.sen = -90;
  } else {
    this.sen = newValue;
  }

  // elemHTML.value = this.progreso;
  this.txtSen.nativeElement.value = this.sen;

  console.log('sen en chatComp', this.sen);
  this._chatService.sendSen( this.sen,  this._usuarioService.usuario.sala, (resp: any) => {
    this.msg = resp;
    console.log('this.msg = ', this.msg);
//    this.scrollBottom();
   });
}



disponible() {

    window.addEventListener('deviceorientation', function(event) {
            let betas1 = JSON.stringify(Math.round(event.beta));
            document.getElementById('beta').setAttribute('value', betas1);

            let gammas1 = JSON.stringify(Math.round(event.gamma));
            document.getElementById('gamma').setAttribute('value', gammas1);

            let alphas1 = JSON.stringify(Math.round(event.alpha));
            document.getElementById('alfa').setAttribute('value', alphas1);


            document.getElementById('is-absolute').innerHTML = event.absolute ? 'true' : 'false';

    });
this.beta1 = document.getElementById('beta').getAttribute('value');
this.gamma1 = document.getElementById('gamma').getAttribute('value');
this.alpha1 = document.getElementById('alpha').getAttribute('value');


    window.addEventListener('devicemotion', function(event) {
      let accelerationx = JSON.stringify(Math.round(event.acceleration.x));
      document.getElementById('ax').setAttribute('value', accelerationx );

      let accelerationy = JSON.stringify(Math.round(event.acceleration.y));
      document.getElementById('ay').setAttribute('value', accelerationy );

      let accelerationz = JSON.stringify(Math.round(event.acceleration.z));
      document.getElementById('az').setAttribute('value', accelerationz );

      let accelerationincludinggravityx = JSON.stringify( Math.round(event.accelerationIncludingGravity.x));
      document.getElementById('aigx').setAttribute('placeholder', accelerationincludinggravityx );

      let accelerationincludinggravityy = JSON.stringify( Math.round(event.accelerationIncludingGravity.y));
      document.getElementById('aigy').setAttribute('placeholder', accelerationincludinggravityy );

      let accelerationincludinggravityz = JSON.stringify( Math.round(event.accelerationIncludingGravity.z));
      document.getElementById('aigz').setAttribute('placeholder', accelerationincludinggravityz );

      let rotationratebeta = JSON.stringify(Math.round(event.rotationRate.beta));
      document.getElementById('rrb').setAttribute('value', rotationratebeta);

      let rotationrategamma = JSON.stringify(Math.round(event.rotationRate.gamma));
      document.getElementById('rrg').setAttribute('value', rotationrategamma);

      let rotationratealpha = JSON.stringify(Math.round(event.rotationRate.alpha));
      document.getElementById('rra').setAttribute('value', rotationratealpha);

      // let interval = document.getElementById('interval') as HTMLInputElement;
      // interval.value = JSON.stringify(Math.round(event.interval));

    });
    this.accelerationx = document.getElementById('ax').getAttribute('value');
    this.accelerationy = document.getElementById('ay').getAttribute('value');
    this.accelerationz = document.getElementById('az').getAttribute('value');

    this.accelerationincludinggravityx = document.getElementById('aigx').getAttribute('value');
    this.accelerationincludinggravityy = document.getElementById('aigy').getAttribute('value');
    this.accelerationincludinggravityz = document.getElementById('aigz').getAttribute('value');

    this.rotationratebeta = document.getElementById('rrb').getAttribute('value');
    this.rotationrategamma = document.getElementById('rrg').getAttribute('value');
    this.rotationratealpha = document.getElementById('rra').getAttribute('value');
    this.accelerationx = document.getElementById('ax').getAttribute('value');
  }
}
