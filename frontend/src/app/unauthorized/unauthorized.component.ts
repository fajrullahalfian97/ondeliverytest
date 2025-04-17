import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `<h2>Akses ditolak</h2><p>Kamu tidak punya izin untuk halaman ini.</p>`,
  imports: [CommonModule]
})
export class UnauthorizedComponent {}
