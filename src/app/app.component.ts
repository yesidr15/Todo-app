import { Component } from '@angular/core';
import { TodoPagePage } from "./todos/todo-page/todo-page.page";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [TodoPagePage],
})
export class AppComponent {
  constructor() {}
}
