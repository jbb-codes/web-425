import { Component } from '@angular/core';

/* Used Claude to generate component template and styles */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>Forge Your Legend</h1>
      <h2>Your adventure begins with a single character sheet.</h2>
      <p>
        Welcome to the RPG Character Builder. A place to simplify the process,
        and dive into everything your character has to offer using a flexible
        sheet that fits any game system you play. Every detail, from core
        attributes to personal history, is right where you need it when you need
        it.
      </p>
      <p>
        Whether you are brand new to the hobby or have years of experience, our
        tools are here to support you at every step. A clear layout and
        straightforward options make it easy to find what you are looking for
        without any guesswork. Keep all of your characters organized in one
        place and share them with your group whenever you are ready.
      </p>

      <div class="divider">&#9670; Featured &#9670;</div>

      <div class="highlights-container">
        <div class="highlight card">
          <img src="/class-select.png" alt="Choose your class" />
          <h3>Choose Your Class</h3>
          <p>
            The role you choose shapes everything about how your character
            engages with the world. Each option comes with its own strengths and
            abilities, so take the time to explore what is available and settle
            on the direction that fits your vision.
          </p>
        </div>
        <div class="highlight card">
          <img src="/backstory.png" alt="Write your back story" />
          <h3>Write Your Backstory</h3>
          <p>
            A character is more than just numbers on a page. The backstory
            section gives you space to record who your character is, what they
            value, and what drives them forward. These details help you stay
            connected to your character and give the rest of your group more to
            work with.
          </p>
        </div>
        <div class="highlight card">
          <img src="/gear-up.png" alt="Gear up" />
          <h3>Gear Up</h3>
          <p>
            Equipping your character is an important step in the building
            process. Browse everything available, add what fits your character's
            needs, and your stats will update automatically to reflect your
            choices. Having a fully built character ready ahead of time means
            less setup and more time spent playing.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .highlights-container {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 8px;
      }

      .highlight {
        text-align: center;
        flex: 0 1 calc(33.333% - 20px);
        box-sizing: border-box;
      }

      .highlight img {
        max-width: 100%;
        height: 180px;
        object-fit: cover;
        border-radius: 4px;
        border: 1px solid rgba(201, 168, 76, 0.25);
        margin-bottom: 16px;
      }

      .highlight h3 {
        margin-bottom: 10px;
      }

      .highlight p {
        font-size: 1rem;
        margin: 0;
      }
    `,
  ],
})
export class HomeComponent {}
