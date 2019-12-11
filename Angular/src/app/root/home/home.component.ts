import { Component } from '@angular/core';
import { FbappPage } from 'src/app/shared/FbappPage';
import { UserService } from 'src/app/user/user.service';


@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements FbappPage {
  public pageTitle = 'Accueil';
  public constructor(private readonly userService: UserService) { }

  public get user() {

    return JSON.parse(localStorage.getItem('user'))
    return this.userService.currentUser;
  }


}


