import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../_services/auth-guard.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(public auth: AuthGuardService) {}

  ngOnInit(): void {}
  
  onLogout(): void {}
}
