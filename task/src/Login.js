import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initialvalues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, []);

  const validate = (values) => {
    const errors = {};
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const numbers = /^[0-9]+$/;
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not Valid Email";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (!numbers.test(values.password)) {
      errors.password = "This is not Valid Password";
    } else if (values.password.length >= 10 || values.password.length >= 2) {
      errors.password =
        "Password must be  10 when each numberic Characters is Added";
      const split_str = formValues.password.split("");
      var arr = split_str.map(Number);
      let sum = 0;
      for (let i = 0; i <= arr.length - 1; i++) {
        sum = sum + arr[i];
      }
      console.log("sum", sum);
      if (sum === 10) {
        navigate("/selectbox");
      }
    }
    // }else if()

    return errors;
  };
  return (
    <div>
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div> Signed in successfully</div>
            ) : (<pre>{JSON.stringify(formValues, undefined, 2)}</pre>)} */}
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            {" "}
            <label>Email</label>{" "}
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red " }}>{formErrors.email}</p>
          <div>
            <label>Password</label>{" "}
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.password}</p>
          <input type="submit" name="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};
export default Login;
