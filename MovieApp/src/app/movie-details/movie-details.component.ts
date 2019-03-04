import { Component, OnInit } from '@angular/core';
import { Movie } from "src/app/shared/movie.model";
import { MovieService } from "src/app/shared/movie.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  private movieObservable:Movie;
  constructor(private service:MovieService) { }

  ngOnInit() {
    this.movieObservable = this.service.displayMov; //movie to be displayed
  }


}
