import { Subject } from "rxjs";
import { User } from "src/app/models/user.model";

export class UserService{
    private users: User[] = [
        new User('sami','aloui','saami.aloui@gmail.com','jus d\'orange',['coder','boire coffe'])
    ];
    userSubject = new Subject<User[]>();

    emitUsers(){
        this.userSubject.next(this.users.slice());
    }
    addUser(user: User){
        this.users.push(user);
        this.emitUsers();
    }

}