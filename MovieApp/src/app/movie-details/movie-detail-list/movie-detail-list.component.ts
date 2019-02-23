import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-detail-list',
  templateUrl: './movie-detail-list.component.html',
  styleUrls: ['./movie-detail-list.component.scss']
})
export class MovieDetailListComponent implements OnInit {
  movies = ['Movie 1', 'Movie 2', 'Movie 3'];
  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  private movieObservable : Observable<any[]> ;
 
  constructor(private service:MovieService) { }

  ngOnInit() {
    this.service.getAllMovies();
  }

  /*getAllMyMovies(){
      this.movieObservable = 
  }*/

}
