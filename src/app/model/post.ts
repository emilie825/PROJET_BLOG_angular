export class Post {
    public id:number;
    public title:string;
    public resume:string;
    public content:string;
    public created_at:Date;
    public image_url:string;
    public author_id:number;

    constructor(title:string,resume:string,content:string,image_url:string,author_id:number){
      this.id=1;
      this.title=title;
      this.image_url=image_url;
      this.content=content;
      this.author_id=author_id;
      this.resume=resume;
      this.created_at= new Date();

    }
}
