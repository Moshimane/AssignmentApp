import { Component, OnInit } from '@angular/core';
import { MovieDetailListComponent } from "src/app/movie-details/movie-detail-list/movie-detail-list.component";
import { Movie } from "src/app/shared/movie.model";
import { MovieService } from "src/app/shared/movie.service"

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.scss']
})
export class MovieRatingComponent implements OnInit {
  private movieList1 : Movie[] = [];
  order = "rating"; //an element to sort the list by

  constructor(private movieService: MovieService) { 
    
  }

  ngOnInit() {
    this.getMovieList();
  }

  //get all movies
  getMovieList(){
    this.movieService.getAllMovies().subscribe(
      (res : Movie[])=> { 
        this.movieList1 = res; //copy database objects into the array
      } 
    );
  }


  displayMovie(movie:Movie){
    this.movieService.displayMov = movie;
  }
}
