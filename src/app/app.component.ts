import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 questions:any;
 currentIndex:number;
 notAttempted:any;
 correct:any;
 currentQuestionSet:any;
 start=false;
 gameover=false;
buttonname="Play";
 constructor(){

   
   this.questions=[
     {
       id:1,
       question:'A female turkey is called a gobbler',
       
       option:[
         {optionid:1,name:'True'},
         {optionid:2,name:'False'},
        
         
       ],
       answer:2,
       selected:0
     },
     {
       id:2,
       question:'At the first Thanksgiving which utensil was missing?',
       option:[
         {optionid:1,name:'Fork'},
         {optionid:2,name:'Knife'},
         {optionid:3,name:'Spoon'},
         {optionid:4,name:'Knife bread'}
       ],
       answer:1,
       selected:0
     },
     {
       id:3,
       question:'What does the average size of the Turkey weigh?',
       option:[
         {optionid:1,name:'20 pounds'},
         {optionid:2,name:'15 pounds'},
         {optionid:3,name:'10 pounds'},
         {optionid:4,name:'5 pounds'}
       ],
       answer:2,
       selected:0
     },
     {
       id:4,
       question:'What year was the first Thanksgiving celebrated?',
       option:[
         {optionid:1,name:'1621'},
         {optionid:2,name:'1776'},
         {optionid:3,name:'1999'},
         {optionid:4,name:'1898'}
       ],
       answer:1,
       selected:0
     }
   ];

   this.currentIndex=0;
   this.currentQuestionSet= this.questions[this.currentIndex];
 }
  
  next(){
    this.currentIndex = this.currentIndex + 1;
    this.currentQuestionSet= this.questions[this.currentIndex];
  }
  submit(){
    this.buttonname="Replay";
    if(this.currentIndex+1==this.questions.length){
       this.gameover=true;
       this.start=false;
         this.correct=0;
    this.notAttempted=0;
    this.questions.map(x=>{
        if(x.selected!=0){
          if(x.selected == x.answer)
            this.correct=this.correct + 1;
        }
        else{
          this.notAttempted=this.notAttempted + 1;
        }
        x.selected=0;
    });
    }
    
  
  }
  startQuiz(){
    this.gameover=false;
    this.currentIndex=0;
   this.currentQuestionSet= this.questions[this.currentIndex];
      this.start=true;
  }
}
