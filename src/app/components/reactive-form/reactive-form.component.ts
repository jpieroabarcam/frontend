import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  userForm: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      documento: ['', Validators.required],
      fechaVisita: ['', [Validators.required, Validators.email]],
      horaVisita: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      usuario: ['', [Validators.required, Validators.min(20), Validators.max(50)]]      
    });
  }

  submitForm(): void {
    if (this.userForm?.valid) {
      console.log('Form data:', this.userForm.value);
    }
  }
}
