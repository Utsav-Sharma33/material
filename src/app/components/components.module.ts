import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const mat_modules = [
  MatFormFieldModule, MatInputModule, MatIconModule
]

const components = [
  FormFieldComponent,
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ...mat_modules
  ],
  exports: [
    ...components
  ]
})
export class ComponentsModule { }
