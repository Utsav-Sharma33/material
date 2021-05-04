import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { StepperComponent } from './stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper'

const mat_modules = [
  MatFormFieldModule, MatInputModule, MatIconModule
]

const cdk_modules = [
  CdkStepperModule
];

const components = [
  FormFieldComponent,
  StepperComponent
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    ...mat_modules,
    ...cdk_modules
  ],
  exports: [
    ...components
  ]
})
export class ComponentsModule { }
