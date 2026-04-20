import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCharacterComponent } from './create-character.component';
describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Use Claude to help implement
  it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
    component.name = 'Test';
    component.gender = 'Male';
    component.class = 'Warrior';
    component.addCharacter();
    const addedCharacter = component.characters[0];
    expect(addedCharacter.characterId).toBeGreaterThanOrEqual(1);
    expect(addedCharacter.characterId).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(addedCharacter.characterId)).toBe(true);
  });

  // Use Claude to help implement
  it('should add a character with correct customization', () => {
    component.name = 'Bob';
    component.gender = 'Male';
    component.class = 'Warrior';
    component.addCharacter();
    const addedCharacter = component.characters[0];
    expect(addedCharacter.name).toBe('Bob');
    expect(addedCharacter.gender).toBe('Male');
    expect(addedCharacter.class).toBe('Warrior');
    expect(addedCharacter.quantity).toBe(1);
  });

  // Generated with Claude
  it('should not add a character when required fields are missing', () => {
    component.name = '';
    component.gender = '';
    component.class = '';
    component.addCharacter();
    expect(component.characters.length).toBe(0);
  });

  // Generated with Claude
  it('should clear form fields after a character is successfully added', () => {
    component.name = 'Bob';
    component.gender = 'Male';
    component.class = 'Warrior';
    component.addCharacter();
    expect(component.name).toBe('');
    expect(component.gender).toBe('');
    expect(component.class).toBe('');
  });

  // Use Claude to help implement
  it('should reset all form fields to their default values after resetForm is called', () => {
    component.selectedCharacterId = 5;
    component.name = 'John';
    component.gender = 'Male';
    component.class = 'Warrior';
    component.resetForm();
    expect(component.selectedCharacterId).toBe(1);
    expect(component.name).toBe('');
    expect(component.gender).toBe('');
    expect(component.class).toBe('');
  });
});
