import React from "react";

function Form({ userIsRegistered }) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {userIsRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}

      <button type="submit">{userIsRegistered ? "Register" : "Login"}</button>
    </form>
  );
}

export default Form;
