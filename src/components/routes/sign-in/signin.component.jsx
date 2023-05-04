import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase.utils";
import SignUp from "../../sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>SIGN IN with google</button>

      <SignUp />
    </div>
  );
};
export default SignIn;
