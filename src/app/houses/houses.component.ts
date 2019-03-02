
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { GotHttpService } from '../got-http-service.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'] ,
  providers: []
})
export class HousesComponent implements OnInit {
allHouses: any;
  constructor(private _route: ActivatedRoute, private router: Router, private gotHttpService: GotHttpService , private location: Location) { }

  ngOnInit() {
    this.gotHttpService.getHouses().subscribe(
              data => {

                this.allHouses = data;
                console.log(this.allHouses);
                this.allHouses.sort(function(a, b) {
                  const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                  if (nameA < nameB) {//sort string ascending
                      return -1 ;
                  }
                  if (nameA > nameB) {

                      return 1;
                  }
                  return 0; //default return value (no sorting)
              });
                console.log(this.allHouses);
              } ,
              error => {
                console.log("some error occured");
                console.log(error.errorMessage);
              }
            );






  }
  goBackToPreviousPage(): any {
    this.location.back();
  }

}