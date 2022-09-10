import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  constructor() { }
  @Input() cardType:any;
  @Input()color:any;
  ngOnInit(): void {
    
  }

}
