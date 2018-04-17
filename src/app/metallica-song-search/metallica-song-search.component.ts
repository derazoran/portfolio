import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-metallica-song-search',
  templateUrl: './metallica-song-search.component.html',
  styleUrls: ['./metallica-song-search.component.scss']
})
export class MetallicaSongSearchComponent implements OnInit {

  term = '';
  http;
  lyrics = '';

  constructor(http: HttpClient) {

    this.http = http;
  }

  ngOnInit() {
  }

  onSearch() {

    this.http.get('https://api.lyrics.ovh/v1/Metallica/' + this.term)
      .subscribe(
        (response) => {
          this.lyrics = response.lyrics.replace(/(\r\n|\n|\r)/g, "<br />");
        },
        () => {
          this.lyrics = '<h2> sorry no Title Found try one of the top Tracks </h2>';
          this.getTopTracksFromMetallica();
        }
      )

  }

  getTopTracksFromMetallica() {
    this.http.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=Metallica&api_key=26f758c2642831ad3da7ed22461ff3aa&format=json')
      .subscribe(
        (response) => {
          let songArray = response.toptracks.track;

          songArray.forEach( (element) => {
            this.lyrics += element.name+'<br />';
          });
          //this.lyrics = response.lyrics.replace(/(\r\n|\n|\r)/g, "<br />");
        },
        (error) => {
          this.lyrics = error.statusText;
        }
      )
  }

}
