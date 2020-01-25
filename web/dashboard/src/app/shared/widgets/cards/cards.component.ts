import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() label: String;
  @Input() switchText: String;
  @Input() toggleState: Boolean;

  constructor() { }

  ngOnInit() {
    
  }

}
