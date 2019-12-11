import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FbappPage } from 'src/app/shared/FbappPage';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'fgapp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit,FbappPage {
  public pageTitle = 'Enregistrer';
  FormRegister: FormGroup;
  arrayOne(n: number): any[] {
    return Array(n);
  }
  constructor() { }

  ngOnInit() : void {
    this.FormRegister = new FormGroup({
      'email': new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      'username': new FormControl('',[
        Validators.required,
      ]),
      'password': new FormControl('',[
        Validators.required,
        Validators.minLength(4),
      ]),
      'age': new FormControl('',[
        Validators.required,
      ]),
      'identity': new FormControl('',[
      ]),


    }); // <-- add custom validator at the FormGroup level
  }
  get email() { return this.FormRegister.get('email'); }
  get username() { return this.FormRegister.get('username'); }
  get password() { return this.FormRegister.get('password'); }
  get age() { return this.FormRegister.get('age'); }

    public onSubmit(formDir: NgForm): void {
    console.log('ok');

    const { email, password } = formDir.value;
    /*this.authService.authenticate(email, password).subscribe(user=>{
      console.log(user);
    })*/
    this.firstName$=this.authService.authenticate(email, password).pipe(
      map((user) => {
        console.log(user);
        this.goToHome();
        return null;
      }),
      catchError(() => {
        this.resetForm(formDir);
        return of('Login failed');
      }),
    );

    /*this.http.post('http://127.0.0.1:3000/api/auth', JSON.stringify(body), {
      headers: headers
    }).subscribe(data => {
      console.log(data);
    });

     /*this.email$ = this.userService.authenticate(email, password).subscribe(
      (users) => {
        console.log('ok2');
        this.goToHome();
        return null;
      }),
      catchError(() => {
        console.log('die');
        this.resetForm(formDir);
        return of('Login failed');
      }),
    );*/
  }

}
