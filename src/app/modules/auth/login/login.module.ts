import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LilyButtonsModule } from '@lily/buttons/buttons.module';
import { LilyTextboxModule } from '@lily/inputs/textbox/textbox.module';
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
    LilyTextboxModule,
    LilyButtonsModule,
  ],
  exports: [],
  providers: [],
})
export class LunaLoginModule {}
