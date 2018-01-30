import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BioComponent } from './bio.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'bio', component: BioComponent }
    ])
  ],
  declarations: [BioComponent]
})
export class BioModule { }
