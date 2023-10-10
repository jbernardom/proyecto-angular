import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactoService } from '..//../contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  formContac!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactoService: ContactoService
  ) {}

  ngOnInit(): void {
    this.formContac = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: [''],
      telefono: ['', [Validators.pattern('^[0-9]+$')]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"
          ),
        ],
      ],
    });
  }

  enviarContacto() {
    if (this.formContac.valid) {
      this.contactoService.guardarContacto(this.formContac.value).subscribe(
        (response) => {
          console.log('Contacto guardado con éxito:', response);
        },
        (error) => {
          console.error('Error al guardar el contacto:', error);
        }
      );
    } else {
      console.log('Formulario no válido. Revisa los campos.');
    }
  }
}
