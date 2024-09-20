import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LunaLoginComponent } from './login.component';

@NgModule({
  declarations: [LunaLoginComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LunaLoginComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]),
  ],
  exports: [],
  providers: [],
})
export class LunaLoginModule {}
