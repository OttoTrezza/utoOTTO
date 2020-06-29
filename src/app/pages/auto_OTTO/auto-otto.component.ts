import { Component, OnInit, OnDestroy} from '@angular/core';
import { ChatService } from '../../services/service.index';
import { UsuarioService, ModalUploadService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import { WebsocketService } from '../../services/service.index';
import { Subscription } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auto-otto',
  templateUrl: './auto-otto.component.html',
  styleUrls: ['./auto-otto.component.css']
})
export class AutoOTTOComponent implements OnInit, OnDestroy {
  [x: string]: any;

  textoUser = '';
  usuariosSubscription: Subscription;
  elemento: HTMLElement;
  usuarios: Usuario[] = [];
  usuario: Usuario ;
  usuariosala: Usuario ;
  nombre: string;
  sala: string;
  salas: {};
  img: string;
  cargando: boolean = true;
  totalRegistros: number = 0;
  progreso: number = 20;
  progreso1: number = 20;
  hexString: string;

  constructor(
    public _chatService: ChatService,
    public _usuarioService: UsuarioService,
    public _modalUploadService: ModalUploadService,
    public _wsService: WebsocketService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe( params => {
    let id = params['id'];
    });
   }

  ngOnInit() {
    this.nombre = this._usuarioService.usuario.nombre;
    this.sala = this._usuarioService.usuario.sala;
    this.img = this._usuarioService.usuario.img;

    this._wsService.entrarChat(this.nombre, this.sala, this.img);

    this.usuariosala = this._usuarioService.usuario;
    this._chatService.emitirSalasActivas();
    this.usuariosSubscription = this._chatService.getSalasActivas()
          .subscribe( (respu: any) => {
          this.salas = respu;

          console.log('salas en mens.comp', this.salas);
    } );


    this.elemento = document.getElementById('divUsuarios');

    this._chatService.emitirUsuariosActivos(this.sala);
    this.usuariosSubscription = this._chatService.getUsuariosActivos()
          .subscribe( (respu: Usuario[]= []) => {
            this.usuarios = respu;
            console.log('usuarios en mens.comp', this.usuarios);
          } );

  }


  ngOnDestroy() {
   this.usuariosSubscription.unsubscribe();
   // this.salasSubscription.unsubscribe();
   }


      // this._usuarioService.actualizarSala(this.usuariosala);
  mostrarModal( id: string) {
    this._modalUploadService.mostrarModal( 'usuarios1', id );
  }
  buscar() {

    if ( this.textoUser.trim().length === 0 ) {
      return;
    }

     this._chatService.focusBuscar( this.textoUser );
     this.textoUser = '';

  }

   salir() {
   this._chatService.logoutChatS();
   }

}


// ** TO DO THING...
// HACER UNA LISTA CON SALAS POSIBLES
// ENCAPSULAR VALUE1/2/3 EN ESA LISTA
// EXPORTAR LOS VALORES AL HTML

// CREAR LAS POSIBILIDAD DE CREAR UNA SALA NUEVA
// QUE DE HECHO SE HACE CUANDO SE SELECCIONA A UN CLIENTE EN PARTICULAR...
// CREA UNA SALA "PRIVADA", PERO TAMBIEN QUIERO CREAR SALAS "PUBLICAS".. Y NO HAY HTML PARA ESO TODAVIA!
