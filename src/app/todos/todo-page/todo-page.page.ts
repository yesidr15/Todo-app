import { Component } from '@angular/core';

import { CategoriaAddComponent } from 'src/app/categoria/categoria-add/categoria-add.component';
import { TodoCardsComponent } from '../todo-cards/todo-cards.component';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.page.html',
  standalone: true,
  imports: [CategoriaAddComponent, TodoCardsComponent],
})
export class TodoPagePage {
}
