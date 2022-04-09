import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, "'The future belongs to those who believe in the beauty of their dreams.' ", "Eleanor Roosevelt", 0, 0, new Date(2022,1,1)),
    new Quote(2, "'It is during our darkest moments that we must focus to see the light.' ", "Aristotle", 0, 0, new Date (2022,1,2)),
    new Quote(3, "'Life is either a daring adventure or nothing at all.' ", "Helen Keller", 2, 0, new Date (2022,1,3)),
    new Quote(4, "'You will face many defeats in life, but never let yourself be defeated.' " , "Maya Angelou", 0, 0, new Date (2022,1,4)),
    new Quote(5, "'Love the life you live. Live the life you love.' ", " Bob Marley", 0, 0, new Date (2022,1,5)),
    new Quote(6, "'Everything you've ever wanted is on the other side of fear.'", "George Addair", 0, 0, new Date (2022,1,6))
  ]

  toggleDetails(index: any){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(isMediocre: any, index: number){
    if (isMediocre) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  // public addCount(id:number){
  //   .upvotes-btn.ngClick = function () {
  //     this.quotes[index].upvotes++;
  // }
  // }

  // public addCount(id: number){
  //   let idx= this.quotes.findIndex(el => el.id == id);
  //   this.quotes[idx].upvotes++;
  // }

  downVote(index:number) {
    if(this.quotes[index].downvotes === 0)
      return;
    this.quotes[index].downvotes -= 1;
  }

  arr:number[] = this.quotes.map(quote=>quote.upvotes)
  highest = Math.max(...this.arr)

  constructor() { }

  ngOnInit(): void {
  }

}
