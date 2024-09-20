import { NgModule } from '@angular/core';
import { LunaAuthRoutingModule } from './auth-routing.module';
import { LunaAuthComponent } from './auth.component';

@NgModule({
  declarations: [LunaAuthComponent],
  imports: [LunaAuthRoutingModule],
  exports: [],
  providers: [],
})
export class LunaAuthModule {}
