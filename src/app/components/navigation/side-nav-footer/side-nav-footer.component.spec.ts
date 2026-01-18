import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavFooterComponent } from './side-nav-footer.component';

describe('SideNavFooterComponent', () => {
  let component: SideNavFooterComponent;
  let fixture: ComponentFixture<SideNavFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
