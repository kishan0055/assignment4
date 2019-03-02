
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { GotHttpService } from '../got-http-service.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: []
})
export class CharactersComponent implements OnInit {
  allCharacters: any;
  constructor(private _route: ActivatedRoute, private router: Router, private gotHttpService: GotHttpService , private location: Location) { }
  ngOnInit() {
    this.gotHttpService.getCharacters().subscribe(
              data => {

                this.allCharacters = data;
                console.log(this.allCharacters);
                this.allCharacters.sort(function(a, b) {
                  const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                  if (nameA < nameB) {
                      return -1 ;
                  }
                  if (nameA > nameB) {

                      return 1;
                  }
                  return 0; 
              });
                console.log(this.allCharacters);
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