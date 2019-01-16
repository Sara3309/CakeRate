import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { HttpService } from "../http.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";


@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  selected = '';
  isLoading = false;
  comment: any;
  commentCake:any;
  private cakeId: string;

  constructor(private _httpService: HttpService,private http: HttpClient, public route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.comment={ commentContent:"", rate:""};
    this.isLoading = true;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("cakeId")) {
        this.cakeId = paramMap.get("cakeId");
        let observable = this._httpService.getSingleCake(this.cakeId);
        observable.subscribe(data => {console.log("Got the comment cake data! ya!", data)
        this.commentCake = data['data'][0];
        console.log(this.commentCake);
        this.isLoading = false;
        })
      }
    })
  }

  onCommentCake(form: NgForm) {
    if (form.invalid) {
      return;
    }
    else {
    console.log("this is selceted", this.selected);
    this.isLoading = true;
    this.comment.rate = this.selected;
    let observable = this._httpService.addComment(this.cakeId,this.comment);
    observable.subscribe(data => console.log("Got our data from post back!", data));
    this.comment = {commentContent:""}
    this.router.navigate(["/"]);
    this.isLoading = false;
    }
    form.resetForm();
    this.isLoading = false;
  }


}
