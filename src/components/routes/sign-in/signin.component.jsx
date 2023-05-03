import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>SIGN IN with google</button>
    </div>
  );
};
export default SignIn;
