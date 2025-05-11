import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class HomePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  startExam() {
    this.navCtrl.navigateForward('/exam');
  }
}
