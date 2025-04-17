import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  totalRooms = 5;
  roomsUsed = 3;
  roomsVacant = 2;

  displayedColumns: string[] = ['room', 'employees', 'description'];
  dataSource = [
    { room: 'Meeting room 1', employees: 4, description: 'Branding preparation' },
    { room: 'Meeting room 2', employees: 3, description: 'Strategic decision' },
    { room: 'Interview room 1', employees: 2, description: 'IT Interview on-site' },
    { room: 'Interview room 2', employees: 1, description: 'IT Interview online' },
    { room: 'Interview room 3', employees: 0, description: '' }
  ];
  
}
