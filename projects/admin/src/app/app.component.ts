import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { AuthRoutes } from './modules/auth/auth.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'admin';
}
