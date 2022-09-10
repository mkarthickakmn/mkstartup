import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-headers',
  templateUrl: './section-headers.component.html',
  styleUrls: ['./section-headers.component.scss']
})
export class SectionHeadersComponent implements OnInit {
  @Input() title:any;
  @Input() button:any;
  @Input() desc:any;
  constructor() { }

  ngOnInit(): void {
  }

}
