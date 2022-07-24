import { authService, firebaseInstance } from "fbase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "routes/Auth.module.css";
import AuthForm from "components/AuthForm";

function Auth() {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    console.log(event.target);
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  return (
    <div className={styles.authContainer}>
      <i className="fa-solid fa-book-bookmark"></i>
      <h1 className={styles.iconText}>Sign in to bookmark</h1>
      <AuthForm />
      <div className={styles.socialContainer}>
        <FontAwesomeIcon onClick={onSocialClick} icon={faGoogle} />
        <FontAwesomeIcon onClick={onSocialClick} icon={faGithub} />
      </div>
    </div>
  );
}

export default Auth;
