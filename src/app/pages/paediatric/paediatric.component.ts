import { Component } from '@angular/core';

@Component({
  selector: 'app-paediatric',
  templateUrl: './paediatric.component.html'
})
export class PaediatricComponent {
  showForm = false;
  isLoading = false;
  showSuccess = false;
  lastSaved: any = null;
  formData = {
    name: '',
    age: null,
    weight: null,
    height: null,
    developmentalMilestones: '',
    vaccinationHistory: '',
    parentalConcerns: ''
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
    await new Promise(resolve => setTimeout(resolve, 2000));

    this.lastSaved = { ...this.formData, savedAt: new Date() };
    console.log('Paediatric Data:', this.lastSaved);

    this.isLoading = false;
    this.showForm = false;
    this.showSuccess = true;

    this.formData = {
      name: '',
      age: null,
      weight: null,
      height: null,
      developmentalMilestones: '',
      vaccinationHistory: '',
      parentalConcerns: ''
    };

    setTimeout(() => this.hideSuccess(), 3000);
  }

  hideSuccess(): void {
    this.showSuccess = false;
  }
}