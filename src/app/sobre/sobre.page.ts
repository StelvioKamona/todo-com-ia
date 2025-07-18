import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonIcon,
  IonBackButton,
  IonCardContent,
  IonCardHeader,
  IonCard,
  IonCardTitle,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonBackButton,
    IonCardContent,
    IonCardHeader,
    IonCard,
    IonCard,
    IonCardTitle,
    IonList,
    IonItem,
    IonLabel,
  ],
})
export class SobrePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
