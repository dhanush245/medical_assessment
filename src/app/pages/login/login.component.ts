import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private readonly fb: FormBuilder,
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  readonly form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  loading = false;
  error: string | null = null;

  async submit() {
    if (this.form.invalid || this.loading) return;
    this.loading = true;
    this.error = null;
    const { email, password } = this.form.value as { email: string; password: string };
    try {
      await this.auth.signIn(email, password);
      this.router.navigateByUrl('/neuro');
    } catch (e: any) {
      this.error = e?.message ?? 'Failed to sign in';
    } finally {
      this.loading = false;
    }
  }

  async signInWithGoogle() {
    if (this.loading) return;
    this.loading = true;
    this.error = null;
    try {
      await this.auth.signInWithGoogle();
      this.router.navigateByUrl('/neuro');
    } catch (e: any) {
      this.error = e?.message ?? 'Google sign-in failed';
    } finally {
      this.loading = false;
    }
  }
}


