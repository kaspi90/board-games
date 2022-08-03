import "./Login.css";
import React from "react";

function Login() {
  const [loginInfo, setLoginInfo] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const loginName = event.target.name;
    const loginValue = event.target.value;

    const newLoginInfo = {
      ...loginInfo,
      [loginName]: loginValue,
    };
    setLoginInfo(newLoginInfo);
  };
  const [missing, setMissing] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (loginInfo.email <= 0 || loginInfo.password <= 0) {
      setMissing("email or password missing");
    } else {
      setMissing("Login successfully");
      setLoginInfo({ email: "", password: "" });
    }
  };
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="login-email"
          name="email"
          placeholder="email"
          value={loginInfo.email}
          onChange={handleChange}
        />
        <input
          type="password"
          className="login-password"
          name="password"
          placeholder="password"
          value={loginInfo.password}
          onChange={handleChange}
        />
        <p>{missing}</p>
        <input type="submit" value="Login" className="login-submit" />
      </form>
    </div>
  );
}

export default Login;
