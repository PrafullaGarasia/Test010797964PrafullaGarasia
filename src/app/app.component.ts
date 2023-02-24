import { Component } from '@angular/core';
import { Box } from './box';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  size: number;
  description: string;
  shippingLabelCode: string;
  recipient: string;
  weight: number;
  shippingCompany: string;
  boxes: Box[] = [];

  ngOnInit() {
    // Initialize the list with a default box
    this.boxes.push({
      size: 5,
      description: 'Sample box containing some items',
      shippingLabelCode: 'ABC123',
      recipient: 'Your Name',
      weight: 500,
      shippingCompany: ''
    });
  }

  addBox() {
    // Create a new box object with the input values and push it to the list
    const newBox: Box = {
      size: this.size,
      description: this.description,
      shippingLabelCode: this.shippingLabelCode.toUpperCase(),
      recipient: this.recipient ? this.recipient : 'Your Name',
      weight: this.weight,
      shippingCompany: this.shippingCompany
    };
    this.boxes.push(newBox);
  }
}
