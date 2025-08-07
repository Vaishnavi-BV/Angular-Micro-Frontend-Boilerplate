import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, NgIf, NgFor],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent {
  @Input() collapsed = false;

  menuItems = [
    { icon: './images/Dashboard Icon.svg', label: 'Dashboard', path: '/profile' },
    { icon: './images/Providers Icon.svg', label: 'Project', path: '/cart' },
  ];
}
