import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpService } from '../../http.service';
import { IEmployee } from '../../interfaces/employee';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
})
export class EmployeeFormComponent {
  formBuilder = inject(FormBuilder);
  httpService = inject(HttpService);
  router = inject(Router);
  employeeForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    age: [, [Validators.required]],
    phone: ['', []],
    salary: [, [Validators.required]],
  });

save() {
   console.log(this.employeeForm.value);
   const employee: IEmployee = {
   name: this.employeeForm.value.name!,
   age: this.employeeForm.value.age!,
   email: this.employeeForm.value.email!,
   phone: this.employeeForm.value.phone!,
   salary: this.employeeForm.value.salary!,
  };
  this.httpService.createEmployee(employee).subscribe(() => {
    console.log("success");
    this.router.navigateByUrl("/employee-list");
  });
}}