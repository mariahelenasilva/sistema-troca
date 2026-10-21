import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Anunciar } from './anunciar';

describe('Anunciar', () => {
  let component: Anunciar;
  let fixture: ComponentFixture<Anunciar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anunciar],
    }).compileComponents();

    fixture = TestBed.createComponent(Anunciar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
