import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/movie.service';
import { Movie } from 'src/app/shared/movie.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from "ngx-toastr";
import { Router } from '@angular/router'
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
private formData: Movie;
  constructor(private service:MovieService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      Id : Guid.create().toString(),
      Name : '',
      Starring : '',
      Summary : '',
      Category : '',
      Year : '',
      Rating : 0
    }
  }

  onSubmit(form:NgForm){
    this.formData = {
      Id : Guid.create().toString(),
      Name : form.value.Name,
      Starring : form.value.Starring,
      Summary : form.value.Summary,
      Category : form.value.Category,
      Year : form.value.Year,
      Rating : form.value.Rating
    };
    this.service.postMovieDetail(this.formData).subscribe(
      res => {
       //this.resetForm(form);
       if(res == true){
        this.toastr.success('Movie Successfully Added!');
        this.router.navigate(['']);
       }
       else{
         this.toastr.warning('Name Already Exist Please Try Another Name!');
         this.resetForm();
       }
       
      },
      err => {
        console.log(err);
      }
    );
  }
}
