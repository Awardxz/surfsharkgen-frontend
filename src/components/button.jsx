import { useState } from "react";
import "./button.css";
import axios from "axios";

function Action(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonReal,setButtonReal] = useState(true)
  const getEmail = () => {
    setLoading(true);
    setButtonReal(false)
    axios
      .post(
        "http://192.168.1.34:8080/getAccount",
        {},
        {
          timeout: 50000,
        }
      )
      .then((res) => {
        console.log(res.data);
        setEmail(res.data.email)
        setPassword(res.data.password)
        setButtonReal(true)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setButtonReal(true)
        setLoading(false);
      });
  };
  return (
    <div className="btn">
      {loading && <div className="loader"></div>} {/* Conditionally render the loader */}
      {buttonReal && <button onClick={getEmail}>{props.title}</button>}
      <p>Email : {email}</p>
      <p>Password :{password}</p>
    </div>
  );
}

export default Action;
