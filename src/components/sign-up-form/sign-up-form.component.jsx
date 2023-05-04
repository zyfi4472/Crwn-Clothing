import { connectFirestoreEmulator } from "firebase/firestore";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "..//..//utils/firebase.utils";

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
    <div>
      <h1>SIGN UP USING EMAIL AND PASSWORD</h1>

      <form onSubmit={submitHandler}>
        <label>Name</label>
        <input
          type="text"
          required
          name="displayName"
          onChange={changeHandler}
          value={displayName}
        />
        <label>Email</label>
        <input
          type="email"
          required
          onChange={changeHandler}
          name="email"
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          required
          onChange={changeHandler}
          name="password"
          value={password}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={changeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUp;
