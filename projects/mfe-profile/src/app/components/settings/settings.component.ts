import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="settings-container">
      <h2>Profile Settings</h2>
      
      <div class="settings-card">
        <h3>Notification Preferences</h3>
        <div class="setting-item">
          <label>
            <input type="checkbox" [(ngModel)]="settings().emailNotifications">
            Email Notifications
          </label>
        </div>
        <div class="setting-item">
          <label>
            <input type="checkbox" [(ngModel)]="settings().pushNotifications">
            Push Notifications
          </label>
        </div>
        
        <h3>Privacy Settings</h3>
        <div class="setting-item">
          <label>
            <input type="checkbox" [(ngModel)]="settings().profilePublic">
            Public Profile
          </label>
        </div>
        
        <button class="btn btn-primary" (click)="saveSettings()">Save Settings</button>
      </div>
    </div>
  `,
  styles: [`
    .settings-container {
      padding: 2rem;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .settings-card {
      background: white;
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .setting-item {
      margin: 1rem 0;
    }
    
    .setting-item label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }
    
    .btn {
      padding: 0.75rem 1.5rem;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 1rem;
    }
  `]
})
export class SettingsComponent {
  settings = signal({
    emailNotifications: true,
    pushNotifications: false,
    profilePublic: true
  });
  
  saveSettings() {
    alert('Settings saved successfully!');
  }
}
