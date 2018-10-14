import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  amount: number;
  datum: Date;

  constructor() { }

  ngOnInit() {
    this.amount = 1234.56;
    this.datum = new Date();
  }

}
