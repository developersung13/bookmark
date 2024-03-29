import { authService, firebaseInstance } from "fbase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import "routes/Auth.scss";
import AuthForm from "components/AuthForm";

function Auth() {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  return (
    <div className="authContainer">
      <i className="fa-solid fa-book-bookmark"></i>
      <h1 className="iconText">Sign in to bookmark</h1>
      <AuthForm />
      <div className="authBtns">
        <button onClick={onSocialClick} name="google"></button>
        <FontAwesomeIcon icon={faGoogle} />
        <button onClick={onSocialClick} name="github"></button>
        <FontAwesomeIcon icon={faGithub} />
      </div>
    </div>
  );
}

export default Auth;
