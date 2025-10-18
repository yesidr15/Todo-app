import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonContent,
  IonLabel,
  IonList,
  IonItem,
  IonCheckbox,
  IonBreadcrumb,
  IonIcon,
  IonFab,
  IonFabButton,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';
import { Categoria } from '../models/categoria.model';
import { Todo } from '../models/todo.model';
import { TodoAddComponent } from '../todo-add/todo-add.component';

@Component({
  selector: 'app-todo-list',
  imports: [
    CommonModule,
    FormsModule,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonLabel,
    IonList,
    IonItem,
    IonCheckbox,
    IonBreadcrumb,
    IonIcon,
    IonFab,
    IonFabButton,
    TodoAddComponent,
  ],
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {
  isModalOpenAdd = false;

  todos: Todo[] = [];
  categoriaSelect!: string;
  @Input() idCategoriaActual!: number;
  @Input() categorias!: Categoria[];
  @Input() todosPorCategoria: Todo[] = [];
  @Input() isModalOpen!: boolean;
  @Output() isModalOpenChange = new EventEmitter<boolean>();
  @Output() todosPorCategoriaChange = new EventEmitter<Todo[]>();

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select((state: AppState) => state.categoria)
      .subscribe((categoria) => {
        this.categorias = categoria;
      });
    this.store.subscribe((store) => {
      this.todos = store.todos;
      this.obtenerTodos();
    });
  }
  obtenerTodos() {
    switch (this.idCategoriaActual) {
      case 20:
        this.todosPorCategoria = this.todos.filter((todo) => todo.completado);
        break;

      case 10:
        this.todosPorCategoria = this.todos.filter((todo) => !todo.completado);
        break;

      default:
        this.todosPorCategoria = this.todos.filter(
          (todo) =>
            todo.idCategoria === this.idCategoriaActual && !todo.completado
        );
    }
    if (this.idCategoriaActual !== 0) {
      this.todosPorCategoriaChange.emit(this.todosPorCategoria);
    }
  }

  setOpenAdd(isOpen: boolean, categoria?: Categoria) {
    this.isModalOpenAdd = isOpen;
  }
  close() {
    this.isModalOpenChange.emit(false);
  }
  terminar(item: Todo) {
    this.store.dispatch(actions.toggle({ id: item.id }));
  }

  eliminarTodo(idTodo: number) {
    this.store.dispatch(actions.borrar({ id: idTodo }));
    this.obtenerTodos();
  }
}
