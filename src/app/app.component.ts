import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'sample';
  users: any;
  memberIds: any;
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getDetails();
  }
  getDetails() {
    this.api.get('admin/memberships/get_all_memberhships').subscribe((res) => {
      let sort = res.memberships;
      this.users = sort;
    });
  }
  getMemberById(id) {
    this.api
      .getMemberId(`admin/memberships/get_all_memberhships?membershipId=${id}`)
      .subscribe((res) => {
        document.getElementById('openModalButton').click();
        let sendData = res.memberships;
        this.memberIds = sendData;
      });
  }
}
