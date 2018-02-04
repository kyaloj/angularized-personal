import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'experience', component: ExperienceComponent }
    ])
  ],
  declarations: [ExperienceComponent]
})
export class ExperienceModule { }
