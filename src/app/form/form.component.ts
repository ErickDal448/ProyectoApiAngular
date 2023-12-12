import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: `form.component.html`,
  styleUrl: './form.component.css'
})
export class FormComponent {
  applyForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private apiService : ApiService) { }

  submitApplication(event: Event) {
    event.preventDefault();
    if (this.applyForm.valid) {
      this.apiService.submitApplication(
        this.applyForm.value.firstName || '',
        this.applyForm.value.lastName || '',
        this.applyForm.value.email || ''
      );
    }
  }
}
