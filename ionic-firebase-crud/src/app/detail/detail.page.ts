import { Component, OnInit } from '@angular/core';

// firebase
import * as firebase from 'Firebase';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})

export class DetailPage implements OnInit {

  info = {};

  // load info data from Firebase Real-time Database
  constructor(private route: ActivatedRoute,
    public router: Router) {
    firebase.database().ref('infos/' + this.route.snapshot.paramMap.get('key')).on('value', resp => {
      this.info = snapshotToObject(resp);
    });
  }

  ngOnInit() {
  }

}

// converting Firebase Real-time Database response to the Angular 6 object
export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;

  return item;
};
