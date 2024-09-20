import { Routes } from '@angular/router';
import { AppComponent } from '@app/app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('@app/modules/auth/auth.module').then((m) => m.LunaAuthModule),
      },
      {
        path: 'main',
        loadChildren: () =>
          import('@app/modules/main/main.module').then((m) => m.LunaMainModule),
      },
      {
        path: 'presentation',
        loadChildren: () =>
          import('@app/modules/presentation/presentation.module').then(
            (m) => m.LunaPresentationModule
          ),
      },
      {
        path: 'testing',
        loadChildren: () =>
          import('@app/modules/testing/testing.module').then(
            (m) => m.LunaTestingModule
          ),
      },
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'auth',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
