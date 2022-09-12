import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {

    
  }

  ngAfterViewInit(): void {
 
    {
      const sectionHeroEl = document.querySelector("header") as HTMLElement;
      let header = document.getElementsByClassName("header");
      let headersection = document.getElementsByClassName("header-section");
      let height=header[0].getBoundingClientRect().height;
      console.log(height);
      const obs = new IntersectionObserver(
        function (entries) {
          const ent = entries[0];
          console.log(ent);
  
          if (ent.isIntersecting === false) {
            header[0].classList.add('sticky1');
            headersection[0].classList.add('sticky2');
  
          }
  
          if (ent.isIntersecting === true) {
            header[0].classList.remove('sticky1');
            headersection[0].classList.remove('sticky2');
  
          }
        },
        {
          // In the viewport
          root: null,
          threshold: 0,
          rootMargin:`-90.4px`
        }
      );
      obs.observe(sectionHeroEl);
    }
  }

}
