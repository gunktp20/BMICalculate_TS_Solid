import { useState } from "react";
import BMICalculator from "./BMICalculator";
import './App.css'
import boy from './icons8-boy-64.png'
import girl from './icons8-girl-64.png'
import BMIInterpretation from "./BMIInterpretation";

function App() {

  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [bmi, setBMI] = useState<number>(0);
  const [interpretation, setInterpretation] = useState<string>("");

  const handleCalculate = async (event: any) => {
    event.preventDefault();
    const bmiCal = new BMICalculator(weight, height);
    const bmiInterpret = new BMIInterpretation(weight, height);
    setBMI(Math.trunc(bmiCal.getBMI()));
    setInterpretation(bmiInterpret.getInterpret());
  };


  return (
    <>
      <div className="main-form">
        <h2 className="title">BMI calculator</h2>
        <form onSubmit={handleCalculate}>
          <div className="gender-selector">
            <label htmlFor="boy" className="img-box">
              <input type="radio" id="boy" name="gender" value="boy" className="peer radio" checked></input>
              <div className="icon">
                <img src={boy} width="50px" alt="" />
              </div>
              <p>ชาย</p>
            </label>

            <label htmlFor="girl" className="img-box">
              <input type="radio" id="girl" name="gender" value="girl" className="peer radio"></input>
              <div className="icon">
                <img src={girl} width="50px" alt="" />
              </div>
              <p>หญิง</p>
            </label>
          </div>
          <div className="form-control">
            <input type="number" placeholder="Weight น้ำหนัก" name="weight" required onChange={(event) => {
              setWeight((event.target.value as unknown) as number)
            }} />
          </div>
          <div className="form-control">
            <input type="number" placeholder="Height ส่วนสูง" name="height" required onChange={(event) => {
              setHeight((event.target.value as unknown) as number)
            }} />
          </div>
          <button type="submit">Submit</button>
        </form>
        <p className="note">ทำการกรอก น้ำหนัก,ส่วนสูง เพื่อคำนวญหาค่า BMI ของคุณ</p>
        <div className="status">
          <p>BMI ของคุณ : {bmi}</p>
          <p>ค่าสถานะของคุณ : {interpretation}</p>
        </div>
      </div>
    </>
  )
}

export default App
