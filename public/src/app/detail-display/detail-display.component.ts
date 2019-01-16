import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-detail-display',
  templateUrl: './detail-display.component.html',
  styleUrls: ['./detail-display.component.css']
})
export class DetailDisplayComponent implements OnInit {


  isLoading= false;
  cakes: any;
  total: number;
  average: number;
  averageArr = new Array();

  constructor(private _httpService: HttpService ) {

  }

  ngOnInit() {
    this.isLoading = true;
    this.getAll();


  }
  getAll() {
    let observable = this._httpService.getCakes()
    observable.subscribe(data => {
      this.isLoading = false;
      console.log("Got our data!", data)
      this.cakes = data['data'];
      this.isLoading = false;
      for (var i in this.cakes){
        this.total = 0;
        this.average = 0;
          for (var j in this.cakes[i].comments){
            console.log("this is the rate", this.cakes[i].comments[j].rate);
            this.total = parseInt(this.cakes[i].comments[j].rate.split('')) + this.total;
            this.average = this.total/this.cakes[i].comments.length;
          };
          this.averageArr.push(this.average);
      }
      console.log("this is the averagearray", this.averageArr);

      for(var i in this.cakes){
        this.cakes[i]['averageRate'] = String(this.averageArr[i]);
      }
      console.log("new cakes",this.cakes);
    })

  }

  onDelete(cakeId: string) {
    console.log(cakeId);
    let observable = this._httpService.deleteCake(cakeId);
    observable.subscribe(data => {console.log("Got the one data! ya!", data)
    console.log("delete one",data);
  });
  this.getAll();
  }

}
