//------------------------------------------------------------------------------------------------------------------------------------//

//Imports

//------------------------------------------------------------------------------------------------------------------------------------//
import './App.css';
import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import logo from './AssetsFolder/Logo1.png';
import logo_bg from './AssetsFolder/Logo.png';
import profpic from './AssetsFolder/ProfPic.png';
import chest from './AssetsFolder/Chest.png';
import back from './AssetsFolder/Back.png';
import leg from './AssetsFolder/Legs.png';
import upper from './AssetsFolder/Upper.png';
import shoulder from './AssetsFolder/Shoulder.png'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
//------------------------------------------------------------------------------------------------------------------------------------//

//Arrays

//------------------------------------------------------------------------------------------------------------------------------------//
const pusharr=['Flat Bench Press','Incline Dumbbell Bench Press','Chest Flys','Cable Decline Press','Dumbbell Shoulder Press','Cable Lateral Raise','Reverse Flys','Bar Tricep Pushdowns','Skullcrushers'];
const pullarr=['Pullups','Pulldowns','Rows','Dumbbell Rows','Shrugs','Dumbbell Bicep Curls','Hammer Curls','Reverse Curls','Preacher Curls'];
const legsarr=['Squats','Hip Thrust','Leg Press','Stiff Leg Deadlift','Bulgarian Split Squats','Hamstring Curls','Leg Extentions','Calf Raises','Ab Curls'];
const upperarr=['Flat Dumbbell Bench Press','Pulldowns','Incline Bench Press','Bent Over Rows','Dumbbell Shoulder Press','Cable Lateral Raise','Cable Bicep Curls','Rope Tricep Pushdowns','Leg Raises'];
const shoulderarr=['Shoulder Press','Lateral Raise','Reverse Flys','Dumbbell Front Raise','Upright Rows','Ab Curls','Leg Raises','Woodchop']
//------------------------------------------------------------------------------------------------------------------------------------//

//Main Functions

//------------------------------------------------------------------------------------------------------------------------------------//
const App = () => {
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
        <Route path="/back" exact element={<Back />} />
        <Route path="/legs" exact element={<Legs />} />
        <Route path="/upper" exact element={<Upper />} />
        <Route path="/shoulder" exact element={<Shoulders />}/>
        <Route path="/video" exact element={<Video />}/>
        <Route path="/hist" exact element={<WorkoutHist />}/>
        <Route path="/chest1" exact element={<Chest1 />} />
        <Route path="/back1" exact element={<Back1 />} />
        <Route path="/legs1" exact element={<Legs1 />} />
        <Route path="/upper1" exact element={<Upper1 />} />
        <Route path="/shoulder1" exact element={<Shoulders1 />}/>
      </Routes>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <Template body={Blank} prof={LogSign} />
    </div>
  );
}

const Login = () => {

  return (
    <div>
      <LogSignPage formbody={LoginForm} divertname={DivertLogin}>Login</LogSignPage>
    </div>
  );
}

const Signup = () => {
  return (
    <div>
      <LogSignPage formbody={SignUpForm} divertname={DivertSignin}>Signup</LogSignPage>
    </div>
  );
}

const MainPage = () => {
  return(
    <div>
      <Template body={Menu} prof={MyProf} />
    </div>
  )
}

const BMICalc = () => {
  return(
    <div>
      <Template body={BMIBody} prof={MyProf} />
    </div>
  )
}

const WorkoutLogger = () => {
  return(
    <div>
      <Template body={LoggerBody} prof={MyProf} />
    </div>
  )
}

const Chest = () => {
  return(
    <div className = 'Exercise-body'>
      <form>
        <WorkoutTemplate exercises={pusharr}></WorkoutTemplate>
        <br></br>
        <submit className="exercise-submit">Submit</submit>
      </form>
    </div>
  )
}

const Back = () => {
  return(
    <div className = 'Exercise-body'>
      <form>
        <WorkoutTemplate exercises={pullarr}></WorkoutTemplate>
        <submit className="exercise-submit">Submit</submit>
      </form>
    </div>
  )
}

const Legs = () => {
  return(
    <div className = 'Exercise-body'>
      <form>
        <WorkoutTemplate exercises={legsarr}></WorkoutTemplate>
        <submit className="exercise-submit">Submit</submit>
      </form>
    </div>
  )
}

const Upper = () => {
  return(
    <div className = 'Exercise-body'>
      <form>
        <WorkoutTemplate exercises={upperarr}></WorkoutTemplate>
        <submit className="exercise-submit">Submit</submit>
      </form>
    </div>
  )
}

const Shoulders = () => {
  return(
    <div className = 'Exercise-body'>
      <form>
        <WorkoutTemplate exercises={shoulderarr}></WorkoutTemplate>
        <submit className="exercise-submit">Submit</submit>
      </form>
    </div>
  )
}

const Video = () => {
  return(
    <div>
      <VdoTemp body={VideoBody} prof={MyProf} ></VdoTemp>
    </div>
  )
}

const WorkoutHist = () => {
  return(
    <div>
      <Template body={LoggerBodyHist} prof={MyProf} />
    </div>
  )
}

const Chest1 = () => {
  return(
    <div className = 'Exercise-body'>
      <form>
        <WorkoutTemplate exercises={pusharr}></WorkoutTemplate>
      </form>
    </div>
  )
}

const Back1 = () => {
  return(
    <div className = 'Exercise-body'>
      <form>
        <WorkoutTemplate exercises={pullarr}></WorkoutTemplate>
      </form>
    </div>
  )
}

const Legs1 = () =>{
  return(
    <div className = 'Exercise-body'>
      <form>
        <WorkoutTemplate exercises={legsarr}></WorkoutTemplate>
      </form>
    </div>
  )
}

const Upper1 = () => {
  return(
    <div className = 'Exercise-body'>
      <form>
        <WorkoutTemplate exercises={upperarr}></WorkoutTemplate>
      </form>
    </div>
  )
}

const Shoulders1 = () => {
  return(
    <div className = 'Exercise-body'>
      <form>
        <WorkoutTemplate exercises={shoulderarr}></WorkoutTemplate>
      </form>
    </div>
  )
}
//------------------------------------------------------------------------------------------------------------------------------------//

//Supplimentary Functions

//------------------------------------------------------------------------------------------------------------------------------------//
const Blank = () => {
  return <div></div>;
}

const LogSign = () => {
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

const LoginForm = () => {
  const history = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:3000/login", {
        username, password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }})
      .then(res=>{
        if(res.data === "exist"){
          history("/mainpage", {state:{id:username}})
        }
        else if(res.data === "notexist"){
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

const SignUpForm = () => {
  const history = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:3000/signup", {
        username, password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }})
      .then(res=>{
        if(res.data === "exist"){
          alert("User already exists")
        }
        else if(res.data === "notexist"){
          history("/mainpage", {state:{id:username}})
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

const DivertLogin = () => {
  return (
    <p>Don't have an account? <Link to='/signup'><span className="Linktochange">Signup</span></Link></p>
  );
}

const DivertSignin = () => {
  return (
    <p>Already have an account? <Link to='/login'><span className="Linktochange">Login</span></Link></p>
  );
}

const Menu = () => {
  const history = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  useEffect(() => {
    const LOGGER = document.querySelector('.menu-item.logger');
    const LOGGERHIST = document.querySelector('.menu-item.logger-history');
    const BMI = document.querySelector('.menu-item.bmi-calc');
    const VID = document.querySelector('.menu-item.vid-help');
    const DESC = document.querySelector('.menu-item.description');

    DESC.innerHTML = "Menu";

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
  
  async function goto_logger(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:3000/mainpage", {
        username, password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }})
      .then(res=>{
        if(res.data === "exist"){
          history("/logger", {state:{id:username}})
        }
        else if(res.data === "notexist"){
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

  async function goto_bmi(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:3000/mainpage", {
        username, password
      }, {
        headers: {
          'Content-Type': 'application/json'
      }})
      .then(res=>{
        if(res.data === "exist"){
          history("/bmi", {state:{id:username}});
        }
        else if(res.data === "notexist"){
          alert("Wrong credentials");
        }
      })
      .catch(e=>{
        alert("Wrong details");
        console.log(e);
      })
    }
    catch(e){
      console.log(e);
    }
  }

  async function goto_vdo(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:3000/mainpage", {
        username, password
      }, {
        headers: {
          'Content-Type': 'application/json'
      }})
      .then(res=>{
        if(res.data === "exist"){
          history("/video", {state:{id:username}});
        }
        else if(res.data === "notexist"){
          alert("Wrong credentials");
        }
      })
      .catch(e=>{
        alert("Wrong details");
        console.log(e);
      })
    }
    catch(e){
      console.log(e);
    }
  }

  async function goto_records(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:3000/mainpage", {
        username, password
      }, {
        headers: {
          'Content-Type': 'application/json'
      }})
      .then(res=>{
        if(res.data === "exist"){
          history("/hist", {state:{id:username}});
        }
        else if(res.data === "notexist"){
          alert("Wrong credentials");
        }
      })
      .catch(e=>{
        alert("Wrong details");
        console.log(e);
      })
    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <div className="menu">
      <a href="/logger" className="menu-item logger" onClick={goto_logger}>Logger</a>
      <a href="/hist" className="menu-item logger-history" onClick={goto_records}>Records</a>
      <a href="/bmi" className="menu-item bmi-calc" onClick={goto_bmi}>BMI Calculator</a>
      <a href="/video" className="menu-item vid-help" onClick={goto_vdo}>Video</a>
      <p className="menu-item description"></p>
    </div>
  );
}

const MyProf = () => {
  const location = useLocation();
  return (
    <div className="my-profile-parent">
      <img src={profpic} alt="profile" height="25%" width="25%" ></img>
      <button className="my-prof-button"> {location.state.id} </button>
    </div>
  )
}

const BMIBody = () => {
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

const LoggerBody = () => {
  return (
    <div className="logger-body">
      <ColumnTemplate imageSrc={chest} title="Push" link='/chest' />
      <ColumnTemplate imageSrc={back} title="Pull" link='/back' />
      <ColumnTemplate imageSrc={leg} title="Legs" link='/legs' />
      <ColumnTemplate imageSrc={upper} title="Upper" link='/upper' />
      <ColumnTemplate imageSrc={shoulder} title="Shoulders" link='/shoulder' />
    </div>
  );
}

const LoggerBodyHist = () => {
  return (
    <div className="logger-body">
      <ColumnTemplate imageSrc={chest} title="Push" link='/chest1' />
      <ColumnTemplate imageSrc={back} title="Pull" link='/back1' />
      <ColumnTemplate imageSrc={leg} title="Legs" link='/legs1' />
      <ColumnTemplate imageSrc={upper} title="Upper" link='/upper1' />
      <ColumnTemplate imageSrc={shoulder} title="Shoulders" link='/shoulder1' />
    </div>
  );
}

const VideoBody = () => {
  return (
    <div className="video-body">
      <div className="video-container">
        <RowTemplate imageSrc={logo_bg} title="Video 1" link="#"></RowTemplate>
        <RowTemplate imageSrc={logo_bg} title="Video 2" link="#"></RowTemplate>
        <RowTemplate imageSrc={logo_bg} title="Video 3" link="#"></RowTemplate>
        <RowTemplate imageSrc={logo_bg} title="Video 4" link="#"></RowTemplate>
      </div>
    </div>
  )
}
//------------------------------------------------------------------------------------------------------------------------------------//

//Templates

//------------------------------------------------------------------------------------------------------------------------------------//
const Template = ({ body, prof }) => {
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
          <img src={logo} height="45%" width="100%" alt="Logo" ></img>
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

const VdoTemp = ({ body, prof }) => {
  return (
    <div className="parent">
      <div className="header-con"></div>
      <div className="back-btn"></div>
      <div className="body-con-1">
        {body()}
      </div>
      <div className="footer-con"></div>
      <div className="logo-con">
        <Link to='/'>
          <img src={logo} height="45%" width="100%" alt="Logo" ></img>
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

const LogSignPage = ({ formbody, divertname, children }) => {

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
      <img src={imageSrc} alt="Column" style={{ width: '300px', height: '275px' }} ></img>
      <br></br>
      <Link to={link}>  
      <h1 style={{ margin: '10px 0', fontSize: '1.5em',color:'#ccc', textDecoration:'none' }}>{title}</h1>
      </Link>
    </div>
);

const RowTemplate = ({ imageSrc, title, link }) => (
  <div className="video-box">
    <img src={imageSrc} alt="Row" style={{ width: '300px', height: '180px' }}></img>
    <br></br>
    <Link to={"#"}>
      <h1 style={{ margin: '10px 0', fontSize: '1em', color: '#ccc', textDecoration: 'none' }}>{title}</h1>
    </Link>
  </div>
)

const WorkoutTemplate = ({ exercises }) => {
  return (
    <div className="exercise-type">
      {exercises.map((element, index) => (
        <div key={index}>
          <div className="form-container">
              <FormTemplate name={element} />
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
        <input type="text" placeholder="Sets"/>
        <input type="text" placeholder="Weight" />
        <input type="text" placeholder="Reps"/>
      </div>
    </div>
  </div>
);


//------------------------------------------------------------------------------------------------------------------------------------//

//End

//------------------------------------------------------------------------------------------------------------------------------------//
export default App;
