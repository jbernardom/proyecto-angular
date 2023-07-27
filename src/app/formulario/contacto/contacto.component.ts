import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{

  nombre = new FormControl('');
  apellido = new FormControl('');
  telefono = new FormControl('');
  email = new FormControl('');

  constructor() {}

  ngOnInit(): void {

  }

}
