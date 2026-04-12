export interface CharacterAttributes {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  // Generated the template using Claude
  template: `
    <div>
      <h1>Our Players</h1>
      <p>
        Meet the brave adventurers of our realm, each with their own unique
        skills, backstories, and legendary quests to undertake.
      </p>
      <ul class="players-container">
        @for (character of characters; track character) {
          <li class="character-card">
            <div class="card">
              <h3>{{ character.name }}</h3>
              <p><span class="label">Gender:</span> {{ character.gender }}</p>
              <p><span class="label">Class:</span> {{ character.class }}</p>
              <p><span class="label">Faction:</span> {{ character.faction }}</p>
              <p>
                <span class="label">Starting Location:</span>
                {{ character.startingLocation }}
              </p>
              <p>
                <span class="label">Fun Fact:</span> {{ character.funFact }}
              </p>
            </div>
          </li>
        }
      </ul>
    </div>
  `,

  // Styles generated with Claude
  styles: `
    .players-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      list-style: none;
      padding: 0;
      margin-top: 24px;
    }

    .character-card .card {
      margin-bottom: 0;
      height: 100%;
    }

    .label {
      font-weight: bold;
    }
  `,
})
export class PlayersComponent {
  characters: CharacterAttributes[];
  constructor() {
    // Characters generated with Claude
    this.characters = [
      {
        name: 'Anna Cole',
        gender: 'Female',
        class: 'Ranger',
        faction: 'Forest Patrol',
        startingLocation: 'Pinewood Village',
        funFact: 'Knows the name of every trail in the region.',
      },
      {
        name: 'Derek Stone',
        gender: 'Male',
        class: 'Soldier',
        faction: 'East Wall Guard',
        startingLocation: 'Border Town',
        funFact: 'Has completed more training drills than anyone in his unit.',
      },
      {
        name: 'Sara Quinn',
        gender: 'Female',
        class: 'Scout',
        faction: 'Riverside Watch',
        startingLocation: 'Mill Town',
        funFact: 'Can navigate back to camp in complete darkness.',
      },
      {
        name: 'Gary Marsh',
        gender: 'Male',
        class: 'Fighter',
        faction: 'Town Guard',
        startingLocation: 'Stone Gate',
        funFact: 'Has not missed a single sparring session in two years.',
      },
      {
        name: 'Claire Holt',
        gender: 'Female',
        class: 'Diplomat',
        faction: 'Trade Council',
        startingLocation: 'Harbor Town',
        funFact: 'Speaks three languages and is learning a fourth.',
      },
      {
        name: 'Rex Holt',
        gender: 'Male',
        class: 'Champion',
        faction: 'Northern League',
        startingLocation: 'Cold Ridge',
        funFact: 'Has won the regional tournament three years in a row.',
      },
      {
        name: 'Laura Banks',
        gender: 'Female',
        class: 'Ranger',
        faction: 'Forest Patrol',
        startingLocation: 'Greenfield',
        funFact: 'Keeps detailed journals of every scouting trip.',
      },
      {
        name: 'Cal Merritt',
        gender: 'Male',
        class: 'Soldier',
        faction: 'East Wall Guard',
        startingLocation: 'Fort Crossing',
        funFact: 'Remembers the name of every person they have trained with.',
      },
      {
        name: 'Nina West',
        gender: 'Female',
        class: 'Diplomat',
        faction: 'Trade Council',
        startingLocation: 'Port Side',
        funFact:
          'Has resolved every dispute brought to her without a formal hearing.',
      },
      {
        name: 'Tom Reeves',
        gender: 'Male',
        class: 'Champion',
        faction: 'Town Guard',
        startingLocation: 'Stone Gate',
        funFact:
          'Practices with a training sword every morning before sunrise.',
      },
    ];
  }
}
