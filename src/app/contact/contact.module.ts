import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'contact-me', component: ContactMeComponent }
    ])
  ],
  declarations: [ContactMeComponent]
})
export class ContactModule { }
