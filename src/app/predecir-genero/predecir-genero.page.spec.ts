import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PredecirGeneroPage } from './predecir-genero.page';

describe('PredecirGeneroPage', () => {
  let component: PredecirGeneroPage;
  let fixture: ComponentFixture<PredecirGeneroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PredecirGeneroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
