import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatIconModule,RouterModule],
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent {
  displayedColumns: string[] = ['room', 'employees', 'description'];
  rooms = [
    { id: 1, name: 'Meeting room 1', employees: 4, description: 'Branding preparation' },
    { id: 2, name: 'Meeting room 2', employees: 3, description: 'Strategic decision' },
    { id: 3, name: 'Interview room 1', employees: 2, description: 'IT Interview on-site' },
    { id: 4, name: 'Interview room 2', employees: 1, description: 'IT Interview online' },
    { id: 5, name: 'Interview room 3', employees: 0, description: '' }
  ];
}
