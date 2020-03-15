import { AuthGuardService } from './services/auth-guard.service';
import { SinglePropertyComponent } from './single-property/single-property.component';
import { AppComponent } from './app.component';
import { SigninComponent } from './authentification/signin/signin.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin/dashboard', canActivate: [AuthGuardService], component: AdminDashboardComponent },
  { path: 'login', component: SigninComponent },
  { path: 'property/:id', component: SinglePropertyComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
