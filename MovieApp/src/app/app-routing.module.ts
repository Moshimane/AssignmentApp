import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MovieRatingComponent} from './movie-rating/movie-rating.component'
import {MovieDetailComponent} from './movie-details/movie-detail/movie-detail.component'
import {MovieDetailListComponent} from './movie-details/movie-detail-list/movie-detail-list.component'
import { UpdateComponent } from "./movie-details/update/update.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";

const routes: Routes = [
  {path: 'rating',component: MovieRatingComponent},
  {path: 'add',component: MovieDetailComponent},
  {path: '',component: MovieDetailListComponent},
  {path: 'update',component: UpdateComponent},
  {path: 'detail',component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
