import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { mockMovies, Movie } from '../../types/movie.model';

@Injectable({
    providedIn: 'root'
})
export class MoviesMainService {

  constructor() {}

  public getMovies(): Observable<Movie[]> {
    const lsData= JSON.parse(localStorage.getItem('likeMovies'))?.map(Number);
    if (lsData) {
      for (let i = 0; i < lsData.length; i++) {
        const id = lsData[i];
        mockMovies?.map((movie) => {
          if (movie.id === id) {
            movie.likedByUser = true;          
          }
        })
      }
    }
    return of(mockMovies.sort((a, b) => a.rating - b.rating));
  }

  getFavouriteMovies(): Observable<Movie[]> {
    const lsData= JSON.parse(localStorage.getItem('likeMovies'))?.map(Number);
    const returnData = []
    if (lsData) {
      for (let i = 0; i < lsData.length; i++) {
        const id = lsData[i];
        mockMovies?.map((movie) => {
          if (movie.id === id) {
            movie.likedByUser = true;          
          }
        })
        returnData.push(mockMovies.find((movie: Movie) => movie.id === id));
      }
    }
    return of(returnData);
  }
}
