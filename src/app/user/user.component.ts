import { Component,Input} from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

/*
const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)//math.random() give a random value from 0to1 inclusive eg- o.23, 0.896 etc
*/

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) avatar!:string;
  @Input({required:true}) name!:string;

  get imagePath(){
    return 'assets/users/' + this.avatar
  }
  onSelectUser(){
  }
    // selectedUser= signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(()=>'assets/users/'+this.selectedUser().avatar)
  
}

