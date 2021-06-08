import React from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import Result from "./Result";
import ResultTable from "./ResultTable";
import Table from "./Table";

function MainScreen() {
  const state = useSelector((state) => state.sgpa.list);
  const credit = state.map((credit) => parseInt(credit.credit));
  const totalCredit = credit.reduce((acc, item) => (acc += item), 0);

  const sgpa = state.map((credit) => parseFloat(credit.sgpa));
  const totalSgpa = sgpa.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const total = (totalSgpa / state.length).toFixed(2);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <Form />
          <Result totalCredit={totalCredit} total={total} />
        </div>
        <div className="col-lg-3">
          <ResultTable />
        </div>
        <div className="col-lg-3 mt-3 text-center">
          <label>DIU old credit list</label>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
