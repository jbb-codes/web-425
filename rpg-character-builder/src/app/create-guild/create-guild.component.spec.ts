import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CreateGuildComponent } from './create-guild.component';

// Walked through the tests with Claude to understand them.
// Had Claude generate two additional tests for practice
// and collaborated with Claude to implement test three when I got stuck.
describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TEST 1
  // This test verifies that the form guard works — if any required field
  // is missing, submitting should NOT add a guild to the list.
  it('should be invalid when fields are empty', () => {
    // Arrange: all fields start empty (default state of the component)
    const initialGuildCount = component.guilds.length;

    // Act: attempt to submit with no data filled in
    component.addGuild();

    // Assert: nothing was added because the form was invalid
    expect(component.guilds.length).toBe(initialGuildCount);
  });

  // TEST 2
  // This test verifies the happy path — when every field has a valid value,
  // the guild should be added to the roster.
  it('should be valid when filled correctly', () => {
    // Arrange: fill in every required field
    const initialGuildCount = component.guilds.length;
    component.guildName = 'The Iron Circle';
    component.description = 'A guild of seasoned warriors.';
    component.type = 'Competitive';
    component.acceptTerms = true;
    component.notificationPreference = 'Email';

    // Act: submit the form
    component.addGuild();

    // Assert: one guild now exists in the roster
    expect(component.guilds.length).toBe(initialGuildCount + 1);
    expect(component.guilds[initialGuildCount].guildName).toBe(
      'The Iron Circle',
    );
  });

  // PRACTICE TEST 1
  // This test verifies that all form fields reset to their default
  // empty values after a guild is successfully submitted.
  it('should reset all fields after a successful guild submission', () => {
    // Arrange: fill in all fields so there is something to reset
    component.guildName = 'Test guild name';
    component.description = 'A test guild description';
    component.type = 'Casual';
    component.acceptTerms = true;
    component.notificationPreference = 'Email';

    // Act: submit the form
    component.addGuild();

    // Assert: each field should be back to its default empty/false value
    expect(component.guildName).toBe('');
    expect(component.description).toBe('');
    expect(component.type).toBe('');
    expect(component.acceptTerms).toBeFalse();
    expect(component.notificationPreference).toBe('');
  });

  // PRACTICE TEST 2
  // This test verifies that a guild is NOT added when acceptTerms
  // is false, even if all other fields are filled in correctly.
  it('should not add a guild when acceptTerms is unchecked', () => {
    // Arrange: fill in every field except leave acceptTerms as false
    const initialGuildCount = component.guilds.length;
    component.guildName = 'Test guild name';
    component.description = 'Test description';
    component.type = 'Casual';
    component.acceptTerms = false;
    component.notificationPreference = 'Email';

    // Act: attempt to submit the form
    component.addGuild();

    // Assert: the guilds array should still be empty
    expect(component.guilds.length).toBe(initialGuildCount);
  });

  // TEST 3
  // This test verifies that the (ngSubmit) binding on the form template
  // actually calls addGuild(). We spy on the method, trigger the form
  // submit via the DOM, and confirm the method was invoked.
  it('should call addGuild on form submit with valid data', () => {
    // Arrange: fill in valid data and create a spy on addGuild with callThrough
    const initialGuildCount = component.guilds.length;
    const spy = spyOn(component, 'addGuild').and.callThrough();
    fixture.detectChanges();

    component.guildName = 'Test guild name';
    component.description = 'Test description';
    component.type = 'Casual';
    component.acceptTerms = true;
    component.notificationPreference = 'Email';

    // Act: trigger the form's ngSubmit event via the DOM using fixture.debugElement
    fixture.debugElement
      .query(By.css('form'))
      .triggerEventHandler('ngSubmit', null);

    // Assert: spy was called AND guilds roster has one entry
    expect(spy).toHaveBeenCalled();
    expect(component.guilds.length).toBe(initialGuildCount + 1);
  });
});
