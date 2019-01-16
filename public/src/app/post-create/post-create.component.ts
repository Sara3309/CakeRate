import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { HttpService } from "../http.service";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  isLoading = false;
  cake: any;
  private cakeId: string;


  constructor(private _httpService: HttpService,private http: HttpClient, public route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.isLoading = true;
    let observable = this._httpService.getCakes()
    observable.subscribe(data => {
      this.isLoading = false;
      console.log(data);
    })
    this.cake = { name:"", description:"", imagePath:""};
    this.cakeId = null;

  }

  onPostCake(form: NgForm) {
    if (form.invalid) {
      return;
    }
    else {
    this.isLoading = true;
    let observable = this._httpService.addCake(this.cake);
    observable.subscribe(data => console.log("Got our data from post back!", data));
    this.cake = {name:"", description:"", imagePath:""}
    this.router.navigate(["/"]);
    this.isLoading = false;
    }
    form.resetForm();
  }

}
