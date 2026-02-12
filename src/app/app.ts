import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { CustomerForm } from "./page/customer-form/customer-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CustomerForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('customer-management-frontend');
}
