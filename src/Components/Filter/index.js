import React from "react";

const Filter = (props) => {
  function filterFunction() {
    const value = document.getElementById("myInput").value.toUpperCase();
    const filtered = props.cardData.filter((item) =>
      item.companyName.toLowerCase().includes(value.toLowerCase())
    );
    props.setFilteredData(filtered);
  }

  return (
    <div>
      <div style={{ margin: "50px" }}>
        <input
          type="text"
          placeholder="Search Company Name"
          id="myInput"
          onChange={filterFunction}
        />
      </div>
    </div>
  );
};

export default Filter;
