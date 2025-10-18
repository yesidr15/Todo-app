import { createReducer, on } from '@ngrx/store';
import { Categoria } from '../todos/models/categoria.model';
import { borrar, crearCategoria, editar, toggle, toggleAll } from './categoria.actions';

export const estadoInicial: Categoria[] = [
  new Categoria ('TODO 📋', 'primary', 10),
  new Categoria ('Completados', 'dark', 20),
  new Categoria ('General', 'secundary'),
];

const _categoriaReducer = createReducer(
  estadoInicial,
  on(crearCategoria, (state, { texto, color }) => [...state, new Categoria(texto, color)]),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          icono: 'icono-nuevo',
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
  on(toggleAll, (state, { completado }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completado,
      };
    });
  }),
);
export function categoriaReducer(state: any, action: any) {
  return _categoriaReducer(state, action);
}
