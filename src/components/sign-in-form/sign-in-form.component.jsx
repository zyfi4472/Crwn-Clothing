import { useState } from "react";
import { signInWithGooglePopup, userSignIn } from "../../utils/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.css";

const Signin = () => {
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

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };
  const signinHandler = async (event) => {
    event.preventDefault();

    try {
      const { user } = await userSignIn(email, password);
      resetInputFields();
      console.log(user);
      alert("Logged in successfully!!");
    } catch (error) {
      alert("unable to signIn" + error);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account? Sign In</h2>

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
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Signin;
