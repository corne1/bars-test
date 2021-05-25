import { Component, Input } from '@angular/core';
import { Movie } from '../../../types/movie.model';
import { MoviesMainService } from '../movies-main.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  @Input() movie: Movie;

  constructor(private readonly movieService: MoviesMainService) { }

  alertCall($event: Event, descr: string): void {
    $event.stopPropagation();
    alert(descr);
  }

  likePhoto($event: Event, movie: Movie): void {
    $event.stopPropagation();
    let lsArray: string[] = JSON.parse(localStorage.getItem('likeMovies'));
    if (!lsArray) {
      lsArray = [];
    }
    const movieId = movie.id.toString();
    if (lsArray.includes(movieId)) {
      lsArray = lsArray.filter(id => id !== movieId)
    } else {
      lsArray.push(movieId)
    }
    localStorage.setItem('likeMovies', JSON.stringify(lsArray))
    movie.likedByUser = !movie.likedByUser;
  }
}
