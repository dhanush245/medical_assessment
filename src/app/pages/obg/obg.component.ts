import { Component } from '@angular/core';

@Component({
  selector: 'app-obg',
  templateUrl: './obg.component.html'
})
export class ObgComponent {
  showForm = false;
  isLoading = false;
  showSuccess = false;
  lastSaved: any = null;
  formData = {
    name: '',
    age: null,
    lastMenstrualPeriod: '',
    pregnancyStatus: '',
    gynecologicalHistory: '',
    obstetricHistory: '',
    examinationFindings: ''
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
    console.log('OBG Data:', this.lastSaved);

    this.isLoading = false;
    this.showForm = false;
    this.showSuccess = true;

    this.formData = {
      name: '',
      age: null,
      lastMenstrualPeriod: '',
      pregnancyStatus: '',
      gynecologicalHistory: '',
      obstetricHistory: '',
      examinationFindings: ''
    };

    setTimeout(() => this.hideSuccess(), 3000);
  }

  hideSuccess(): void {
    this.showSuccess = false;
  }
}