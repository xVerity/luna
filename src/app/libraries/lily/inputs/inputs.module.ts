import { NgModule } from '@angular/core';
import { LilyTextboxModule } from './textbox/textbox.module';

/**
 * The Lily inputs module provides input components and directives to create
 * forms and input fields.
 */
@NgModule({
  imports: [LilyTextboxModule],
  exports: [LilyTextboxModule],
})
export class LilyInputsModule {}
