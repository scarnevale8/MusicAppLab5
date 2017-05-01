﻿import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'albums',
    templateUrl: './album.component.html'
})

export class AlbumComponent {
    public album: Album;
    constructor(http: Http, route: ActivatedRoute) {
        var id = route.snapshot.params['id'];
        http.get('/api/albums/' + id).subscribe(result => {
            this.album = result.json();
        })
    }
}

interface Album {
    albumID: number;
    title: string;
    artist: string; 
    genre: string; 
}