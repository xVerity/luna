import { NgModule } from '@angular/core';
import { LilyInputsModule } from './inputs/inputs.module';
import { LilyLayoutModule } from './layout/layout.module';

/**
 * The Lily component framework provides a set of common components and directives for use
 * in Angular applications.
 *
 * It is recomennded not to import this module directly but instead import the individual
 * components and directives that you need in your application.
 */
@NgModule({
  declarations: [],
  imports: [LilyLayoutModule, LilyInputsModule],
  exports: [LilyLayoutModule, LilyInputsModule],
  providers: [],
})
export class LilyModule {}
