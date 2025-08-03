import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cart-container">
      <h2>Shopping Cart</h2>
      
      <div class="cart-content">
        <div class="cart-items" *ngIf="cartItems().length > 0; else emptyCart">
          <div class="cart-item" *ngFor="let item of cartItems()">
            <div class="item-image">
              <span>{{ item.name.charAt(0) }}</span>
            </div>
            <div class="item-details">
              <h4>{{ item.name }}</h4>
              <p class="price">\${{ item.price.toFixed(2) }}</p>
            </div>
            <div class="item-quantity">
              <button class="qty-btn" (click)="updateQuantity(item.id, item.quantity - 1)">-</button>
              <span class="quantity">{{ item.quantity }}</span>
              <button class="qty-btn" (click)="updateQuantity(item.id, item.quantity + 1)">+</button>
            </div>
            <div class="item-total">
              <span>\${{ (item.price * item.quantity).toFixed(2) }}</span>
            </div>
            <button class="remove-btn" (click)="removeItem(item.id)">Remove</button>
          </div>
        </div>
        
        <ng-template #emptyCart>
          <div class="empty-cart">
            <h3>Your cart is empty</h3>
            <p>Add some items to get started!</p>
            <button class="btn btn-primary" (click)="addSampleItems()">Add Sample Items</button>
          </div>
        </ng-template>
        
        <div class="cart-summary" *ngIf="cartItems().length > 0">
          <div class="summary-row">
            <span>Subtotal:</span>
            <span>\${{ getSubtotal().toFixed(2) }}</span>
          </div>
          <div class="summary-row">
            <span>Tax:</span>
            <span>\${{ getTax().toFixed(2) }}</span>
          </div>
          <div class="summary-row total">
            <span>Total:</span>
            <span>\${{ getTotal().toFixed(2) }}</span>
          </div>
          <button class="btn btn-primary checkout-btn" (click)="checkout()">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .cart-container {
      padding: 2rem;
      max-width: 1000px;
      margin: 0 auto;
    }
    
    h2 {
      color: #333;
      margin-bottom: 2rem;
    }
    
    .cart-content {
      background: white;
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .cart-item {
      display: grid;
      grid-template-columns: 60px 1fr 120px 80px 80px;
      gap: 1rem;
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid #eee;
    }
    
    .cart-item:last-child {
      border-bottom: none;
    }
    
    .item-image {
      width: 50px;
      height: 50px;
      background: #007bff;
      color: white;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
    
    .item-details h4 {
      margin: 0 0 0.5rem 0;
      color: #333;
    }
    
    .price {
      margin: 0;
      color: #666;
      font-weight: 600;
    }
    
    .item-quantity {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .qty-btn {
      width: 30px;
      height: 30px;
      border: 1px solid #ddd;
      background: white;
      cursor: pointer;
      border-radius: 4px;
    }
    
    .qty-btn:hover {
      background: #f8f9fa;
    }
    
    .quantity {
      font-weight: 600;
      min-width: 30px;
      text-align: center;
    }
    
    .item-total {
      font-weight: 600;
      color: #333;
    }
    
    .remove-btn {
      background: #dc3545;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .remove-btn:hover {
      background: #c82333;
    }
    
    .empty-cart {
      text-align: center;
      padding: 3rem;
    }
    
    .empty-cart h3 {
      color: #666;
      margin-bottom: 1rem;
    }
    
    .empty-cart p {
      color: #999;
      margin-bottom: 2rem;
    }
    
    .cart-summary {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 2px solid #eee;
    }
    
    .summary-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }
    
    .summary-row.total {
      font-weight: bold;
      font-size: 1.3rem;
      color: #333;
      padding-top: 0.5rem;
      border-top: 1px solid #eee;
    }
    
    .btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.3s;
    }
    
    .btn-primary {
      background: #007bff;
      color: white;
    }
    
    .btn-primary:hover {
      background: #0056b3;
    }
    
    .checkout-btn {
      width: 100%;
      margin-top: 1rem;
      font-size: 1.1rem;
      padding: 1rem;
    }
    
    @media (max-width: 768px) {
      .cart-item {
        grid-template-columns: 1fr;
        gap: 0.5rem;
        text-align: center;
      }
      
      .item-quantity {
        justify-content: center;
      }
    }
  `]
})
export class CartComponent {
  cartItems = signal<CartItem[]>([]);
  
  addSampleItems() {
    this.cartItems.set([
      { id: 1, name: 'Laptop Computer', price: 999.99, quantity: 1, image: '' },
      { id: 2, name: 'Wireless Mouse', price: 29.99, quantity: 2, image: '' },
      { id: 3, name: 'Keyboard', price: 79.99, quantity: 1, image: '' }
    ]);
  }
  
  updateQuantity(id: number, newQuantity: number) {
    if (newQuantity <= 0) {
      this.removeItem(id);
      return;
    }
    
    this.cartItems.update(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  }
  
  removeItem(id: number) {
    this.cartItems.update(items => items.filter(item => item.id !== id));
  }
  
  getSubtotal(): number {
    return this.cartItems().reduce((total, item) => total + (item.price * item.quantity), 0);
  }
  
  getTax(): number {
    return this.getSubtotal() * 0.08; // 8% tax
  }
  
  getTotal(): number {
    return this.getSubtotal() + this.getTax();
  }
  
  checkout() {
    alert(`Checkout completed! Total: $${this.getTotal().toFixed(2)}`);
    this.cartItems.set([]);
  }
}
