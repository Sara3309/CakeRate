import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { HttpService } from "../http.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

@Component({
  selector: 'app-edit-cake',
  templateUrl: './edit-cake.component.html',
  styleUrls: ['./edit-cake.component.css']
})
export class EditCakeComponent implements OnInit {

  updateCake: any;
  isLoading = false;
  singleCake:any;
  private cakeId: string;

  constructor(private _httpService: HttpService,private http: HttpClient, public route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.updateCake = { name:"", description:"", imagePath:""};
    this.isLoading = true;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("cakeId")) {
        this.cakeId = paramMap.get("cakeId");
        console.log(this.cakeId);
        this.updateCake.id = this.cakeId;
        this.isLoading = false;
        let observable = this._httpService.getSingleCake(this.cakeId);
        observable.subscribe(data => {console.log("Got the one data! ya!", data)
        this.singleCake = data['data'][0];
        console.log(this.updateCake);
      })
    }
  })
  }

  onEditCake(form:NgForm) {
    if (form.invalid) {
      return;
    }

    else {
    this.isLoading = true;
    let observable = this._httpService.updateCake(this.updateCake);
    observable.subscribe(data => console.log("Got our updated data from post back!", data));
    this.updateCake = {name:"", description:"", imagePath:""}
    this.router.navigate(["/"]);
    }
    form.resetForm();
    this.isLoading = false;
  }

}
