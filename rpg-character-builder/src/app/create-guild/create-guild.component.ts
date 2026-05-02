import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Guild {
  guildName: string;
  description: string;
  type: string;
  notificationPreference: string;
}

// I used Claude to help generate the template and styles.
// I read through the template to verify the output.
@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="guild-form-container">
      <form class="guild-form card" #guildForm="ngForm" (ngSubmit)="addGuild()">
        <h2>Forge Your Guild</h2>
        <div class="divider">Guild Creation</div>

        <div class="form-group">
          <label for="guildName">Guild Name</label>
          <input
            type="text"
            id="guildName"
            name="guildName"
            [(ngModel)]="guildName"
            placeholder="Enter guild name"
            required
          />
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            id="description"
            name="description"
            [(ngModel)]="description"
            placeholder="Describe your guild"
            rows="4"
            required
          ></textarea>
        </div>

        <div class="form-group">
          <label for="type">Type</label>
          <select id="type" name="type" [(ngModel)]="type" required>
            <option value="" disabled>Select type</option>
            <option value="Competitive">Competitive</option>
            <option value="Casual">Casual</option>
            <option value="Social">Social</option>
            <option value="Educational">Educational</option>
          </select>
        </div>

        <div class="form-group">
          <label class="radio-group-label">Notification Preference</label>
          <div class="radio-group">
            <label class="radio-label">
              <input
                type="radio"
                name="notificationPreference"
                value="Email"
                [(ngModel)]="notificationPreference"
                required
              />
              Email
            </label>
            <label class="radio-label">
              <input
                type="radio"
                name="notificationPreference"
                value="SMS"
                [(ngModel)]="notificationPreference"
              />
              SMS
            </label>
            <label class="radio-label">
              <input
                type="radio"
                name="notificationPreference"
                value="In-App"
                [(ngModel)]="notificationPreference"
              />
              In-App
            </label>
          </div>
        </div>

        <div class="form-group checkbox-group">
          <label class="checkbox-label">
            <input
              type="checkbox"
              name="acceptTerms"
              [(ngModel)]="acceptTerms"
              required
            />
            I accept the terms and conditions
          </label>
        </div>

        <button
          type="submit"
          class="btn btn-primary submit-btn"
          [disabled]="
            !guildName ||
            !description ||
            !type ||
            !notificationPreference ||
            !acceptTerms
          "
        >
          Forge Guild
        </button>
      </form>

      <div class="roster card">
        <h2>Guild Roster</h2>
        @if (guilds.length > 0) {
          <ul class="guild-list">
            @for (guild of guilds; track guild.guildName) {
              <li class="guild-entry">
                <strong>{{ guild.guildName }}</strong>
                <span class="guild-meta">{{ guild.type }}</span>
                <span class="guild-description">{{ guild.description }}</span>
                <span class="guild-notification">{{
                  guild.notificationPreference
                }}</span>
              </li>
            }
          </ul>
        } @else {
          <p class="empty-roster">No guilds forged yet. Begin your legacy.</p>
        }
      </div>
    </div>
  `,
  styles: `
    .guild-form-container {
      display: flex;
      gap: 32px;
      flex-wrap: wrap;
      align-items: flex-start;
    }

    .guild-form {
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
    textarea,
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

    textarea {
      resize: vertical;
    }

    input[type='text']::placeholder,
    textarea::placeholder {
      color: var(--color-text-muted);
      opacity: 0.6;
    }

    input[type='text']:focus,
    textarea:focus,
    select:focus {
      border-color: var(--color-gold);
      box-shadow: 0 0 0 2px var(--color-gold-glow);
    }

    select option {
      background-color: var(--color-bg-elevated);
    }

    .radio-group-label {
      margin-bottom: 4px;
    }

    .radio-group {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    .radio-label {
      display: flex;
      align-items: center;
      gap: 6px;
      font-family: 'Crimson Text', serif;
      font-size: 1rem;
      text-transform: none;
      letter-spacing: 0;
      color: var(--color-text-primary);
      cursor: pointer;
    }

    .checkbox-group {
      flex-direction: row;
      align-items: center;
    }

    .checkbox-label {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: 'Crimson Text', serif;
      font-size: 1rem;
      text-transform: none;
      letter-spacing: 0;
      color: var(--color-text-primary);
      cursor: pointer;
    }

    .submit-btn {
      width: 100%;
      justify-content: center;
      margin-top: 8px;
      padding: 12px;
      font-size: 0.9rem;
    }

    .submit-btn:disabled {
      opacity: 0.7;
      cursor: default;
      pointer-events: none;
    }

    .guild-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .guild-entry {
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding: 12px 16px;
      background-color: var(--color-bg-overlay);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-sm);
      transition: border-color var(--transition-fast);
    }

    .guild-entry:hover {
      border-color: var(--color-border-bright);
    }

    .guild-entry strong {
      font-family: 'Cinzel', serif;
      font-size: 1rem;
      color: var(--color-gold-light);
    }

    .guild-meta {
      font-family: 'Crimson Text', serif;
      font-size: 0.95rem;
      color: var(--color-text-primary);
    }

    .guild-description {
      font-family: 'Crimson Text', serif;
      font-size: 0.9rem;
      color: var(--color-text-muted);
      font-style: italic;
    }

    .guild-notification {
      font-size: 0.75rem;
      color: var(--color-text-muted);
      letter-spacing: 0.04em;
    }

    .empty-roster {
      color: var(--color-text-muted);
      font-style: italic;
      text-align: center;
      margin: 0;
    }
  `,
})
// I walked through this class with Claude as a collaborator to
// understand why the decisions were made and make changes where
// I thought a different implementation would be better.
export class CreateGuildComponent {
  guildName: string;
  description: string;
  type: string;
  acceptTerms: boolean;
  notificationPreference: string;
  guilds: Guild[];

  constructor() {
    this.guildName = '';
    this.description = '';
    this.type = '';
    this.acceptTerms = false;
    this.notificationPreference = '';
    this.guilds = [
      {
        guildName: 'The Bronze Company',
        description: 'A reliable guild open to all adventurers.',
        type: 'Casual',
        notificationPreference: 'Email',
      },
      {
        guildName: 'Stonepath Guild',
        description: 'A dependable guild where every member earns their place.',
        type: 'Competitive',
        notificationPreference: 'In-App',
      },
      {
        guildName: 'The Dawnwatch',
        description: 'A guild of early risers and loyal defenders.',
        type: 'Casual',
        notificationPreference: 'SMS',
      },
      {
        guildName: 'The Crossroads',
        description: 'A guild where paths meet and new alliances are formed.',
        type: 'Social',
        notificationPreference: 'Email',
      },
      {
        guildName: 'The Steadfast',
        description: 'A guild that never leaves a member behind.',
        type: 'Casual',
        notificationPreference: 'In-App',
      },
    ];
  }

  addGuild(): void {
    if (
      !this.guildName ||
      !this.description ||
      !this.type ||
      !this.notificationPreference ||
      !this.acceptTerms
    )
      return;

    const newGuild: Guild = {
      guildName: this.guildName,
      description: this.description,
      type: this.type,
      notificationPreference: this.notificationPreference,
    };

    this.guilds.push(newGuild);
    this.resetForm();
  }

  resetForm(): void {
    this.guildName = '';
    this.description = '';
    this.type = '';
    this.acceptTerms = false;
    this.notificationPreference = '';
  }
}
