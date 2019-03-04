import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { HttpClient } from "@angular/common/http";
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  formData:Movie;
  list:Movie[];
  displayMov:Movie;
  readonly rootURL = 'https://localhost:44371/api';

  constructor(private http:HttpClient) { }

  //add or update a movie in the database
  postMovieDetail(formData:Movie){
    return this.http.post(this.rootURL + '/movies',formData);
  }

  //get all movies from database
  getAllMovies(){
    return this.http.get(this.rootURL + "/movies");
  }
}
