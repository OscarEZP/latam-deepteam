import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamRef: AngularFireList<any> = null;
  constructor(private _angularFireDatabase: AngularFireDatabase) {
    this.teamRef = this._angularFireDatabase.list('/team');
  }

  getTeam() {
    return this.teamRef;
  }

  getMemberById(uid) {
    return this._angularFireDatabase.object('/team' + uid);
  }

  createMember(member) {
    return this.teamRef.push(member);
  }

  updateMember(member) {
    return this._angularFireDatabase.object('/team' + member.uid).set(member);
  }
}
