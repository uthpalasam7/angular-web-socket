import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any[] = [];
  socket: any;
  currentUser: any;

  constructor(private userService: UserService, private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.socket = socketIo.connect('http://localhost:3000', { query: { userId: this.currentUser.id } });
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  logout() {
    this.socket.emit('logout'); 
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
