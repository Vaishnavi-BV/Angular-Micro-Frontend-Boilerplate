import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
    @Output() toggleSidebar = new EventEmitter<void>();

    username = 'Abdul Rahman Mohammed';
    role = 'IT Admin';
}
