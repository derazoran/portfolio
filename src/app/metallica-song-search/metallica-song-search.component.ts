import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-metallica-song-search',
  templateUrl: './metallica-song-search.component.html',
  styleUrls: ['./metallica-song-search.component.scss']
})
export class MetallicaSongSearchComponent implements OnInit {

  displayedColumns = ['name'];
  dataSource: any = []
  loader = true;
  http;
  lyrics = '';
  list = [];

  constructor(http: HttpClient) {

    this.http = http;
  }

  ngOnInit() {

    this.http.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=Metallica&limit=151&api_key=26f758c2642831ad3da7ed22461ff3aa&format=json')
      .subscribe(
        (response) => {
          let songArray = response.toptracks.track;

          songArray.forEach( (element) => {
            this.list.push({name: element.name});
          });

          this.dataSource = new MatTableDataSource(this.list);
          //this.lyrics = response.lyrics.replace(/(\r\n|\n|\r)/g, "<br />");
          this.loader = false;
        },
        (error) => {
          this.list = error.statusText;
        }
      )

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onSearch(event: any) {

    console.log(event);

    this.http.get('https://api.lyrics.ovh/v1/Metallica/' + event.target.innerHTML)
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

  }

}
