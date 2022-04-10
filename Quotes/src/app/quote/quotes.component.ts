import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, "'The future belongs to those who believe in the beauty of their dreams.' ", "Eleanor Roosevelt", 0, 0, 0, new Date(2022,1,1)),
    new Quote(2, "'It is during our darkest moments that we must focus to see the light.' ", "Aristotle", 0, 0, 0, new Date (2022,1,2)),
    new Quote(3, "'Life is either a daring adventure or nothing at all.' ", "Helen Keller", 0, 0, 0, new Date (2022,1,3)),
    new Quote(4, "'You will face many defeats in life, but never let yourself be defeated.' " , "Maya Angelou", 0, 0, 0, new Date (2022,1,4)),
    new Quote(5, "'Love the life you live. Live the life you love.' ", " Bob Marley", 0, 0, 0, new Date (2022,1,5)),
    new Quote(6, "'Everything you've ever wanted is on the other side of fear.'", "George Addair", 0, 0, 0, new Date (2022,1,6))
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

  highestVotes: number = 0; 
  highestQuote: number = 0; 

  calculateHighestVotes() {
    for (var i = 0; i < this.quotes.length; i++) { 
       if (this.quotes[i].totalVotes > this.highestVotes) { 
          this.highestVotes = this.quotes[i].totalVotes; 
          this.highestQuote = i; 
       }
    }
 }

downvote(i:any) {
  this.quotes[i].totalVotes -=1;
}

upvote(a:any){
  this.quotes[a].totalVotes +=1;
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

  arr:number[] = this.quotes.map(quote=>quote.totalVotes)
  highest = Math.max(...this.arr)

  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.upvote = 0;
    quote.downvote = 0;
    quote.totalVotes = 0;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
