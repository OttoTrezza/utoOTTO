import { RouterModule, Routes, CanActivate } from '@angular/router';

// import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
// import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { AdminGuard, VerificatokenGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';

// Mantenimientos
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { AutoOTTOComponent } from './autoOTTO/autoOTTO.component';



const pagesRoutes: Routes = [

    { path: 'dashboard', component: DashboardComponent, canActivate: [VerificatokenGuard], data: { titulo: 'Dashboard' } },
    { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas' } },
    { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
    { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
    { path: 'mensajes', component: MensajesComponent, data: { titulo: 'Mensajes' } },
    { path: 'autoOTTO', component: AutoOTTOComponent, data: { titulo: 'AutoOTTO' } },
    { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes' } },
    { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil' } },
    { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' } },

    // Mantenimientos
    {
        path: 'usuarios',
        component: UsuariosComponent,
        canActivate: [ AdminGuard],
        data: { titulo: 'mantenimiento de usuario' }
    },
    { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'mantenimiento de hospital' } },
    { path: 'medicos', component: MedicosComponent, data: { titulo: 'mantenimiento de medico' } },
    { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar medico' } },


    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
