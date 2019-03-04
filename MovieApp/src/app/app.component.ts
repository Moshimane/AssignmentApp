import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from "src/app/shared/movie.model";
import { MovieService } from "src/app/shared/movie.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

usersArray: Movie[] = [];
searchText = '';

constructor(private http: HttpClient, private service: MovieService) {
  this.generateArray();
}

generateArray(){
  this.service.getAllMovies().subscribe((res : Movie[]) => {
    // Populating usersArray with names from API
    this.usersArray = res;
  });
}
  title = 'MovieLibrary';

  //get movie selected from searching and pass it to the service and update the search field
  displayMovie(movie:Movie){
    this.service.displayMov = movie;
    this.searchText = null;
  }
}

