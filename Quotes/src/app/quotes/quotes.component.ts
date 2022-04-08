import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, "Quote1", "by Ghandhi", 0, 0),
    new Quote(2, "Quote2", "by Ghandhi", 0, 0),
    new Quote(3, "Quote3", "by Ghandhi", 0, 0),
    new Quote(4, "Quote4", "by Ghandhi", 0, 0),
    new Quote(5, "Quote5", "by Ghandhi", 0, 0),
    new Quote(6, "Quote6", "by Ghandhi", 0, 0)





  ]
  constructor() { }

  ngOnInit(): void {
  }

}
