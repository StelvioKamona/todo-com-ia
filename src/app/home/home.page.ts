import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { TarefaService, Tarefa } from '../services/tarefa.service';
import { CommonModule } from '@angular/common'; // ✅ Aqui

// ... outros imports de Ionic
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonButton,
  IonList,
  IonLabel,
  IonButtons,
  IonMenuButton,
  IonCardContent,
  IonBadge,
  IonCardSubtitle,
  IonCardTitle,
  IonCardHeader,
  IonCard,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonBadge,
    IonCardContent,
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonItem,
    IonButton,
    IonButtons,
    IonMenuButton,
    IonList,
    IonLabel,
  ],
})
export class HomePage implements OnInit {
  novaTarefa = '';
  tarefas: Tarefa[] = [];
  detalhesTarefa: Tarefa | null = null;

  constructor(private tarefaService: TarefaService, private auth: Auth) {}

  ngOnInit() {
    this.tarefaService.listarTarefas().subscribe((dados) => {
      this.tarefas = dados;
    });
  }

  adicionarTarefa() {
    const titulo = this.novaTarefa.trim();
    if (!titulo) return;

    this.tarefaService.adicionarTarefa(titulo);
    this.novaTarefa = '';
  }

  concluirTarefa(index: number) {
    const tarefa = this.tarefas[index];
    this.auth.onAuthStateChanged((user) => {
      if (user && tarefa.id) {
        this.tarefaService.concluirTarefa(user.uid, tarefa.id);
      }
    });
  }

  removerTarefa(index: number) {
    const tarefa = this.tarefas[index];
    this.auth.onAuthStateChanged((user) => {
      if (user && tarefa.id) {
        this.tarefaService.removerTarefa(user.uid, tarefa.id);
      }
    });
  }

  exibirDetalhes(tarefa: Tarefa) {
    this.detalhesTarefa = tarefa;
  }

  fecharDetalhes() {
    this.detalhesTarefa = null;
  }

  formatarData(tarefa: Tarefa): string {
    const data = (tarefa.criadaEm as any).toDate?.() || tarefa.criadaEm;
    return new Date(data).toLocaleString();
  }
}
