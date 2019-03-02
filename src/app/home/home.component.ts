import { Component, OnInit , ViewContainerRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { GotHttpService } from '../got-http-service.service';
import { Pipe, PipeTransform } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {

  allBooks: any;
  allCharacters: any;
  allHouses: any;
  data: any;
  allData: any[] = [];
  errorMessage: any;
  someProperty: any;

  constructor(private _route: ActivatedRoute, private router: Router, private gotHttpService: GotHttpService, private toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.gotHttpService.getAllItems().subscribe(
              data => {

                this.allBooks = data[0];
                console.log(this.allBooks);
                this.allBooks.sort(function(a, b) {
                  const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                  if (nameA < nameB) {//sort string ascending
                      return -1 ;
                  }
                  if (nameA > nameB) {

                      return 1;
                  }
                  return 0; //default return value (no sorting)
              });
                console.log(this.allBooks);
                this.allCharacters = data[1];
                this.allCharacters.sort(function(a, b) {
                  const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                  if (nameA < nameB) {//sort string ascending
                      return -1 ;
                  }
                  if (nameA > nameB) {

                      return 1;
                  }
                  return 0; //default return value (no sorting)
              });
                console.log(this.allCharacters);
                this.allHouses = data[2];
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
                this.data = data;
                console.log(this.data);
                this.allData = this.allData.concat(this.allBooks, this.allCharacters, this.allHouses);
                console.log(this.allData);
              } ,
              error => {
                console.log("some error occured");
                console.log(error.errorMessage);
              }
            );






  }
  onSelect(val) {
    console.log(val);
    this.someProperty = val;
    if (this.someProperty === 'books') {
      this.toastr.success('Redirecting to books', 'Success!');
      this.router.navigate(['/books']);

    }
    if (this.someProperty === 'characters') {
      this.toastr.success('Redirecting to characters', 'Success!');
      this.router.navigate(['/characters']);

    }
    if (this.someProperty === 'houses') {
      this.toastr.success('Redirecting to houses', 'Success!');
      this.router.navigate(['/houses']);

    }
  }
}