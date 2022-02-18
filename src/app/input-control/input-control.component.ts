import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.css'],
})
export class InputControlComponent implements OnInit {
  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {}
}
