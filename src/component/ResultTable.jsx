import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSgpa } from "../actions/cgpaAction";

function ResultTable() {
  const state = useSelector((state) => state.sgpa.list);
  const dispatch = useDispatch();

  return (
    <>
      {Object.keys(state).length === 0 ? null : (
        <table className="table table-bordered mt-4 text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">SGPA</th>
              <th scope="col">Credit</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {state &&
            state.map((state) => (
              <tbody>
                <tr key={state.id}>
                  <th scope="row"> {state.name} </th>
                  <td> {state.sgpa} </td>
                  <td> {state.credit} </td>
                  <td>
                    <i
                      onClick={() => {
                        dispatch(deleteSgpa(state.id));
                      }}
                      className="fas fa-trash-alt"
                    ></i>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      )}
    </>
  );
}

export default ResultTable;
