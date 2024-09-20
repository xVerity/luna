import { NgModule } from '@angular/core';
import { LilyDivModule } from './div/div.module';

/**
 * The Lily layout module provides components and directives to create
 * consistent and beautiful layouts.
 */
@NgModule({
  declarations: [],
  imports: [LilyDivModule],
  exports: [LilyDivModule],
  providers: [],
})
export class LilyLayoutModule {}
