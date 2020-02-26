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
  @Input() propertyID: String;
  @Input() keyID: Number;

  constructor() { }

  ngOnInit() {
    
  }

  changeState(e, pID, kID) {
    console.log(e.checked + " " + pID + " " + kID );
  }

}
