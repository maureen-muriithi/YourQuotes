export class Quote {
    showDetails: boolean;
    id: number;
    quote: string;
    author: string;
    upvote:number;
    downvote:number;
    totalVotes: number;
    completeDate: Date;
  static completeDate: string | number | Date;
    
    constructor(id:number,quote:string, author:string, upvote:number, downvote:number, totalVotes: number, completeDate:Date,){
        this.id = id;
        this.quote = quote;
        this.author = author;
        this.upvote = upvote;
        this.downvote = downvote;
        this.totalVotes = totalVotes;
        this.completeDate = completeDate;
        this.showDetails=false;
    }
}
