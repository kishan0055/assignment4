import { Component, OnInit , ViewContainerRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { GotHttpService } from '../got-http-service.service';
import { Pipe, PipeTransform } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'] ,
    providers: []
})
export class BooksComponent implements OnInit {
allBooks: any;
  constructor(private _route: ActivatedRoute, private router: Router, private gotHttpService: GotHttpService , private location: Location,  private toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
    this.gotHttpService.getBooks().subscribe(
              data => {
                this.toastr.success('Redirecting to books', 'Success!');
                this.allBooks = data;
                console.log(this.allBooks);
                this.allBooks.sort(function(a, b) {
                  const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                  if (nameA < nameB) {
                      return -1 ;
                  }
                  if (nameA > nameB) {

                      return 1;
                  }
                  return 0;
              });
                console.log(this.allBooks);
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