import React from "react";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { _id } = useParams();
  return (
    <div className="detail-page">
      <h1>DetailPage</h1>
      <div>{_id}</div>
    </div>
  );
}
