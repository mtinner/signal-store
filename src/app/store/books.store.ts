import {patchState, signalStore, type, withComputed, withHooks, withMethods, withState} from '@ngrx/signals';
import {computed} from "@angular/core";
import {addEntity, entityConfig, removeEntity, SelectEntityId, setEntities, withEntities} from "@ngrx/signals/entities";

type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
  link: string;
};

const randomBooks: Book[] = [
  {
    id: 1,
    "title": "The Silent Echo",
    "author": "John Smith",
    "year": 2015,
    "link": "https://www.example.com/TheSilentEcho"
  },
  {
    id: 2,
    "title": "Whispers in the Wind",
    "author": "Emily Johnson",
    "year": 2018,
    "link": "https://www.example.com/WhispersInTheWind"
  },
  {
    id: 3,
    "title": "Journey to the Unknown",
    "author": "Michael Brown",
    "year": 2021,
    "link": "https://www.example.com/JourneyToTheUnknown"
  },
  {
    id: 4,
    "title": "Shadows of the Past",
    "author": "Samantha Davis",
    "year": 2017,
    "link": "https://www.example.com/ShadowsOfThePast"
  },
  {
    id: 5,
    "title": "The Last Horizon",
    "author": "David Wilson",
    "year": 2019,
    "link": "https://www.example.com/TheLastHorizon"
  }
]


type Order = 'asc' | 'desc';

type BooksState = {
  //books: Book[];
  isLoading: boolean;
  filter: { query: string; order: Order };
};

const initialState = {
  bookEntities: randomBooks,
  isLoading: false,
  filter: {query: '', order: 'asc'},
};

const selectId: SelectEntityId<Book> = (book) => book.title;


const bookConfig = entityConfig({
  entity: type<Book>(),
  collection: 'books',
  selectId,
});
// https://youtrack.jetbrains.com/issue/WEB-63518/Angular-16-signals-from-signalStore-are-not-resolved#focus=Comments-27-9748920.0-0
export const BooksStore = signalStore(
  {providedIn: 'root'},
  withEntities(bookConfig),
  withState(initialState),
  withState({bookEntities: randomBooks}),
  withComputed((store) => ({
    booksCount: computed(() => store.booksEntities().length),
    sortedBooks: computed(() => {
      const direction = store.filter.order() === 'asc' ? 1 : -1;

      return store.booksEntities().sort((a, b) =>
        direction * a.title.localeCompare(b.title)
      );
    }),
  })),
  withMethods((store) => ({
    removeBook(title = 'Shadows of the Past') {
      patchState(store, removeEntity(title, bookConfig));
    },
    addBookEntity() {
      const book: Book = {title: Math.random().toString(), author: 'dd', year: 13, link: 'asdf', id: Math.random()};
      patchState(store, addEntity(book, bookConfig));
    },
    updateOrder(order: 'asc' | 'desc'): void {
      patchState(store, (state) => ({filter: {...state.filter, order}}));
    },
    init() {
      patchState(store, setEntities(randomBooks, bookConfig));
    },
    toggleOrder() {
      patchState(store, (state) => {
        const newOrder: Order = state.filter.order === 'asc' ? 'desc' : 'asc';

        return {
          filter: {
            ...state.filter,
            order: newOrder,
          }
        }
      });
    },
  })),
  withHooks({
    onInit(store) {
     // store.init()
    }
  })
);
