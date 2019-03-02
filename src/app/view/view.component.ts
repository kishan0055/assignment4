import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { GotHttpService } from '../got-http-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [Location]
})
export class ViewComponent implements OnInit {
allData: any;
allKeys: any;
data: any;
  constructor(private _route: ActivatedRoute, private router: Router, private gotHttpService: GotHttpService , private location: Location) { }

  ngOnInit() {
    let myUrl = this._route.snapshot.paramMap.get('url');
    console.log(myUrl);
    this.gotHttpService.getSingleBlog(myUrl).subscribe(

      data => {
        console.log(data);
        this.allData = [data];
        console.log(this.allData);
        let result = Object.keys(data).map(function(e) {
          Object.keys(data[e]).forEach(function(k) {
             if (typeof data[e][k] === 'object') {
              data[e][k] = Object.keys(data[e][k]).map(function(l){
                 return data[e][k][l];
               });
             }
          });
          return data[e];
        });
        console.log(result);
      
   },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    );
  }
  goBackToPreviousPage(): any {
        this.location.back();
      }
}