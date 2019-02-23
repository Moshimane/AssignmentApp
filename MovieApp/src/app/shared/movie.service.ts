import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  formData:Movie;
  list:Movie[];
  readonly rootURL = 'https://localhost:44371/api';

  constructor(private http:HttpClient) { }

  postMovieDetail(formData:Movie){
    return this.http.post(this.rootURL + '/movies',formData);
  }

  getAllMovies(){
    return this.http.get(this.rootURL + "/movies").toPromise()
    .then( res => {
      this.list = res as Movie[];
      console.log(this.list[0])
    }      
      );
  }
}
