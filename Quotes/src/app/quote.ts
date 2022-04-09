export class Quote {
    showDetails: boolean;
    id: number;
    quote: string;
    author: string;
    upvotes: number;
    downvotes: number;
    completeDate: Date;
  static completeDate: string | number | Date;
    
    constructor(id:number,quote:string, author:string, upvotes:number, downvotes:number, completeDate:Date,){
        this.id = id;
        this.quote = quote;
        this.author = author;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
        this.completeDate = completeDate;
        this.showDetails=false;
    }
}
