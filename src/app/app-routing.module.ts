import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'app',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
