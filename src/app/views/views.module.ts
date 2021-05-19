import { NgModule } from '@angular/core';

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MoviesMainComponent } from './movies/movies-main.component';
import { MovieComponent } from './movies/movie/movie.component';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './favourites/favourites.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';

const routes: Routes = [
  {
    path: 'movie',
    component: MoviesMainComponent
  },
  {
    path: 'favourites',
    component: FavouritesComponent
  },
  {
    path: '**',
    redirectTo: '/movie',
  },
]

@NgModule({
  declarations: [
    MovieComponent,
    MoviesMainComponent,
    FavouritesComponent,
    FilterPipe
  ],
  imports: [
    RouterModule.forRoot(routes, {
			onSameUrlNavigation: 'reload',
			preloadingStrategy: PreloadAllModules,
		}),
    CommonModule,
    FormsModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class ViewsModule { }
