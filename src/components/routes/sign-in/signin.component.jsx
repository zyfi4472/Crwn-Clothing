import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  userSignIn,
} from "../../../utils/firebase.utils";
import FormInput from "../../form-input/form-input.component";
import SignUp from "../../sign-up-form/sign-up-form.component";
import { useState, useContext } from "react";
import Button from "../../button/button.component";
import "./sign-in.styles.css";
import "../../../contexts/user.context";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  };

  const defaultInputField = {
    email: "",
    password: "",
  };

  const [inputFileds, setInputField] = useState(defaultInputField);
  const { email, password } = inputFileds;

  const { setCurrentUser } = useContext(useContext);

  console.log(inputFileds);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setInputField({ ...inputFileds, [name]: value });
  };
  const resetInputFields = () => {
    setInputField(defaultInputField);
  };

  const signinHandler = async (event) => {
    event.preventDefault();

    try {
      const { user } = await userSignIn(email, password);
      setCurrentUser(user);
      resetInputFields();
      console.log(user);
      alert("Logged in successfully!!");
    } catch (error) {
      alert("unable to signIn" + error);
    }
  };

  return (
    <div>
      <form onSubmit={signinHandler}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={onChangeHandler}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={onChangeHandler}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType="google"
            onClick={signInWithGooglePopup}
          >
            Google Sign In
          </Button>
        </div>
      </form>
      <SignUp />
    </div>
  );
};

export default SignIn;
