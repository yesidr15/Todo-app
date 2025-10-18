import { ActionReducerMap } from '@ngrx/store';

import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { Categoria } from './todos/models/categoria.model';
import { categoriaReducer } from './categoria/categoria.reducer';

export interface AppState {
  todos: Todo[];
  categoria: Categoria[];
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  categoria: categoriaReducer,
};
