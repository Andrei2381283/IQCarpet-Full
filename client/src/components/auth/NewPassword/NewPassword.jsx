import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./NewPassword.css";

const NewPassword = () => {
  const hookForm = useForm();
  const {handleSubmit, setValue, trigger, formState: { errors } } = hookForm;
  const reghook = hookForm.register;

  const [formData, setFormData] = useState({
    password: "",
    password2: ""
  });

  const {
    password,
    password2
  } = formData;
  
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValue(e.target.name, e.target.value);
    trigger(e.target.name);
  }

  const onSubmit = () => {

  }

  return (
    <form onSubmit={handleSubmit()} className="authorizingBlock">
      <span className="newPassHeader">Password Recovery</span>
      <div className="authField newPassBlock1">
        <span className="authFieldName">Make a new Password</span>
        <input
          className="authFieldInput"
          type="password"
          placeholder="Password"
          value={password}
          aria-invalid={!!errors.password + ""}
          {...reghook("password", { required: true,  minLength: 6})}
          onChange={onChange}
        />
      </div>
      <div className="authField newPassBlock2">
        <span className="authFieldName">Repeat a new Password</span>
        <input
          className="authFieldInput"
          type="password"
          placeholder="Password"
          value={password2}
          aria-invalid={!!errors.password2 + ""}
          {...reghook("password2", { required: true,  minLength: 6})}
          onChange={onChange}
        />
      </div>
      <div className="submitButtonDiv">
        <button type="submit" className="submitButton">Done</button>
      </div>
    </form>
  );
};

export default NewPassword;
