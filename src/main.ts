import { enableProdMode } from '@angular/core';

import { provideRouter } from '@angular/router';
import routerConfig from "./app/routes";
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routerConfig)
  ]
}).catch(err => console.error(err));
