import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyBtas-m3dW3Pi99Md0I8GNY2U4UbFLMucM',
        authDomain: 'todo-app-69125.firebaseapp.com',
        projectId: 'todo-app-69125',
        storageBucket: 'todo-app-69125.firebasestorage.app',
        messagingSenderId: '607554179133',
        appId: '1:607554179133:web:4a02d4bacd4c6f6687da54',
        measurementId: 'G-2FHE441V04',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
});
