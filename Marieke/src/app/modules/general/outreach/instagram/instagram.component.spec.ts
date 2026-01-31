import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InstagramDOMService } from '../../../../instagram-dom.service';

import { InstagramComponent } from './instagram.component';

describe('InstagramComponent', () => {
  let component: InstagramComponent;
  let fixture: ComponentFixture<InstagramComponent>;

  beforeEach(async () => {
    (window as any).twttr = {
      widgets: {
        load: jasmine.createSpy('load')
      }
    };
    await TestBed.configureTestingModule({
      imports: [ NoopAnimationsModule ],
      declarations: [ InstagramComponent ],
      providers: [
        { provide: InstagramDOMService, useValue: { processEmbeddedInstagramPosts: () => {} } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
