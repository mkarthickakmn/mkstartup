import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit,AfterViewInit {
  constructor() { }
  @Input() cardType: any;
  @Input() color: any;

  type1: any = [];
  type2: any = [];
  type4: any = [];

  ngOnInit(): void {
    this.type2 = [{
      srcset: 'assets/img/Image147.png, assets/img/Image147@2x.png 2x', image: 'assets/img/Image147.png',
      header: 'M3M Woodshire', desc: 'Pitt Street Kirribilli NSW 2061'
    }, {
      srcset: 'assets/img/Image148.png, assets/img/Image148@2x.png 2x', image: 'assets/img/Image148.png',
      header: 'M3M Woodshire', desc: 'Pitt Street Kirribilli NSW 2061'
    }, {
      srcset: 'assets/img/Image146.png, assets/img/Image146@2x.png 2x', image: 'assets/img/Image146.png',
      header: 'M3M Woodshire', desc: 'Pitt Street Kirribilli NSW 2061'
    }, {
      srcset: 'assets/img/Image145.png, assets/img/Image145@2x.png 2x', image: 'assets/img/Image145.png',
      header: 'M3M Woodshire', desc: 'Pitt Street Kirribilli NSW 2061'
    }, {
      srcset: 'assets/img/Image144.png, assets/img/Image144@2x.png 2x', image: 'assets/img/Image144.png',
      header: 'M3M Woodshire', desc: 'Pitt Street Kirribilli NSW 2061'
    }];

    this.type1 = [{
      srcset: 'assets/img/Image139.png, assets/img/Image139@2x.png 2x', image: 'assets/img/Image139.png',
      header: 'Boston House, Andheri East'
    }, {
      srcset: 'assets/img/Image140.png, assets/img/Image140@2x.png 2x', image: 'assets/img/Image140.png',
      header: 'Boston House, Andheri East'
    }, {
      srcset: 'assets/img/Image141.png, assets/img/Image141@2x.png 2x', image: 'assets/img/Image141.png',
      header: 'Boston House, Andheri East'
    }, {
      srcset: 'assets/img/Image143.png, assets/img/Image143@2x.png 2x', image: 'assets/img/Image143.png',
      header: 'Boston House, Andheri East'
    }];

    
    // this.type1 = [{
    //   srcset: 'assets/img/Image139@2x.png', image: 'assets/img/Image139.png',
    //   header: 'Boston House, Andheri East'
    // }, {
    //   srcset: 'assets/img/Image140@2x.png', image: 'assets/img/Image140.png',
    //   header: 'Boston House, Andheri East'
    // }, {
    //   srcset: 'assets/img/Image141@2x.png', image: 'assets/img/Image141.png',
    //   header: 'Boston House, Andheri East'
    // }, {
    //   srcset: 'assets/img/Image143@2x.png', image: 'assets/img/Image143.png',
    //   header: 'Boston House, Andheri East'
    // }];

    this.type4 = [{
      srcset: 'assets/img/Image156.png, assets/img/Image156@2x.png 2x', image: 'assets/img/Image156.png',
      header: 'Awards, Happenings, Spaces', desc: 'Work from any corner on the entire floor without any interruption. Work from any corner on the entire floor without any interruption'
    }, {
      srcset: 'assets/img/Image157.png, assets/img/Image157@2x.png 2x', image: 'assets/img/Image157.png',
      header: 'Awards, Happenings, Spaces', desc: 'Work from any corner on the entire floor without any interruption. Work from any corner on the entire floor without any interruption'
    }, {
      srcset: 'assets/img/Image156.png, assets/img/Image156@2x.png 2x', image: 'assets/img/Image156.png',
      header: 'Awards, Happenings, Spaces', desc: 'Work from any corner on the entire floor without any interruption. Work from any corner on the entire floor without any interruption'
    }, {
      srcset: 'assets/img/Image159.png, assets/img/Image159@2x.png 2x', image: 'assets/img/Image159.png',
      header: 'Awards, Happenings, Spaces', desc: 'Work from any corner on the entire floor without any interruption. Work from any corner on the entire floor without any interruption'
    }];

     
  }

  ngAfterViewInit(): void {

    {
     

    
    }
  }

}
