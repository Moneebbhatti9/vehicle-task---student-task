import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css'],
})
export class StudentformComponent {
  studentForm: FormGroup;
  submittedData: any[] = [];

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      class: ['', Validators.required],
      address: [''],
      phoneNo: [''],
      parentsEmail: ['', [Validators.required, Validators.email]],
      description: [''],
      password: [''],
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      const formData = { ...this.studentForm.value };
      this.submittedData.push(formData);
      this.studentForm.reset();
      console.log('Submitted Data:', this.submittedData);
    }
  }
}
