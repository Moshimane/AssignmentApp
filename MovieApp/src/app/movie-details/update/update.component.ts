import { Component, OnInit } from '@angular/core';
import { MovieService } from "src/app/shared/movie.service";
import { Movie } from 'src/app/shared/movie.model';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  formData : any;
  constructor(private service: MovieService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    
  }

  //Once the update button is clicked, send the updated movie content to the database
  onUpdate(form:NgForm){
    this.formData = {
      Id : this.service.formData.Id,
      Name : form.value.Name,
      Starring : form.value.Starring,
      Summary : form.value.Summary,
      Category : form.value.Category,
      Year : form.value.Year,
      Rating : this.service.formData.Rating
    };
    if(this.service.formData==this.formData){
      this.toastr.warning('No field updated!');
    }
    else{
    this.service.postMovieDetail(this.formData).subscribe(
      res => {
        this.toastr.success('Movie Successfully Updated!');
        this.router.navigate(['']);
      },
      err => {
        console.log(err);
      }
    );
  }
  }

}
