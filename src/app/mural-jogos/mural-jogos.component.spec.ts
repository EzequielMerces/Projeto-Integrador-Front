import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralJogosComponent } from './mural-jogos.component';

describe('MuralJogosComponent', () => {
  let component: MuralJogosComponent;
  let fixture: ComponentFixture<MuralJogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuralJogosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
