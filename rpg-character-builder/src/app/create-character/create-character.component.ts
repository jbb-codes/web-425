import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Character {
  characterId: number;
  name: string;
  gender: string;
  class: string;
  quantity: number;
}

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, CommonModule],
  // Generated with Claude
  template: `
    <div class="character-form-container">
      <form
        class="character-form card"
        #characterForm="ngForm"
        (ngSubmit)="addCharacter()"
      >
        <h2>Forge Your Legend</h2>
        <div class="divider">Character Creation</div>

        <div class="form-group">
          <label for="name">Character Name</label>
          <input
            type="text"
            id="name"
            name="name"
            [(ngModel)]="name"
            placeholder="Enter character name"
            required
          />
        </div>

        <div class="form-group">
          <label for="gender">Gender</label>
          <select id="gender" name="gender" [(ngModel)]="gender" required>
            <option value="" disabled>Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <label for="class">Class</label>
          <select id="class" name="class" [(ngModel)]="class" required>
            <option value="" disabled>Select class</option>
            <option value="Warrior">Warrior</option>
            <option value="Mage">Mage</option>
            <option value="Rogue">Rogue</option>
          </select>
        </div>

        <button
          type="submit"
          class="btn btn-primary submit-btn"
          [disabled]="!name || !gender || !class"
        >
          Forge Character
        </button>
      </form>

      <div class="roster card">
        <h2>Character Roster</h2>
        @if (characters.length > 0) {
          <ul class="character-list">
            @for (char of characters; track char.characterId) {
              <li class="character-entry">
                <strong>{{ char.name }}</strong>
                <span class="character-meta"
                  >{{ char.gender }} &middot; {{ char.class }}</span
                >
                <span class="character-id">ID: {{ char.characterId }}</span>
              </li>
            }
          </ul>
        } @else {
          <p class="empty-roster">
            No characters forged yet. Begin your legend.
          </p>
        }
      </div>
    </div>
  `,
  // Generated with Claude
  styles: `
    .character-form-container {
      display: flex;
      gap: 32px;
      flex-wrap: wrap;
      align-items: flex-start;
    }

    .character-form {
      flex: 2;
      min-width: 280px;
      align-self: flex-start;
    }

    .roster {
      flex: 3;
      min-width: 280px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-bottom: 20px;
    }

    label {
      font-family: 'Cinzel', serif;
      font-size: 0.8rem;
      letter-spacing: 0.06em;
      color: var(--color-text-muted);
      text-transform: uppercase;
    }

    input[type='text'],
    select {
      background-color: var(--color-bg-overlay);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-sm);
      color: var(--color-text-primary);
      font-family: 'Crimson Text', serif;
      font-size: 1rem;
      padding: 10px 14px;
      transition:
        border-color var(--transition-fast),
        box-shadow var(--transition-fast);
      outline: none;
      width: 100%;
    }

    input[type='text']::placeholder {
      color: var(--color-text-muted);
      opacity: 0.6;
    }

    input[type='text']:focus,
    select:focus {
      border-color: var(--color-gold);
      box-shadow: 0 0 0 2px var(--color-gold-glow);
    }

    select option {
      background-color: var(--color-bg-elevated);
    }

    .submit-btn {
      width: 100%;
      justify-content: center;
      margin-top: 8px;
      padding: 12px;
      font-size: 0.9rem;
    }

    .character-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .character-entry {
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding: 12px 16px;
      background-color: var(--color-bg-overlay);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-sm);
      transition: border-color var(--transition-fast);
    }

    .character-entry:hover {
      border-color: var(--color-border-bright);
    }

    .character-entry strong {
      font-family: 'Cinzel', serif;
      font-size: 1rem;
      color: var(--color-gold-light);
    }

    .character-meta {
      font-family: 'Crimson Text', serif;
      font-size: 0.95rem;
      color: var(--color-text-primary);
    }

    .character-id {
      font-size: 0.75rem;
      color: var(--color-text-muted);
      letter-spacing: 0.04em;
    }

    .submit-btn:disabled {
      opacity: 0.7;
      cursor: default;
      pointer-events: none;
    }

    .empty-roster {
      color: var(--color-text-muted);
      font-style: italic;
      text-align: center;
      margin: 0;
    }
  `,
})
export class CreateCharacterComponent {
  // Generated with Claude
  name: string;
  gender: string;
  class: string;
  selectedCharacterId: number;
  characters: Character[];

  // Generated with Claude
  constructor() {
    this.name = '';
    this.gender = '';
    this.class = '';
    this.selectedCharacterId = 1;
    this.characters = [];
  }

  // Generated with Claude
  addCharacter() {
    if (!this.name || !this.gender || !this.class) return;
    const newChar: Character = {
      characterId: Math.floor(Math.random() * 1000) + 1,
      name: this.name,
      gender: this.gender,
      class: this.class,
      quantity: 1,
    };
    this.characters.push(newChar);
    this.resetForm();
  }

  // Generated with Claude
  resetForm() {
    this.selectedCharacterId = 1;
    this.name = '';
    this.gender = '';
    this.class = '';
  }
}
