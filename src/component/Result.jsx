import React from "react";
import { useSelector } from "react-redux";

function Result({ total, totalCredit }) {
  const state = useSelector((state) => state.sgpa.list);

  return (
    <>
      {Object.keys(state).length === 0 ? null : (
        <div className="result mt-4 text-center">
          <h4>
            Completed Credit : <strong> {totalCredit} </strong>
          </h4>
          <h4>
            Your CGPA : <strong> {total} </strong>
          </h4>
        </div>
      )}
    </>
  );
}

export default Result;
