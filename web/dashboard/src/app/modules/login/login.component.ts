import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    this.Auth.getUserDetails(username, password).subscribe(data => {
      if (data.success) {
        this.Auth.getUser(username).subscribe(userData => {
          const name = userData.name.valueOf();
          const loginHash = userData.loginHash.valueOf();
          sessionStorage.setItem('username', name);
          sessionStorage.setItem('email', username);
          sessionStorage.setItem('loginHash', loginHash);
          this.Auth.setLoggedIn(true, name, username);
          console.log(username + " was logged in!", name);
        })
        this.router.navigate(['/setup/config'])
      } else {
        window.alert(data.message)
        console.log(username, password)
      }
    })
  }
}
