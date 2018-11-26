import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from '../../services/team.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: any;
  constructor(private router: Router, private _teamService: TeamService) { }

  ngOnInit() {
    this.listTeamMember();
    // this._teamService.createMember({
    //   name: 'Carla',
    //   apellido: 'Arteaga',
    //   cargo: 'Ser fea'
    // }).then((response) => {
    //   console.log(response);
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

  detailsDeveloper(id: number) {
    this.router.navigate(['team/details', id]);
  }

  listTeamMember() {
    this.list = this._teamService.getTeam();
  }

}
