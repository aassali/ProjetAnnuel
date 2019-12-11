import { Component, OnInit,Input } from '@angular/core';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'fbapp-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() public pageName!: string;

  constructor(private readonly userService: UserService) { }

  ngOnInit() {
  }

  public get user() {
    return this.userService.currentUser;
  }


}

