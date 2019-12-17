import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() public name: string;

  constructor() {

  }

  ngOnInit() {

  }
  
  /**
   * getName
   */
  public getName(): string {
    return this.name;
  }
}
