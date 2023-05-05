import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "..//..//utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.css";
import Button from "../button/button.component";

const SignUp = () => {
  const defaultInputField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [inputFileds, setInputField] = useState(defaultInputField);
  const { displayName, email, password, confirmPassword } = inputFileds;

  console.log(inputFileds);

  const resetInputFields = () => {
    setInputField(defaultInputField);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setInputField({ ...inputFileds, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetInputFields();
      console.log(user);
    } catch (error) {
      alert("Error in creating user" + error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>SIGN UP USING EMAIL AND PASSWORD</span>

      <form onSubmit={submitHandler}>
        <FormInput
          label="Name"
          type="text"
          required
          name="displayName"
          onChange={changeHandler}
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={changeHandler}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={changeHandler}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={changeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
export default SignUp;
