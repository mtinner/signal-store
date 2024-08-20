import {Component, inject, output} from '@angular/core';
import {BooksStore} from "../../store/books.store";

@Component({
  selector: 'app-store-tutorial',
  standalone: true,
  imports: [],
  templateUrl: './store-tutorial.component.html',
  styleUrl: './store-tutorial.component.css',
})
export class StoreTutorialComponent {
  readonly store= inject(BooksStore);
  onClick = output<MouseEvent>()

}
