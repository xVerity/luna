import { NgModule } from '@angular/core';
import { LunaPresentationRoutingModule } from './presentation-routing.module';
import { LunaPresentationComponent } from './presentation.component';

@NgModule({
  declarations: [LunaPresentationComponent],
  imports: [LunaPresentationRoutingModule],
  exports: [],
  providers: [],
})
export class LunaPresentationModule {}
