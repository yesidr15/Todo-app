import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[Todo] Crear Todo',
  props<{ texto: string; idCategoria: number }>()
);

export const toggle = createAction(
  '[Todo] Toggle Todo',
  props<{ id: number }>()
);

export const editar = createAction(
  '[Todo] Editar Todo',
  props<{ id: number; texto: string }>()
);

export const borrar = createAction(
  '[Todo] Borrar Todo',
  props<{ id: number }>()
);

export const borrarPorCategoria = createAction(
  '[Todo] Borrar Todo Por categoria',
  props<{ idCategoria: number }>()
);
export const agregarTodo = createAction(
  '[Todo] Agregar Todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[Todo] ToggleAll Todo',
  props<{ completado: boolean }>()
);

export const limpiarCompletados = createAction('[Todo] Limpiar Completados');
