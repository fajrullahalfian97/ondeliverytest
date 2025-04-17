import { Component, Input, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() user: any;

  get role() {
    return this.user?.role;
  }

  private router: Router = inject(Router);

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  showRoomsMenu() {
    return ['super_admin', 'admin_hr', 'kepala_department'].includes(this.role);
  }
  roomExpanded = false;
  sidebarOpen = false; // <--- NEW

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
