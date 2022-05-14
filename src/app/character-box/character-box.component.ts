import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from '../character-box/characters';

@Component({
  selector: 'app-character-box',
  templateUrl: './character-box.component.html',
  styleUrls: ['./character-box.component.scss'],
})
export class CharacterBoxComponent implements OnInit {
  @Input() character: ICharacter | null = null;
  constructor() {}

  getCharacterColor(character: ICharacter) {
    if (character.status === 'Alive') return '#ADFF2F';
    if (character.status === 'Deceased') return '#FF4500';
    if (character.status === 'Presumed dead') return '#FFD700';
    return 'black';
  }

  ngOnInit(): void {}
}
