import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show the title', () => {
    expect(fixture.nativeElement.querySelector('h1')?.textContent).toContain('Contacto');
  });

  it('should show the student name', () => {
    expect(fixture.nativeElement.textContent).toContain('Juan Esteban Tobón Díaz');
  });

  it('should open every link in a new tab', () => {
    const links = fixture.nativeElement.querySelectorAll('a.link-card') as NodeListOf<HTMLAnchorElement>;
    expect(links.length).toBe(fixture.componentInstance.links.length);
    links.forEach((link) => expect(link.target).toBe('_blank'));
  });
});