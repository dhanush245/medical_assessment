import { Component } from '@angular/core';

@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.component.html'
})
export class CardioComponent {
  showForm = false;
  isLoading = false;
  showSuccess = false;
  lastSaved: any = null;
  formData = {
    name: '',
    age: null,
    gender: '',
    address: '',
    uid: null,
    complaints: '',
    history: ''
  };

  onCreate(): void {
    this.showForm = !this.showForm;
    if (this.showForm) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  async onSubmit(): Promise<void> {
    if (this.isLoading) return;
    
    this.isLoading = true;
    
    // Simulate API call with loading animation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Save a snapshot to show in summary
    this.lastSaved = { ...this.formData, savedAt: new Date() };
    console.log('Cardio Data:', this.lastSaved);
    
    this.isLoading = false;
    this.showForm = false;
    this.showSuccess = true;
    
    // Reset form data
    this.formData = {
      name: '',
      age: null,
      gender: '',
      address: '',
      uid: null,
      complaints: '',
      history: ''
    };
    
    // Auto-hide success message after 3 seconds
    setTimeout(() => {
      this.hideSuccess();
    }, 3000);
  }

  hideSuccess(): void {
    this.showSuccess = false;
  }
}
