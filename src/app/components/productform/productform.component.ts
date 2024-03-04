// product-form.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css'],
})
export class ProductformComponent implements OnInit {
  product: any;
  productForm!: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      title: [''],
      description: [''],
      category: [''],
      rating: [''],
      stock: [''],
    });
    this.fetchProductData();
  }

  fetchProductData() {
    this.http.get('https://dummyjson.com/products/1').subscribe((data: any) => {
      this.product = data;
      this.productForm.patchValue(data);
    });
  }
}
