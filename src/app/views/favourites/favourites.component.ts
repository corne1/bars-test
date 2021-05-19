import { Component, OnInit } from '@angular/core';
import { Movie } from '../../types/movie.model';
import { MoviesMainService } from '../movies/movies-main.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favouriteMovies: Movie[];

  constructor(private readonly movieService: MoviesMainService) { }

  ngOnInit(): void {
    this.movieService.getFavouriteMovies().subscribe((movies: Movie[]) => {
      this.favouriteMovies = movies;
    })
  }
}
