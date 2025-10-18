import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonItemSliding,
  IonItem,
  IonLabel,
  IonItemOptions,
  IonItemOption,
  IonIcon,
} from '@ionic/angular/standalone';
import { Categoria } from '../models/categoria.model';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { addIcons } from 'ionicons';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../categoria/categoria.actions';
import * as actionsTodo from '../todo.actions';
import { trash, add, trashOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TruncatePipe } from 'src/pipe/truncate.pipe';

@Component({
  selector: 'app-todo-cards',
  imports: [
    IonCard,
    CommonModule,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonItemSliding,
    IonItem,
    IonLabel,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    TodoListComponent,
    TruncatePipe
  ],
  templateUrl: './todo-cards.component.html',
})
export class TodoCardsComponent implements OnInit {
  isModalOpen = false;
  isModalOpenAdd = false;
  idCategoriaActual!: number;
  categoriaSelect!: string;
  todosPorCategoria: Todo[] = [];
  categorias: Categoria[] = [];
  todos: Todo[] = [];

  constructor(
    private readonly store: Store<AppState>,
    private readonly cdr: ChangeDetectorRef
  ) {
    addIcons({ trash, add, trashOutline });
  }
  ngOnInit(): void {
    this.store.select((state) => state.categoria).subscribe((categoria) => {
      this.categorias = categoria;
    });
    this.store.subscribe((store) => {
      this.todos = store.todos;
    });
  }

  setOpen(isOpen: boolean, categoria?: Categoria) {
    this.isModalOpen = isOpen;
    this.cdr.detectChanges();
    this.isModalOpenAdd = false;
    this.idCategoriaActual = categoria?.id || 0;
    this.categoriaSelect = categoria?.texto || '';
    this.obtenerTodos();
  }

  eliminarCategoria(item: Categoria) {
    this.store.dispatch(actions.borrar({ id: item.id }));
    this.store.dispatch(
      actionsTodo.borrarPorCategoria({ idCategoria: item.id })
    );
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
  }

  contarTodos(item: Categoria): number {
    switch (item.id) {
      case 20:
        return this.todos.filter((todo) => todo.completado).length;

      case 10:
        return this.todos.filter((todo) => !todo.completado).length;

      default:
        return this.todos.filter(
          (todo) => todo.idCategoria === item.id && !todo.completado
        ).length;
    }
  }
}
