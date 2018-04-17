import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add your component here
import { CvComponent } from './cv/cv.component';
import { MetallicaSongSearchComponent} from './metallica-song-search/metallica-song-search.component'

//This is my case
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cv',
    component: CvComponent
  },
  {
    path: 'metallica',
    component: MetallicaSongSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
