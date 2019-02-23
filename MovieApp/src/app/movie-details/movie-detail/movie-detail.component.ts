import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/movie.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  constructor(private service:MovieService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      Id : 0,
      Name : ''
    }
  }

  onSubmit(form:NgForm){
    this.service.postMovieDetail(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Movie Successfully Added!')
      },
      err => {
        console.log(err);
      }
    )
  }
}
