import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(
    private readonly fb: FormBuilder,
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  readonly form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  });

  loading = false;
  error: string | null = null;

  async submit() {
    if (this.form.invalid || this.loading) return;
    const { email, password, confirmPassword } = this.form.value as any;
    if (password !== confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }
    this.loading = true;
    this.error = null;
    try {
      await this.auth.signUp(email, password);
      this.router.navigateByUrl('/neuro');
    } catch (e: any) {
      this.error = e?.message ?? 'Failed to create account';
    } finally {
      this.loading = false;
    }
  }
}


