// src/BMICalculator.ts
class BMICalculator {

    public weight;
    public height;
    public bmi;

    constructor(weight: number, height: number){
        this.weight = weight;
        this.height = height/100;
        this.bmi = this.weight/this.height;
    }

  getBMI(): number {
    return this.bmi;
  }
}

export default BMICalculator;
