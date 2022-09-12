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
      const sectionHeroEl = document.querySelector("header");
      let header = document.getElementsByClassName("header");
      let headersection = document.getElementsByClassName("header-section");
      let height = header[0].getBoundingClientRect().height;
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
          rootMargin: `-90.4px`
        }
      );
      obs.observe(sectionHeroEl as HTMLElement);

      //////////////////////////

    //   const imgs = document.querySelectorAll('img[data-src]');
    //   const imgLazy = new IntersectionObserver(function (entries: any, observer) {
    //     const [entry] = entries;
    //     console.log(entries);
    //     if (!entry.isIntersecting) return;

    //     // Replace src with data-src
    //     entry.target.src = entry.target.dataset.src;
    //     console.log(entry.target.src);
    //     entry.target.addEventListener('load', function () {
    //       entry.target.classList.remove('lazy-img');
    //     });

    //     observer.unobserve(entry.target);

    //   }, {
    //     // In the viewport
    //     root: null,
    //     threshold: 0,
    //     rootMargin: '-200px',
    //   })

    //   imgs.forEach(img => imgLazy.observe(img))
    }
  }

}
