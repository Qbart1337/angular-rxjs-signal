import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app-routes';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      APP_ROUTES,
      // withPreloading(PreloadAllModules)
    ),

  ],
});