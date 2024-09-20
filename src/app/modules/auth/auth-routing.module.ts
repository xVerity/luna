import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LunaAuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: LunaAuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LunaLoginModule),
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LunaAuthRoutingModule {}
