export class Quote {
    showDetails: boolean;
    id: number;
    quote: string;
    author: string;
    upvotes: number;
    downvotes: number;
    
    constructor(id:number,quote:string, author:string, upvotes:number, downvotes:number,){
        this.id = id;
        this.quote = quote;
        this.author = author;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
        this.showDetails=false;
    }
}
