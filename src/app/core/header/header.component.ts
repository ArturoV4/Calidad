import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../authentication/components/login/login.component';
import { RegistroComponent } from '../authentication/components/registro/registro.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  active = false;
  rol: number = 0;

  activeMenu = false;

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  openLogin(): void {
    this.dialog.open(LoginComponent, {disableClose: false, width: '500px'});
  }

  openRegistro(): void {
    this.dialog.open(RegistroComponent, {disableClose: false, width: '700px'});
  }

}
