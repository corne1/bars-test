import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../types/movie.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(movies: Movie[], search = ''): Movie[] {
    if (!search.trim()) {
      return movies;
    }

    return movies.filter(movie => {
      return movie.movieName.toLowerCase().includes(search)
    });
  }

}
