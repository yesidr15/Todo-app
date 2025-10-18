import { createReducer, on } from '@ngrx/store';
import {
  borrar,
  crear,
  editar,
  toggle,
  toggleAll,
  limpiarCompletados,
  borrarPorCategoria,
} from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
];

const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto, idCategoria }) => [...state, new Todo(texto, idCategoria)]),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto,
        };
      } else {
        return todo;
      }
    });
  }),
  on(borrar, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(borrarPorCategoria, (state, { idCategoria }) => state.filter((todo) => todo.idCategoria !== idCategoria)),
  on(toggleAll, (state, { completado }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completado,
      };
    });
  }),
  on(limpiarCompletados, (state) => state.filter((todo) => !todo.completado))
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
