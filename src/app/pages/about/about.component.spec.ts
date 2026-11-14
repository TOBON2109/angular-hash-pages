import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show the title', () => {
    expect(fixture.nativeElement.querySelector('h1')?.textContent).toContain('Acerca del');
  });

  it('should render one chip per technology', () => {
    const chips = fixture.nativeElement.querySelectorAll('.chips .chip');
    expect(chips.length).toBe(fixture.componentInstance.stack.length);
  });

  it('should render one comparison row per aspect', () => {
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(fixture.componentInstance.comparison.length);
  });

  it('should render one card per practice', () => {
    const cards = fixture.nativeElement.querySelectorAll('.grid .card');
    expect(cards.length).toBe(fixture.componentInstance.practices.length);
  });
});