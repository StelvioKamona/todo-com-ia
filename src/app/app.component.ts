import { Component } from '@angular/core';
import {
  IonApp,
  IonMenu,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonRouterOutlet,
  IonContent,
  IonList,
  IonIcon,
  IonLabel,
  IonItem,
  MenuController,
} from '@ionic/angular/standalone';
import { RouterModule, Router } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonMenu,
    IonToolbar,
    IonRouterOutlet,
    IonTitle,
    IonHeader,
    IonContent,
    IonList,
    IonIcon,
    IonLabel,
    IonItem,
    RouterModule,
  ],
})
export class AppComponent {
  constructor(
    private menu: MenuController,
    private auth: Auth,
    private router: Router
  ) {}

  fecharMenu() {
    this.menu.close();
  }

  logout() {
    signOut(this.auth).then(() => {
      this.router.navigateByUrl('/intro');
      this.fecharMenu();
    });
  }

  irParaRegistro() {
    this.router.navigateByUrl('/stats');
    this.fecharMenu();
  }
}
