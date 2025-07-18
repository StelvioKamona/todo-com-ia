import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonList,
  IonIcon,
  IonButtons,
  IonBackButton,
  IonInput, IonText } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonText, 
    CommonModule,
    FormsModule,
    IonInput,
    IonBackButton,
    IonButtons,
    IonIcon,
    IonList,
    IonItem,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    RouterModule
  ],
})
export class LoginPage {
  email = '';
  senha = '';
  mensagemErro = ''; // 👈 Aqui guardamos o erro

  constructor(private router: Router, private auth: Auth) {}

  async login() {
    if (!this.email.trim() || !this.senha.trim()) {
      this.mensagemErro = 'Preencha todos os campos!';
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        this.email,
        this.senha
      );
      this.router.navigateByUrl('/home');
    } catch (error: any) {
      this.mensagemErro = this.traduzirErro(error.code);
    }

    // Opcional: esconder após 5 segundos
    setTimeout(() => {
      this.mensagemErro = '';
    }, 5000);
  }

  traduzirErro(codigo: string): string {
    switch (codigo) {
      case 'auth/user-not-found':
        return 'Usuário não encontrado.';
      case 'auth/wrong-password':
        return 'Senha incorreta.';
      case 'auth/invalid-email':
        return 'Email inválido.';
      default:
        return 'Erro ao fazer login. Verifique os dados.';
    }
  }
}
