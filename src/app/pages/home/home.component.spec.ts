import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show the title', () => {
    expect(fixture.nativeElement.querySelector('h1')?.textContent).toContain('Hash Location Strategy');
  });

  it('should render one card per stat', () => {
    const cards = fixture.nativeElement.querySelectorAll('.stat');
    expect(cards.length).toBe(fixture.componentInstance.stats.length);
  });

  it('should list the hash routes', () => {
    const text = fixture.nativeElement.querySelector('.code-box')?.textContent;
    expect(text).toContain('#/about');
    expect(text).toContain('#/contact');
  });

  it('should render every pipeline step', () => {
    const steps = fixture.nativeElement.querySelectorAll('.steps li');
    expect(steps.length).toBe(fixture.componentInstance.pipelineSteps.length);
  });
});