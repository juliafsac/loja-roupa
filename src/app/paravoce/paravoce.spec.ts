import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paravoce } from './paravoce';

describe('Paravoce', () => {
  let component: Paravoce;
  let fixture: ComponentFixture<Paravoce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paravoce],
    }).compileComponents();

    fixture = TestBed.createComponent(Paravoce);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
