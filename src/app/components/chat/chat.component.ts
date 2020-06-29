import { Component, OnInit, OnDestroy} from '@angular/core';
import { ChatService, ModalUploadService} from '../../services/service.index';
import { Subscription } from 'rxjs/Subscription';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  [x: string]: any;
  textoUser = '';
  texto = '';
  mensajesSubscription: Subscription;
  usuario: Usuario;
  mensajes: any[] = [];
  msg: any;
  fecha: Date;
  hora: any;
  elemento: HTMLElement;

  constructor(
    public _chatService: ChatService,
    public _usuarioService: UsuarioService,
    public _modalUploadService: ModalUploadService
    ) { }

  ngOnInit() {

    this.listener = this.renderer.listen( window , 'deviceorientation', (event) => {

      this.beta1 = Math.round(event.beta);
      this.gamma1 = Math.round(event.gamma);
      this.alpha1 = Math.round(event.alpha);
      // console.log('beta, gamma, alpha: ', this.beta1, this.gamma1, this.alpha1);
      this._chatService.sendElSarmiento('juegos', this.beta1, this.gamma1, this.alpha1, (resp: any) => {
        this.msg = resp;
        console.log('this.msg = ', this.msg);
      });

    });


    this.listener1 = this.renderer1.listen( window , 'devicemotion', (event) => {

       let acceleGral: any = event.acceleration;
      // console.log('acceleration x', event.acceleration.x);
       this.accelerationx = acceleGral.x;
       this.accelerationy = acceleGral.y;
       this.accelerationz = acceleGral.z;

      // let acelgrav: any = event.accelerationincludinggravity;
      // console.log('accelerationincludinggravity x', event.accelerationincludinggravity.x);
      // this.accelerationincludinggravityx = acelgrav.x ;
      // this.accelerationincludinggravityy = acelgrav.y ;
      // this.accelerationincludinggravityz = acelgrav.z ;

      // let rotrat: any = event.rotationrate;
      // console.log('rotationrate beta',  event.rotationrate.beta);
      // this.rotationrategamma =  rotrat.gamma;
      // this.rotationratebeta =  rotrat.beta;
      // this.rotationratealpha =  rotrat.alpha;

    });

    // this.ElSarmientoSubscription = this._chatService.getElSarmiento()
    // .subscribe( (msg: any) => {
    //   console.log('ESPmsgasaxsxsxsxsx', msg);
    //    let de: string = msg.de;
    //   this.graficos.grafico1.leyenda = de;
    //   this.beta = msg.beta1;
    //   this.gamma = msg.gamma1;
    //   this.alpha = msg.alpha1;
    //   this.graficos.grafico1.data = [this.beta, this.gamma, this.alpha];
    // });

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

    }

  ngOnDestroy() {
    this.mensajesSubscription.unsubscribe();
   // this.mensajespSubscription.unsubscribe();
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
}

