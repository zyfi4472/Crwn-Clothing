import SignUp from "../../sign-up-form/sign-up-form.component";
import "./authentication.styles.css";
import "../../../contexts/user.context";
import Signin from "../../sign-in-form/sign-in-form.component";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <Signin />
      <SignUp />
    </div>
  );
};

export default Authentication;
