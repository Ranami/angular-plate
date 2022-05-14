import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ICharacter } from '../character-box/characters';

@Component({
  selector: 'app-codeblock',
  templateUrl: './codeblock.component.html',
  styleUrls: ['./codeblock.component.scss'],
})
export class CodeblockComponent implements OnInit {
  name: string = '';
  characters: ICharacter[] = [];
  allPages: number = 0;
  offset: number = 0;
  mybreakpoint: number = 0;

  ngOnInit(): void {
    fetch(`https://breakingbadapi.com/api/characters?`)
      .then((data) => data.json())
      .then((res) => {
        this.characters = [...res.slice(0, 20)];
        this.allPages = res.length;
      });
  }

  handleSize(event: any) {
    this.mybreakpoint = event.target.innerWidth <= 600 ? 1 : 6;
  }

  handlePaginate(event: PageEvent): void {
    if (Math.abs(event.previousPageIndex! - event.pageIndex) > 1) {
      this.offset = 20 * event.pageIndex;
    } else {
      this.offset =
        event.previousPageIndex! < event.pageIndex
          ? this.offset + 20
          : this.offset - 20;
    }

    fetch(
      `https://breakingbadapi.com/api/characters?limit=20&offset=${this.offset}`
    )
      .then((data) => data.json())
      .then((res) => {
        this.characters = res;
      });
  }

  // onInputChange(event: any) {
  //   this.name = event.target.value;
  // }

  // onButtonClick() {
  //   this.characters.unshift({
  //     status: 'Alive',
  //     name: this.name,
  //   });
  //   this.name = '';
  // }
}
