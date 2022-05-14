import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-block',
  templateUrl: './movie-block.component.html',
  styleUrls: ['./movie-block.component.scss'],
})
export class MovieBlockComponent implements OnInit {
  title = 'title';
  constructor() {}

  ngOnInit(): void {}
}
