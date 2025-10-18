import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppState } from '@capacitor/app';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonModal,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonFabButton,
  IonFab,
} from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core/components';
import { Store } from '@ngrx/store';
import { addIcons } from 'ionicons';
import { crearCategoria } from 'src/app/categoria/categoria.actions';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-categoria-add',
  imports: [
    FormsModule,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonModal,
    IonTitle,
    IonToolbar,
    IonIcon,
    CommonModule,
    IonFabButton,
    IonFab,
  ],
  templateUrl: './categoria-add.component.html',
})
export class CategoriaAddComponent {
  @ViewChild(IonModal) modal!: IonModal;
  colorSelect: string = 'primary';
  colores: string[] = [
    'primary',
    'secondary',
    'tertiary',
    'success',
    'warning',
    'danger',
    'light',
    'medium',
    'dark',
  ];
  message =
    'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;
  constructor(private readonly store: Store<AppState>) {
    addIcons({ add });
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.reset();
  }

  confirm() {
    if (!this.name) {
      return;
    }
    this.store.dispatch(
      crearCategoria({ texto: this.name, color: this.colorSelect })
    );
    this.reset();
    this.modal.dismiss(this.name, 'confirm');
  }

  confirmColor(button: any) {
    this.colorSelect = button;
  }

  reset() {
    this.name = '';
    this.colorSelect = 'primary';
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      this.message = `Hello, ${event.detail.data}!`;
    }
  }
}
