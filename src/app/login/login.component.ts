import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,
    HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  login(): void {
    this.http.get<any>('http://127.0.0.1:8080/porvenir-0.0.1-SNAPSHOT/login?name=' + this.name + '&password=' + this.password)
      .subscribe(response => {
        if (response) {
          this.router.navigateByUrl('/mainView');
        } else {
          console.error(response);
        }
      });
  }
}
