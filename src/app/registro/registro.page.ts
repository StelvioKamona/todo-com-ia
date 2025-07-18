import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import {
  IonInput,
  IonButton,
  IonList,
  IonItem,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  imports: [
    FormsModule,
    IonInput,
    IonButton,
    IonList,
    IonItem,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
  ],
})
export class RegistroPage {
  email = '';
  senha = '';

  constructor(private auth: Auth, private router: Router) {}

  async registrar() {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        this.email,
        this.senha
      );
      console.log('Usuário registrado:', userCredential.user);
      this.router.navigateByUrl('/home');
    } catch (error: any) {
      alert('Erro ao criar conta: ' + error.message);
    }
  }
}
