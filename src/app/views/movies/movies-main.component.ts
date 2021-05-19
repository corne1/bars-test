import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Movie } from '../../types/movie.model';
import { MoviesMainService } from './movies-main.service';

@Component({
  selector: 'app-movies-main',
  templateUrl: './movies-main.component.html',
  styleUrls: ['./movies-main.component.scss']
})
export class MoviesMainComponent implements OnInit {

  public movies: Movie[] | undefined;
  search = '';

  constructor(
    private service: MoviesMainService
  ) {
  }

  ngOnInit(): void {
    this.service.getMovies()
      .subscribe((movies: Movie[]) => {
        this.movies = movies;
    });
  }
}
