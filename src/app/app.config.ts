import { ApplicationConfig } from '@angular/core';
import { provideRouter, Route, RouterLink, InMemoryScrollingFeature, InMemoryScrollingOptions, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  

  
  
  providers: [provideRouter(routes), provideHttpClient()]
};
