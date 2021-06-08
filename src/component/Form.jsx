import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSgpa } from "../actions/cgpaAction";

function Form() {
  const [name, setName] = useState("");
  const [credit, setCredit] = useState("");
  const [sgpa, setSgpa] = useState("");

  const dispatch = useDispatch();

  const addSgpadata = (e) => {
    e.preventDefault();
    setName("");
    setSgpa("");
    setCredit("");
    dispatch(addSgpa(name, credit, sgpa));
  };

  return (
    <div className="mt-4">
      <form onSubmit={addSgpadata}>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            required
            id="floatingInput"
            min="1"
            step="any"
            value={name}
            placeholder="Semester NO."
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label for="floatingInput">Semester NO.</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingInput"
            required
            min="1"
            step="any"
            value={credit}
            placeholder="Credit"
            onChange={(e) => {
              setCredit(e.target.value);
            }}
          />
          <label for="floatingPassword">Credit</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            required
            min="1"
            step="any"
            id="floatingInput"
            placeholder="SGPA"
            value={sgpa}
            onChange={(e) => {
              setSgpa(e.target.value);
            }}
          />
          <label for="floatingPassword">SGPA</label>
        </div>
        <button className="btn btn-primary" type="submit">
          submit <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
}

export default Form;
