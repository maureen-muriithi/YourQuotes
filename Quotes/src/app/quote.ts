export class Quote {
    showDetails: boolean;
    id: number;
    name: string;
    quote: string;
    author: string;
    upvote:number;
    downvote:number;
    totalVotes: number;
    completeDate: Date;
    
    constructor(id:number, name: string, quote:string, author:string, upvote:number, downvote:number, totalVotes: number, completeDate:Date,){
        this.id = id;
        this.name = name;
        this.quote = quote;
        this.author = author;
        this.upvote = upvote;
        this.downvote = downvote;
        this.totalVotes = totalVotes;
        this.completeDate = completeDate;
        this.showDetails=false;
    }
}
