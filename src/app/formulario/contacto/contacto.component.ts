import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  formContac!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formContac = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: [''],
      telefono: ['', [Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]]
    });
  }

  enviarContacto() {
    if (this.formContac.valid) {
      console.log(this.formContac.value);
    } else {
      console.log('Formulario no válido. Revisa los campos.');
    }
  }
}
