import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProfesionalesComponent } from './lista-profesionales.component';

describe('ListaProfesionalesComponent', () => {
  let component: ListaProfesionalesComponent;
  let fixture: ComponentFixture<ListaProfesionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProfesionalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProfesionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
