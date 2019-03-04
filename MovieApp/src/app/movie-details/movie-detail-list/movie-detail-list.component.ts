import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/movie.service';
import {HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/movie.model'
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { ToastrService } from "ngx-toastr";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail-list',
  templateUrl: './movie-detail-list.component.html',
  styleUrls: ['./movie-detail-list.component.scss']
})
export class MovieDetailListComponent implements OnInit {
  
  private movieObservable : Movie[] = [] ;
  rateList : Movie[] = [];
  formData : Movie;
  private starList: boolean[] = [true,true,true,true,true]; 
  rating:number;  


  constructor(private service:MovieService, private toastr: ToastrService, 
    private http:HttpClient, private router:Router) { 
    
  }


  ngOnInit() {
    this.getAllMyMovies1();
  }

  //get all movies from database through http.get
  getAllMyMovies1(){
    this.service.getAllMovies().subscribe(
      (res : Movie[])=> {
        this.movieObservable = res;
      } 
    );
  }

  //Rate movie and refresh page after rating the movie
  addRating(id: any, name: string, starring: string, summary: string, 
    category: string, year: string, rating:number){
    rating +=1;

    this.service.formData = {
      Id : id,
      Name : name,
      Starring : starring,
      Summary : summary,
      Category : category,
      Year : year,
      Rating : rating
    };
   // this.toastr.success(name+" "+starring);

   //send the updated rating to the database using http post
    this.service.postMovieDetail(this.service.formData).subscribe(res => {
      if(res==true){
        this.toastr.success('Rating Successfully Updated!');
        location.reload();
      }
      else{
        this.toastr.success('Rating Failed!');
      }
      
    },
    err => {
      console.log(err);
    }
    );
  }

  //Delete a movie from the database
  deleteMovie(id: any){
    
   // this.toastr.success(name+" "+starring);
    this.http.delete('https://localhost:44371/api/movies/'+id,id).subscribe(res => {
      this.toastr.success('Movie Successfully Deleted!');
      location.reload();
    },
    err => {
      console.log(err);
    }
    );
  }

  //Update movie detail and send updated content to the database
  updateMovie(id: any, name: string, starring: string, summary: string, 
    category: string, year: string, rating:number){
      this.formData = {
        Id : id,
        Name : name,
        Starring : starring,
        Summary : summary,
        Category : category,
        Year : year,
        Rating : rating
      };

      this.service.formData = this.formData;
      ///this.router.navigate(['update']);
    }

    //when clicking on movie title show full movie details
    displayMovie(movie:Movie){
      this.service.displayMov = movie;
    }
}
