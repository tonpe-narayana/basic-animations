import { Component } from '@angular/core';
import { trigger,transition,state,style,animate,keyframes,group } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  animations: [
    trigger('lightsonoff',[
      state('off',style({
         backgroundColor: 'green'
      })),
      state('on',style({
        backgroundColor: 'yellow'
      })),
      transition('off => on',[animate('5s 3s ease-in',style({transform: 'rotate(90deg)'}))]),
      transition('on => off',[animate('5s 3s ease-out',style({transform: 'rotate(45deg)'}))])




    ])
  ]
})
export class AppComponent {
  title = 'animations';
  roomState:string = "off";

  toggleButton()
  {
     this.roomState = (this.roomState === "off") ? "on" : "off";
  }
}
