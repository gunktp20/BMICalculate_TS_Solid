// src/BMICalculator.ts
class BMIInterpretation {

    public weight;
    public height;
    public bmi;

    constructor(weight: number, height: number){
        this.weight = weight;
        this.height = height/100;
        this.bmi = this.weight/this.height;
    }

  getInterpret(): string {
    if(this.bmi>30){
        return "You are Obese.";
      }else if(this.bmi > 25){
        return "You are Overweight.";
      }else if(this.bmi>18.5){
        return  "You are Normal Weight.";
      }else{
         return "You are Underweight.";
      }
  }
}

export default BMIInterpretation;
