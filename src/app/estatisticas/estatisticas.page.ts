import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonSpinner,
} from '@ionic/angular/standalone';

import {
  Firestore,
  collection,
  query,
  orderBy,
  collectionData,
  DocumentData,
} from '@angular/fire/firestore';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-estatisticas',
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonSpinner,
  ],
  templateUrl: './estatisticas.page.html',
  styleUrls: ['./estatisticas.page.scss'],
})
export class EstatisticasPage implements OnInit {
  totalTarefas = 0;
  tarefasFinalizadas = 0;
  carregando = true;

  constructor() {}

  firestore = inject(Firestore);
  auth = inject(Auth);

  private tarefasSub: Subscription | null = null;

  ngOnInit(): void {
    onAuthStateChanged(this.auth, (user) => {
      if (!user) return;

      const tarefasRef = collection(
        this.firestore,
        `usuarios/${user.uid}/tarefas`
      );
      const q = query(tarefasRef, orderBy('criadaEm', 'desc'));

      // Usar observable reativo
      this.tarefasSub = collectionData(q).subscribe(
        (tarefas: DocumentData[]) => {
          this.totalTarefas = tarefas.length;
          this.tarefasFinalizadas = tarefas.filter(
            (t) => t['concluida']
          ).length;
          this.carregando = false;
        }
      );
    });
  }

  ngOnDestroy() {
    if (this.tarefasSub) this.tarefasSub.unsubscribe();
  }

  get eficiencia(): number {
    return this.totalTarefas === 0
      ? 0
      : Math.round((this.tarefasFinalizadas / this.totalTarefas) * 100);
  }

  get sugestaoIA(): string {
    if (this.eficiencia >= 80) {
      return '🚀 Excelente produtividade! Continue assim.';
    } else if (this.eficiencia >= 50) {
      return '👍 Bom trabalho, mas dá para melhorar!';
    } else {
      return '🧠 Tente dividir suas tarefas em blocos menores para facilitar a execução.';
    }
  }
}
