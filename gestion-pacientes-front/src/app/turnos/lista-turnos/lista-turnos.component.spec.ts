import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTurnosComponent } from './lista-turnos.component';

describe('ListaTurnosComponent', () => {
  let component: ListaTurnosComponent;
  let fixture: ComponentFixture<ListaTurnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTurnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
