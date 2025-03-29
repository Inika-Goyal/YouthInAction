


import "./App.css";
import lightsandcubes from "./assets/lights-and-cubes.png";
import loginicons from "./assets/login-icons.png"; // Ensure you have this image in your assets folder
export const App = () => {
  return (
    <div className="landing-page">
    <div className="overlap-wrapper">
      <div className="overlap">

        <div className="overlap-group">
          <div className="login"  />
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
            <br />
            <br />
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

            <button className="login-button">Login</button>
          </div>
          <div className="text-wrapper-2">Youth In Action</div>
          <img
            className="photo"
            alt="Photo"
            src={lightsandcubes}
          />
          <img
            className="photo2"
            alt="Photo"
            src={loginicons}
          />
        </div>
      </div>
    </div>
  </div>
);};
export default App;