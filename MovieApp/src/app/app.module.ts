import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailComponent } from './movie-details/movie-detail/movie-detail.component';
import { MovieDetailListComponent } from './movie-details/movie-detail-list/movie-detail-list.component';
import { MovieService } from './shared/movie.service';
import { MovieRatingComponent } from './movie-rating/movie-rating.component';
import { UpdateComponent } from './movie-details/update/update.component';
import { FilterdataPipe } from 'src/app/filterdata.pipe';
import { OrderpipePipe } from "src/app/orderpipe.pipe";



@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    MovieDetailComponent,
    MovieDetailListComponent,
    MovieRatingComponent,
    UpdateComponent,
    FilterdataPipe,
    OrderpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
