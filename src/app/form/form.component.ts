import { Component } from '@angular/core';
import {mobiRoutes} from "../app.routes";
import {RouterLink} from "@angular/router";
import {navigationRoutes} from "../navigationRoutes";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  hasUnsavedChanges = false;
  protected readonly navigationRoutes = navigationRoutes;
}
