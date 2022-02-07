import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  items :any;

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    warning: false
  });

  constructor(
    private router: Router,
    private usersService: UsersService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    console.log(this.items);

    this.usersService.getItems()
    .subscribe(
      data => {
        this.items = data;
        console.log(this.items);
      },
      error => {
        console.log('Error', error);
      }
    );
  }

}
