import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: [ './order-summary.component.css' ],
})
export class OrderSummaryComponent implements OnInit {
  orders: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.orders = this.db.list('/orders');
  }
}
