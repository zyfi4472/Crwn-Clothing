import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  userSignIn,
} from "../../../utils/firebase.utils";
import FormInput from "../../form-input/form-input.component";
import SignUp from "../../sign-up-form/sign-up-form.component";
import { useState } from "react";
import Button from "../../button/button.component";
import { signInWithEmailAndPassword } from "firebase/auth";

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
      const response = await userSignIn(email, password);
      resetInputFields();
      console.log(response);
      alert("Logged in successfully!!");
    } catch (error) {
      alert("unable to signIn" + error);
    }
  };

  return (
    <div>
      <button onClick={logGoogleUser}>SIGN IN with google</button>

      <SignUp />
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
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default SignIn;
