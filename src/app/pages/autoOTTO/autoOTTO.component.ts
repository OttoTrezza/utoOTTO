import { Component, OnInit} from '@angular/core'; // , OnDestroy
import { ChatService } from '../../services/service.index';
import { UsuarioService, ModalUploadService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import { WebsocketService } from '../../services/service.index';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-autoOTTO',
  templateUrl: './autoOTTO.component.html',
  styleUrls: []
})
export class AutoOTTOComponent implements OnInit { // , OnDestroy

  [x: string]: any;
  usuariosActivosSubscription: Subscription;
  salasActivasSubscription: Subscription;
  elemento: HTMLElement;
  usuarios: Usuario[] = [];
  usuario: Usuario ;
  usuariosala: Usuario ;
  nombre: string;
  sala: string;
  salas = [];
  img: string;
  cargando: boolean = true;
  totalRegistros: number = 0;


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
    this.salasActivasSubscription = this._chatService.getSalasActivas()
          .subscribe( (respu: any) => {
          this.salas.push(respu);

          console.log('salas en mens.comp', this.salas);
    } );


    this.elemento = document.getElementById('divChat-auto');

    this._chatService.emitirUsuariosActivos(this.sala);
    this.usuariosActivosSubscription = this._chatService.getUsuariosActivos()
          .subscribe( (respu: Usuario[]= []) => {
            this.usuarios = respu;
            console.log('usuarios en mens.comp', this.usuarios);
          } );

  }


  // ngOnDestroy() {
  //  this.usuariosSubscription.unsubscribe();
  //  }

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

    seleccionSala(f1: NgForm) {
      console.log( f1.value );

      if ( !f1.value ) {
        return;
      }
      console.log('this.usuariosala', this.usuariosala);
      this._usuarioService.seleccionSala({ usuario: this.usuariosala, sala: f1.value.sala })
            .subscribe( (sala: any) => {
              this.sala = sala;
              console.log('sañla:', this.sala, f1.value.sala);
            });

  }
  cambioSala( sala: string ) {
    console.log('Usuarios de sala:', sala );
    this._chatService.emitirUsuariosActivos(sala);
    this.usuariosSubscription = this._chatService.getUsuariosActivos()
          .subscribe( (respu: Usuario[]= []) => {
            this.usuarios = respu;
            console.log('usuarios', this.usuarios);
          } );
}

}
// ** TO DO THING...
// HACER UNA LISTA CON SALAS POSIBLES
// ENCAPSULAR VALUE1/2/3 EN ESA LISTA
// EXPORTAR LOS VALORES AL HTML

// CREAR LAS POSIBILIDAD DE CREAR UNA SALA NUEVA
// QUE DE HECHO SE HACE CUANDO SE SELECCIONA A UN CLIENTE EN PARTICULAR...
// CREA UNA SALA "PRIVADA", PERO TAMBIEN QUIERO CREAR SALAS "PUBLICAS".. Y NO HAY HTML PARA ESO TODAVIA!
