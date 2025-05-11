import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { QUESTIONS } from 'src/app/data/exam-data';
import { Option } from 'src/app/models/question.model';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonRadio, IonRadioGroup, IonButton, IonLabel, IonItemDivider, IonCheckbox, IonItem, } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.page.html',
  styleUrls: ['./exam.page.scss'],
  standalone: true,
  imports: [   
    CommonModule,
    FormsModule, 
    IonRadio,
    IonRadioGroup,
    IonButton,
    IonLabel,
    IonItemDivider,
    IonCheckbox,
    IonItem,
    //IonList,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonContent
  ]
})
export class ExamPage implements OnInit {

  questions = QUESTIONS;
  answers: any = {};

  constructor(private navCtrl: NavController, private alertController: AlertController) { }

  ngOnInit() {
    console.log('answers1', this.answers);
  }

 async submitExam() {
    const alert = await this.alertController.create({
      header: 'Confirm Submission',
      message: 'Are you sure you want to submit the exam?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Submission canceled');
          }
        },
        {
          text: 'Submit',
          handler: () => {
            this.navCtrl.navigateForward('/result', {
              state: { answers: this.answers }
            });
          }
        }
      ]
    });

    await alert.present();
  }

  onSelect(questionIndex: number, optionIndex: number, isMultiple: boolean) {
    if (isMultiple) {
      if (!this.answers[questionIndex]) {
        this.answers[questionIndex] = [];
      }
      const idx = this.answers[questionIndex].indexOf(optionIndex);
      if (idx > -1) {
        this.answers[questionIndex].splice(idx, 1);
      } else {
        this.answers[questionIndex].push(optionIndex);
      }
    } else {
      this.answers[questionIndex] = optionIndex;
    }

    console.log('answers2', this.answers);
  }

  isChecked(questionIndex: number, optionIndex: number): boolean {
    const answer = this.answers[questionIndex];
    if (Array.isArray(answer)) {
      return answer.includes(optionIndex);
    }
    return answer === optionIndex;
  }

  compareWith(o1: Option, o2: Option): boolean {
    return o1.id === o2.id;
  }

  handleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log('Current value:', JSON.stringify(target.value));
  }

}
