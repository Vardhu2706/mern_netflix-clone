// Login Page

// Importing Helpers

// Importing Styles
import "./LoginStyles.scss";

// Functional Component
function LoginPage() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <div className="content-wrapper">
          <form>
            <div className="loginFormMain">
              <h1>Sign In</h1>
              <input type="email" placeholder="Email or phone number" />
              <input type="password" placeholder="Password" />
              <button className="loginButton">Sign In</button>
            </div>
            <div className="loginFormOther">
              <span>
                New to Netflix? <b>Sign up now.</b>
              </span>
              <small>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <b>Learn more</b>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Default Export
export default LoginPage;
