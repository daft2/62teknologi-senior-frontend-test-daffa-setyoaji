import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const Business = (props: Props) => {
  let { businessId } = useParams();

  return <div>Business {businessId}</div>;
};

export default Business;
