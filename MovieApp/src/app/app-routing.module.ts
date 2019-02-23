import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MovieRatingComponent} from './movie-rating/movie-rating.component'

const routes: Routes = [
  {path: 'rating',component: MovieRatingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }