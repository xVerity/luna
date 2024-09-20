import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LilyDivModule } from '@lily/layout/div/div.module';
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
    LilyDivModule,
  ],
  exports: [],
  providers: [],
})
export class LunaLoginModule {}
