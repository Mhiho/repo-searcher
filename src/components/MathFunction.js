import React from "react";
import Layout from "../hoc/Layout";
import Factorial from "../_components/Factorial/Factorial";

function MathFunction() {
  return (
    <Layout>
      <Layout>
        <Factorial />
      </Layout>
    </Layout>
  );
}

export default MathFunction;
