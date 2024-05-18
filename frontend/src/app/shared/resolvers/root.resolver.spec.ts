import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { rootResolver } from './root.resolver';

describe('rootResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => rootResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
