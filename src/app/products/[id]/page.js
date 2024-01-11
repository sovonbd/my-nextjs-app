import React from "react";

const DynamicPage = ({ params, searchParams }) => {
  console.log(params, searchParams);
  return (
    <div>
      <h1>THis is dynamic page: {params.id}</h1>
      <h2>Search by: {searchParams.category}</h2>
    </div>
  );
};

export default DynamicPage;
