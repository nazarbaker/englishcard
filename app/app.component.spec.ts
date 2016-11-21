/* tslint:disable:no-unused-variable */

import { AppComponent } from './app.component';

describe('App Component', () => {
  beforeEach(() => {
    this.app = new AppComponent();
  })

  it('should Be Truthy', () => {
    expect(this.app).toBeTruthy();
  });

  it('should Be Truthy', () => {
    expect(this.app.name).toBe('Flashcards');
  });
});
