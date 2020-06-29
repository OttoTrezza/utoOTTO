
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
// import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// pipes
import { PipesModule } from '../pipes/pipes.module';

// import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
// import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { ChatComponent } from '../components/chat/chat.component';
import { AutoOTTOComponent } from './autoOTTO/autoOTTO.component';
import { AutoOTTOChatComponent } from '../components/chat/auto-otto.component';





@NgModule({
    declarations: [
        // PagesComponent,
        DashboardComponent,
      //  ProgressComponent,
        Graficas1Component,
      //  IncrementadorComponent,
        GraficoDonaComponent,
        AccoutSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent,
        UsuariosComponent,
        // ModalUploadComponent,
        HospitalesComponent,
        MedicosComponent,
        MedicoComponent,
        MensajesComponent,
        AutoOTTOChatComponent,
        AutoOTTOComponent,
        ChatComponent,
        BusquedaComponent

    ],
    exports: [
        DashboardComponent,
        // ProgressComponent,
        Graficas1Component,
        ChatComponent,
       // BusquedaComponent // Esto fue insterado recien,,,,
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule
    ]
})
export class PagesModule { }
