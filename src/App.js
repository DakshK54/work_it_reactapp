//------------------------------------------------------------------------------------------------------------------------------------//

//Imports

//------------------------------------------------------------------------------------------------------------------------------------//
import './App.css';
import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import logo from './ASSets/Logo.png';
import profpic from './ASSets/ProfPic.png';
import chest from './ASSets/Chest.png';
import back from './ASSets/Back.png';
import leg from './ASSets/Legs.png';
import upper from './ASSets/Upper.png';
import cardio from './ASSets/Cardio.png';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
//------------------------------------------------------------------------------------------------------------------------------------//

//Arrays

//------------------------------------------------------------------------------------------------------------------------------------//
const pusharr=['Flat Bench Press','Incline Dumbbell Bench Press','Chest Flyes','Cable Decline Press','Dumbbell Shoulder Press','Cable Lateral Raise','Reverse Flyes','Bar Tricep Pushdowns','Skullcrushers'];
const pullarr=['Pullups','Pulldowns','Rows','Dumbbell Rows','Shrugs','Dumbbell Bicep Curls','Hammer Curls','Reverse Curls','Preacher Curls'];
const legsarr=['Squats','Hip Thrust','Leg Press','Stiff Leg Deadlift','Bulgarian Split Squats','Hamstring Curls','Leg Extentions','Calf Raises','Ab Curls'];
const upperarr=['Flat Dumbbell Bench Press','Pulldowns','Incline Bench Press','Bent Over Rows','Dumbbell Shoulder Press','Cable Lateral Raise','Cable Bicep Curls','Rope Tricep Pushdowns','Leg Raises'];
//------------------------------------------------------------------------------------------------------------------------------------//

//Main Functions

//------------------------------------------------------------------------------------------------------------------------------------//
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/mainpage" exact element={<MainPage />} />
        <Route path="/bmi" exact element={<BMICalc />} />
        <Route path="/logger" exact element={<WorkoutLogger />} />
        <Route path="/chest" exact element={<Chest />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Template body={Blank} prof={LogSign} />
    </div>
  );
}

function Login() {

  return (
    <div>
      <LogSignPage formbody={LoginForm} divertname={DivertLogin}>Login</LogSignPage>
    </div>
  );
}

function Signup() {
  return (
    <div>
      <LogSignPage formbody={SignUpForm} divertname={DivertSignin}>Signup</LogSignPage>
    </div>
  );
}

function MainPage() {
  return(
    <div>
      <Template body={Menu} prof={MyProf} />
    </div>
  )
}

function BMICalc() {
  return(
    <div>
      <Template body={BMIBody} prof={MyProf} />
    </div>
  )
}

function WorkoutLogger() {
  return(
    <div>
      <Template body={LoggerBody} prof={MyProf} />
    </div>
  )
}

function Chest() {
  return(
    <div>
      <Template1 body={<WorkoutTemplate exercises={pusharr}/>} prof={MyProf} />
    </div>
  )
}
//------------------------------------------------------------------------------------------------------------------------------------//

//Supplimentary Functions

//------------------------------------------------------------------------------------------------------------------------------------//
function Blank() {
  return <div></div>;
}

function LogSign() {
  return(
<div className="log-sign-parent">
  <Link to='/login'>
    <button className="log-sign">Login</button>
  </Link>
  <Link to='/signup'>
    <button className="log-sign">Signup</button>
  </Link>
</div>
)
}

function LoginForm() {
  const history = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:3000/login", {
        username, password
      })
      .then(res=>{
        if(res.data == "exist"){
          history("/mainpage", {state:{id:username}})
        }
        else if(res.data == "notexist"){
          alert("Wrong credentials")
        }
      })
      .catch(e=>{
        alert("Wrong details")
        console.log(e);
      })
    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <div>
      <form>
        <input className="form-input" type="text" onChange={(e)=>{setUsername(e.target.value)}} placeholder="Username" required />
        <br></br>
        <input className="form-input" type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" required />
        
        <div className="submit">
        <Link to='/mainpage'>
          <button type="submit" onClick={submit} className="submitbutton">Submit</button>
        </Link>
      </div>
      </form>
    </div>
  );
}

const SignUpForm=()=> {
  const history = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  constructor(props)
  {
    super(props);
    this.state = {username: "",password: "",};

    this.handleSubmit = this.handleSubmit.bind(this);
  };


  handleSubmit = ()=> {
    e.preventDefualt();

    const {username, password} = this.state;
    console.log(username, password); 
  }
  }
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input className="form-input" type="text" onChange={e => this.setState({username:e.target.value})} placeholder="Username" required />
        <br></br>
        <input className="form-input" type="password" onChange={e => this.setState({password:e.target.value})} placeholder="Password" required />

        <div className="submit">
        <Link to='/mainpage'>
          <button type="submit" onClick={submit} className="submitbutton">Submit</button>
        </Link>
      </div>
      </form>
    </div>
  );


function DivertLogin() {
  return (
    <p>Don't have an account? <Link to='/signup'><span className="Linktochange">Signup</span></Link></p>
  );
}

function DivertSignin() {
  return (
    <p>Already have an account? <Link to='/login'><span className="Linktochange">Login</span></Link></p>
  );
}

function Menu() {
  useEffect(() => {
    const LOGGER = document.querySelector('.menu-item.logger');
    const LOGGERHIST = document.querySelector('.menu-item.logger-history');
    const BMI = document.querySelector('.menu-item.bmi-calc');
    const VID = document.querySelector('.menu-item.vid-help');
    const DESC = document.querySelector('.menu-item.description');

    LOGGER.addEventListener('mouseover', () => {
      DESC.innerHTML = "Log your workouts<br/>Track your progress";
    });

    LOGGER.addEventListener('mouseout', () => {
      DESC.innerHTML = "";
    });

    LOGGERHIST.addEventListener('mouseover', () => {
      DESC.innerHTML = "View your records<br/>Track your personal best";
    });

    LOGGERHIST.addEventListener('mouseout', () => {
      DESC.innerHTML = "";
    });

    BMI.addEventListener('mouseover', () => {
      DESC.innerHTML = "Calculate your BMI";
    });

    BMI.addEventListener('mouseout', () => {
      DESC.innerHTML = "";
    });

    VID.addEventListener('mouseover', () => {
      DESC.innerHTML = "Watch video tutorials<br/>Improve your form";
    });

    VID.addEventListener('mouseout', () => {
      DESC.innerHTML = "";
    });
  }, []);
  return (
    <div className="menu">
      <a href="logger" className="menu-item logger">Logger</a>
      <a href="#" className="menu-item logger-history">Records</a>
      <a href="/bmi" className="menu-item bmi-calc">BMI Calculator</a>
      <a href="#" className="menu-item vid-help">Video</a>
      <p className="menu-item description"></p>
    </div>
  );
}

function MyProf() {
  const location = useLocation();
  return(
<div className="my-profile-parent">
    <img src={profpic} alt="profile" height="25%" width="25%" ></img>
    <button className="my-prof-button"> {location.state.id} </button>
</div>
)
}

function BMIBody() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [isHeightInCm, setIsHeightInCm] = useState(true);
  const [isWeightInKg, setIsWeightInKg] = useState(true);

  const handleHeightChange = (event) => {
    const value = event.target.value;
    setHeight(value);
  };

  const handleWeightChange = (event) => {
    const value = event.target.value;
    setWeight(value);
  };

  const handleHeightSliderChange = (event) => {
    const value = event.target.value;
    setHeight(value);
  };

  const handleWeightSliderChange = (event) => {
    const value = event.target.value;
    setWeight(value);
  };

  const convertHeight = () => {
    setIsHeightInCm(!isHeightInCm);
    if (isHeightInCm) {
      setHeight((height / 30.48).toFixed(2)); // Convert cm to feet
    } else {
      setHeight((height * 30.48).toFixed(2)); // Convert feet to cm
    }
  };

  const convertWeight = () => {
    setIsWeightInKg(!isWeightInKg);
    if (isWeightInKg) {
      setWeight((weight * 2.20462).toFixed(2)); // Convert kg to lbs
    } else {
      setWeight((weight / 2.20462).toFixed(2)); // Convert lbs to kg
    }
  };

  const calculateBMI = () => {
    const heightInCm = isHeightInCm ? height : (height * 30.48).toFixed(2);
    const weightInKg = isWeightInKg ? weight : (weight / 2.20462).toFixed(2);
    const bmi = (weightInKg / ((heightInCm / 100) ** 2)).toFixed(2);
    return bmi;
  };

  const getBMIStatus = () => {
    const bmi = calculateBMI();
    if (bmi < 18.5) {
      return { status: "Underweight", color: "#00ccff" };
    } else if (bmi >= 18.5 && bmi < 25) {
      return { status: "Normal weight", color: "#00ff00" };
    } else if (bmi >= 25 && bmi < 30) {
      return { status: "Overweight", color: "#ff6600" };
    } else {
      return { status: "Obese", color: "#ff0000" };
    }
  };

  const bmiStatus = getBMIStatus();

  const getHeightUnitText = () => {
    return isHeightInCm ? "cm" : "feet";
  };

  const getWeightUnitText = () => {
    return isWeightInKg ? "kg" : "lbs";
  };

  return (
    <div className="bmi-parent">
      <div className="unitChanges">
        <div className="height-change">
          <button onClick={convertHeight}>
            {getHeightUnitText()}
          </button>
        </div>
        <div><h4 style={{color: '#ccc'}}>|</h4></div>
        <div className="weight-change">
          <button onClick={convertWeight}>
            {getWeightUnitText()}
          </button>
        </div>
      </div>
      <div className="height-input">
        <h4>Height</h4>
        <div className="bmi-input">
          <input
            type="range"
            min="0"
            max={isHeightInCm ? "213.36" : "7"}
            value={height}
            onChange={handleHeightSliderChange}
          />
          <input
            type="text"
            value={height}
            onChange={handleHeightChange}
          />
        </div>
      </div>
      <div className="weight-input">
        <h4>Weight</h4>
        <div className="bmi-input">
          <input
            type="range"
            min="0"
            max={isWeightInKg ? "100" : "220"}
            value={weight}
            onChange={handleWeightSliderChange}
          />
          <input
            type="text"
            value={weight}
            onChange={handleWeightChange}
          />
        </div>
      </div>
      <div className="bmi-res">
        <h4>Height: <span style={{ color: bmiStatus.color }}>{height} {isHeightInCm ? "cm" : "feet"}</span></h4>
        <h4>Weight: <span style={{ color: bmiStatus.color }}>{weight} {isWeightInKg ? "kg" : "lbs"} </span></h4>
        <h4>BMI: <span style={{ color: bmiStatus.color }}>{calculateBMI()}</span></h4>
        <h4>Status: <span style={{ color: bmiStatus.color }}>{bmiStatus.status}</span></h4>
      </div>
    </div>
  );
}

function LoggerBody() {
  return (
    <div className="logger-body">
      <ColumnTemplate imageSrc={chest} title="Push" link='/chest' />
      <ColumnTemplate imageSrc={back} title="Pull" link='/' />
      <ColumnTemplate imageSrc={leg} title="Legs" link='/' />
      <ColumnTemplate imageSrc={upper} title="Upper" link='/' />
      <ColumnTemplate imageSrc={cardio} title="Cardio" link='/' />
    </div>
  );
}
//------------------------------------------------------------------------------------------------------------------------------------//

//Templates

//------------------------------------------------------------------------------------------------------------------------------------//
function Template({ body, prof }) {
  return (
    <div className="parent">
      <div className="header-con"></div>
      <div className="back-btn"></div>
      <div className="body-con">
        {body()}
      </div>
      <div className="footer-con"></div>
      <div className="logo-con">
        <Link to='/'>
          <img src={logo} height="45%" width="100%" alt="Logo" />
        </Link>
      </div>
      <div className="contact-con">
        <h1>Contact</h1>
        <p>contact@WorkIt.com</p>
        <p>+91 12345 67890</p>
        <p>No.123, Building Name, Bangalore, India</p>
      </div>
      <div className="profile-con">{prof()}</div>
    </div>
  );
}

function Template1({ body, prof }) {
  return (
    <div className="parent">
      <div className="header-con"></div>
      <div className="back-btn"></div>
      <div className="body-con1">
        {body}
      </div>
      <div className="footer-con"></div>
      <div className="logo-con">
        <Link to='/'>
          <img src={logo} height="45%" width="100%" alt="Logo" />
        </Link>
      </div>
      <div className="contact-con">
        <h1>Contact</h1>
        <p>contact@WorkIt.com</p>
        <p>+91 12345 67890</p>
        <p>No.123, Building Name, Bangalore, India</p>
      </div>
      <div className="profile-con">{prof()}</div>
    </div>
  );
}

function LogSignPage({ formbody, divertname, children }) {

  return (
    <div className="parent">
      <div className="main-container"></div>
      <div className="title">
        <h1>{children}</h1>
      </div>
      <div className="back">
        <Link to='/'>
          <h1>⬅</h1>
        </Link>
      </div>
      <div className="error-message"></div>
      <div className="form-con">{formbody()}</div>
      <div className="divert">{divertname()}</div>
    </div>
  );
}

const ColumnTemplate = ({ imageSrc, title, link }) => (
    <div className="part-con">
      <img src={imageSrc} alt="Column" style={{ width: '300px', height: '275px' }} />
      <br></br>
      <Link to={link}>  
      <h1 style={{ margin: '10px 0', fontSize: '1.5em',color:'#ccc', textDecoration:'none' }}>{title}</h1>
      </Link>
    </div>
);

function WorkoutTemplate({ exercises }) {
  return (
    <div className="exercise-type">
      {exercises.map((element, index) => (
        <div key={index}>
          <div className="form-container">
            <form>
              <FormTemplate name={element} />
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}



const FormTemplate = ({ name }) => (
  <div>
    <h1>{name}</h1>
    <br></br>
    <div>
      <div className="set-container">
        <span>Set 1:</span>
        <label>Weight: <input type="text" /></label>
        <label>Reps: <input type="text" /></label>
      </div>
      <div className="set-container">
        <span>Set 2:</span>
        <label>Weight: <input type="text" /></label>
        <label>Reps: <input type="text" /></label>
      </div>
      <div className="set-container">
        <span>Set 3:</span>
        <label>Weight: <input type="text" /></label>
        <label>Reps: <input type="text" /></label>
      </div>
    </div>
  </div>
);


//------------------------------------------------------------------------------------------------------------------------------------//

//End

//------------------------------------------------------------------------------------------------------------------------------------//
export default App;
