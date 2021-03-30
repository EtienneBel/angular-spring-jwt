import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = {
    username: '',
    email: '',
    password: '',
  };

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.newUser();
  }

  onSubmit(): void {
    // console.log(this.user);
    const data = {
      username: this.user.username,
      email: this.user.email,
      password: this.user.password,
    };

    this.authService.register(data.username, data.email, data.password).subscribe(
      (response) => {
        console.log(response);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.newUser();
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
        this.newUser();
      }
    );
  }

  newUser() {
    this.user = {
      username: '',
      email: '',
      password: '',
    };
  }
}
