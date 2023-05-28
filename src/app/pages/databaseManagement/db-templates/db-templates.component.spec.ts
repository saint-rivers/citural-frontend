import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbTemplatesComponent } from './db-templates.component';

describe('DbTemplatesComponent', () => {
  let component: DbTemplatesComponent;
  let fixture: ComponentFixture<DbTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbTemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
