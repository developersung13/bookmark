import { authService } from "fbase";
import { useState } from "react";
import "components/AuthForm.scss";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        // create account
        await authService.createUserWithEmailAndPassword(email, password);
      } else {
        // log in
        await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message.slice(9, error.message.indexOf(".") + 1));
    }
  };
  const closeErrorMsg = () => setError(false);
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  return (
    <div className="authInput">
      {error && (
        <>
          <span className="errorMsg">
            {error}
            <button onClick={closeErrorMsg}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </span>
          <div className="whiteSpace"></div>
        </>
      )}
      <form onSubmit={onSubmit}>
        <label htmlFor="email" className="authInput__email__label">
          Email address
        </label>
        <input
          name="email"
          type="email"
          value={email}
          required
          onChange={onChange}
          autoFocus={true}
          className="authInput__email"
        />
        <label htmlFor="password" className="authInput__password__label">
          Password
        </label>
        <input
          name="password"
          type="password"
          value={password}
          required
          minLength={6}
          onChange={onChange}
          className="authInput__password"
        />
        <input
          type="submit"
          value={newAccount ? "Create Account" : "Sign in"}
          className="authSubmit"
        />
      </form>
      <span className="auth__toggle">
        {newAccount || "New to bookmark?"}&nbsp;
        <span onClick={toggleAccount} className="auth__toggle__text">
          {newAccount ? "Sign in" : "Create Account ."}
        </span>
      </span>
    </div>
  );
}

export default AuthForm;
