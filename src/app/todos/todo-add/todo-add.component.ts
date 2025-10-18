import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonModal,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';
@Component({
  selector: 'app-todo-add',
  imports: [
    IonContent,
    IonModal,
    IonInput,
    IonButton,
    FormsModule
],
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent {
  name!: string;

  todos: Todo[] = [];
  todosPorCategoria: Todo[] = [];
  categoriaSelect!: string;
  @Input() isModalOpenAdd!: boolean;
  @Input() idCategoriaActual!: number;
  @Output() isModalOpenAddChange = new EventEmitter<boolean>();

  constructor(private readonly store: Store<AppState>) {}

  crearTodo() {
    if (!this.name) {
      return;
    }
    this.store.dispatch(
      actions.crear({ texto: this.name, idCategoria: this.idCategoriaActual })
    );
    this.close();
  }

  close() {
    this.name = '';
    this.isModalOpenAddChange.emit(false);
  }
}
