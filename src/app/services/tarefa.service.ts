import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  CollectionReference,
  Timestamp,
} from '@angular/fire/firestore';
import { Auth, authState } from '@angular/fire/auth';
import { Observable, switchMap, of } from 'rxjs';

export interface Tarefa {
  id?: string;
  titulo: string;
  concluida: boolean;
  criadaEm: Timestamp;
}

@Injectable({ providedIn: 'root' })
export class TarefaService {
  constructor(private firestore: Firestore, private auth: Auth) {}

  private getUsuarioTarefasPath(userId: string): CollectionReference {
    return collection(this.firestore, `usuarios/${userId}/tarefas`);
  }

  async adicionarTarefa(titulo: string) {
    const user = this.auth.currentUser;
    if (!user) throw new Error('Usuário não autenticado');

    const ref = this.getUsuarioTarefasPath(user.uid);
    await addDoc(ref, {
      titulo,
      concluida: false,
      criadaEm: Timestamp.now(),
    });
  }

  listarTarefas(): Observable<Tarefa[]> {
    return authState(this.auth).pipe(
      switchMap((user) => {
        if (!user) return of([]);
        const ref = this.getUsuarioTarefasPath(user.uid);
        const q = query(ref, orderBy('criadaEm', 'desc'));
        return collectionData(q, { idField: 'id' }) as Observable<Tarefa[]>;
      })
    );
  }

  async concluirTarefa(userId: string, id: string) {
    const tarefaRef = doc(this.firestore, `usuarios/${userId}/tarefas/${id}`);
    await updateDoc(tarefaRef, { concluida: true });
  }

  async removerTarefa(userId: string, id: string) {
    const tarefaRef = doc(this.firestore, `usuarios/${userId}/tarefas/${id}`);
    await deleteDoc(tarefaRef);
  }
}
