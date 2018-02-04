import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'skills', component: SkillsComponent}
    ])
  ],
  declarations: [SkillsComponent]
})
export class SkillsModule { }
