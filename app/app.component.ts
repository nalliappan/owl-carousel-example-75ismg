import { Component, AfterViewInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements AfterViewInit {
  name = 'Angular 5';

  ngAfterViewInit(){
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
  }
}
