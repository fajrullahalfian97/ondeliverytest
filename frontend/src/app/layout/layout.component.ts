import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, MatIconModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

 user: any = null;
  router = inject(Router);

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  isMobileView = false;

ngOnInit() {
  const userJson = localStorage.getItem('user');
    if (!userJson) {
      this.router.navigate(['/login']);
      return;
    }

  this.user = JSON.parse(userJson);
  this.checkViewport();
  window.addEventListener('resize', this.checkViewport.bind(this));
}

checkViewport() {
  this.isMobileView = window.innerWidth <= 768;
}

}

