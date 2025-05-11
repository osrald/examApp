export interface Option {
    id: number;
    text: string;
    isCorrect: boolean;
  }
  
  export interface Question {
    examPath: string;
    courseActivity: string;
    subActivity: string;
    questionText: string;
    options: Option[];
    type: 'single' | 'multiple';
  }
  