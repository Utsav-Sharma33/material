import { trigger, transition, query, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /* animations: [
    trigger("animateStepper", [
      transition("*<=>*", [
        style({
          transform: 'translateX(-100%)'
        }),
        animate(1000, style({
          transform: 'translateX(0)'
        }))
      ])
    ])
  ], */
})
export class AppComponent {
}
