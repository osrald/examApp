import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { QUESTIONS } from '../../data/exam-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class ResultPage implements OnInit {

  answers: any;
  distinctCourseActivities: any[] = [];
  distinctSubActivities: any[] = [];
  score = 0;
  total = 0;
  percentage = 0;

  constructor(private navCtrl: NavController) {
    //const nav = this.navCtrl.getTop() as any;
    const state = window.history.state;
    this.answers = state.answers || {};    
  }

  ngOnInit() {
    //this.distinctCourseActivities = Array.from(new Set(QUESTIONS.map(question => question.courseActivity)));
    //console.log('Distinct course activities: ', this.distinctCourseActivities);

    this.distinctCourseActivities = Array.from(new Set(QUESTIONS.map(question => 
      JSON.stringify({ courseActivity: question.courseActivity, wrongAns: 0, totalAns: 0 })
    ))).map(item => JSON.parse(item));
    console.log('Distinct course activities: ', this.distinctCourseActivities);

    this.distinctSubActivities = Array.from(new Set(QUESTIONS.map(question => 
      JSON.stringify({ courseActivity: question.courseActivity, subActivity: question.subActivity, wrongAns: 0, totalAns: 0, questionAnswer: [] })
    ))).map(item => JSON.parse(item));
    console.log('Distinct sub activities: ', this.distinctSubActivities);

    this.calculateScore();    
  }

  calculateScore() {
    this.total = QUESTIONS.length;
    console.log('total questions: ', this.total);
    console.log('QUESTIONS: ', QUESTIONS);
    console.log('answers: ', this.answers);

    QUESTIONS.forEach((question, index) => {
      const answer = this.answers[index];

      const courseActivity = question.courseActivity;
      const activity = this.distinctCourseActivities.find(activity => activity.courseActivity === courseActivity);
      if (activity) {
        activity.totalAns++;
      }
      const subActivity = this.distinctSubActivities.find(subActivity => subActivity.courseActivity === courseActivity && 
        subActivity.subActivity === question.subActivity);
      if (subActivity) {
        subActivity.totalAns++;
      }

      if (question.type === 'single') {
        if (answer !== undefined && question.options[answer].isCorrect) {
          this.score++;
        }
        else {
            if (activity) {
              activity.wrongAns++;
            }

            if (subActivity) {
              subActivity.wrongAns++;
              subActivity.questionAnswer.push({
                question: question.questionText, 
                answer: (answer ?? null) != null ? question.options[answer].text : "No Answer." });
            }
        }
      } else if (question.type === 'multiple') {
        const correctIndexes = question.options.map((opt, i) => opt.isCorrect ? i : -1).filter(i => i !== -1);
        if (Array.isArray(answer) &&
          correctIndexes.length === answer.length &&
          correctIndexes.every(i => answer.includes(i))) {
          this.score++;
        }
      }
    });

    this.percentage = (this.score / this.total) * 100;
  }

  getSubActivities(courseActivity: string) {
    if (!this.distinctSubActivities) {
      return [];
    }
    return this.distinctSubActivities.filter(sub => sub.courseActivity === courseActivity);
  }

  goHome() {
    this.navCtrl.navigateForward('/home');
  }

}
