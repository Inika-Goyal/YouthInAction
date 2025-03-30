import lightsandcubes from "./assets/lights-and-cubes.png";
import loginicons from "./assets/login-icons.png"; 
import "./LoginPage.css";
import { useNavigate } from "react-router-dom"; 

export const Box = () => {
  return (
    <div className="box">
      <div className="rectangle" />
    </div>
  );
};

function LoginPage() {
  const navigate = useNavigate();  // Initialize navigate function

  const handleLogin = () => {
    // Add your login validation logic here

    // If login is successful, navigate to HomePage
    navigate("/user");
  };

  return (
    <div className="landing-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <Box />
            <div className="login" />
            <div className="login-container">
              <input 
                className="input" 
                id="email"
                placeholder="Enter Email" 
              />
              
              <input 
                type="password" 
                className="input"
                id="password" 
                placeholder="Enter Password" 
              />
              <div className="illuminate-change">
                Illuminate Change
                <br />
                <br/>
                <br/>
                Empower Communities
              </div>

              <p className="text-wrapper">
                Bridging the gap between young changemakers and organizations in
                need. From environmental action to education and community
                outreach, we make it easy for teens to give back.
              </p>
              <br/>
              <br/>
              <br/>

              <button className="login-button" onClick={handleLogin}>Login</button>
            </div>
            <div className="text-wrapper-2">Youth In Action</div>
            <img className="photo" alt="Photo" src={lightsandcubes} />
            <img className="photo2" alt="Photo" src={loginicons} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;