import { animate, query, style, transition, trigger } from '@angular/animations';
import { CdkStepper, CdkStepperNext } from '@angular/cdk/stepper';
import { ConstantPool } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers: [
    // This custom stepper provides itself as CdkStepper so that it can be recognized
    // by other components.
    { provide: CdkStepper, useExisting: StepperComponent }
  ]
})
export class StepperComponent extends CdkStepper implements OnInit {

  ngOnInit(): void {

  }

  click(index: number): void {
    this.selectedIndex = index;
  }



}
