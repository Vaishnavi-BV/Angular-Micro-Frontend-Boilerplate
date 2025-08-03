import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <h1>Welcome to Micro Frontend App</h1>
      <p>This is the shell application that hosts multiple micro frontends.</p>
      <div class="features">
        <div class="feature-card">
          <h3>🏠 Home</h3>
          <p>Main landing page with navigation</p>
        </div>
        <div class="feature-card">
          <h3>👤 Profile</h3>
          <p>User profile management micro frontend</p>
        </div>
        <div class="feature-card">
          <h3>🛒 Cart</h3>
          <p>Shopping cart micro frontend</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    h1 {
      color: #333;
      text-align: center;
      margin-bottom: 1rem;
    }
    
    p {
      text-align: center;
      color: #666;
      font-size: 1.1rem;
      margin-bottom: 3rem;
    }
    
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .feature-card {
      background: #f8f9fa;
      padding: 2rem;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .feature-card h3 {
      color: #007bff;
      margin-bottom: 1rem;
    }
    
    .feature-card p {
      color: #666;
      margin: 0;
    }
  `]
})
export class HomeComponent { }
