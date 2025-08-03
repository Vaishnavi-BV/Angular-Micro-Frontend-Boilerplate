import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="profile-container">
      <h2>User Profile</h2>
      
      <div class="profile-card">
        <div class="profile-header">
          <div class="avatar">
            <span>{{ user().firstName.charAt(0) }}{{ user().lastName.charAt(0) }}</span>
          </div>
          <div class="user-info">
            <h3>{{ user().firstName }} {{ user().lastName }}</h3>
            <p class="email">{{ user().email }}</p>
          </div>
        </div>
        
        <form class="profile-form" (ngSubmit)="updateProfile()">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input 
              id="firstName" 
              type="text" 
              [(ngModel)]="editUser.firstName" 
              name="firstName"
              class="form-control">
          </div>
          
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input 
              id="lastName" 
              type="text" 
              [(ngModel)]="editUser.lastName" 
              name="lastName"
              class="form-control">
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              id="email" 
              type="email" 
              [(ngModel)]="editUser.email" 
              name="email"
              class="form-control">
          </div>
          
          <div class="form-group">
            <label for="bio">Bio</label>
            <textarea 
              id="bio" 
              [(ngModel)]="editUser.bio" 
              name="bio"
              class="form-control"
              rows="4"></textarea>
          </div>
          
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Update Profile</button>
            <button type="button" class="btn btn-secondary" (click)="resetForm()">Reset</button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .profile-container {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
    
    h2 {
      color: #333;
      margin-bottom: 2rem;
    }
    
    .profile-card {
      background: white;
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .profile-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #eee;
    }
    
    .avatar {
      width: 80px;
      height: 80px;
      background: #007bff;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    .user-info h3 {
      margin: 0 0 0.5rem 0;
      color: #333;
    }
    
    .email {
      color: #666;
      margin: 0;
    }
    
    .profile-form {
      display: grid;
      gap: 1rem;
    }
    
    .form-group {
      display: flex;
      flex-direction: column;
    }
    
    label {
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #333;
    }
    
    .form-control {
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
    }
    
    .form-control:focus {
      outline: none;
      border-color: #007bff;
    }
    
    .form-actions {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
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
    
    .btn-secondary {
      background: #6c757d;
      color: white;
    }
    
    .btn-secondary:hover {
      background: #545b62;
    }
  `]
})
export class ProfileComponent {
  user = signal({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    bio: 'Software developer passionate about micro frontends and modern web technologies.'
  });
  
  editUser = { ...this.user() };
  
  updateProfile() {
    this.user.set({ ...this.editUser });
    alert('Profile updated successfully!');
  }
  
  resetForm() {
    this.editUser = { ...this.user() };
  }
}
