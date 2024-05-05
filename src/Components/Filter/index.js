import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import cross from "./cross.png";

const Filter = (props) => {
  const [rolesData, setRolesData] = useState([]);
  const remoteData = ["remote", "In-office"];
  const minSalary = ["0L", "10L", "20L", "40L", "60L", "70L"];
  const experience = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function filterFunction() {
    const value = document.getElementById("myInput").value.toUpperCase();
    const filterData = props.cardData.filter((item) =>
      item.companyName.toUpperCase().includes(value)
    );
    props.setFilterData(filterData);
  }

  function getExperianceYears() {
    const rolesData = [];
    props.cardData.forEach((item) => {
      if (!rolesData.includes(item.jobRole)) {
        rolesData.push(item.jobRole);
      }
    });
    return rolesData;
  }

  const [arrow, setArrow] = useState(false);

  function onRolesClick() {
    setArrow((prev) => !prev);
  }
  const [remoteArrow, setRemoteArrow] = useState(false);

  function onRemoteClick() {
    setRemoteArrow((prev) => !prev);
  }
  const [minSalaryArrow, setMinSalaryArrow] = useState(false);

  function onMinSalaryClick() {
    setMinSalaryArrow((prev) => !prev);
  }

  const [experienceArrow, setExperienceArrow] = useState(false);

  function onExperienceClick() {
    setExperienceArrow((prev) => !prev);
  }

  const [roleLabel, setRoleLabel] = useState("");
  function rolesClick(data) {
    setRoleLabel(data);
    setArrow((prev) => !prev);
    const filterData = props.cardData.filter((item) =>
      item.jobRole.includes(data)
    );
    props.setFilterData(filterData);
  }

  const [remoteLabel, setRemoteLabel] = useState("");
  function remoteClick(data) {
    console.log(data, "data");
    setRemoteLabel(data);
    setRemoteArrow((prev) => !prev);
    const filterData = props.cardData.filter((item) =>
      item.location.includes(data.toLowerCase())
        ? item.location.includes("remote")
        : !item.location.includes("remote")
    );
    props.setFilterData(filterData);
  }

  const [minSalaryLabel, setMinSalaryLabel] = useState("");
  function minSalaryClick(data) {
    let str = data;
    setMinSalaryLabel(data);
    setMinSalaryArrow((prev) => !prev);
    let extractedNumber = str.match(/\d+/)[0];
    const filterData = props.cardData.filter(
      (item) => item.minJdSalary > Number(extractedNumber)
    );
    props.setFilterData(filterData);
  }

  const [experienceLabel, setExperienceLabel] = useState("");
  function experienceClick(data) {
    setExperienceLabel(data);
    setExperienceArrow((prev) => !prev);
    const filterData = props.cardData.filter((item) => item.minExp <= data);
    console.log(filterData, "filterData");
    props.setFilterData(filterData);
  }

  const removeExpFilter = () => {
    setExperienceLabel("");
    props.setFilterData([]);
  };

  const removeMinPayFilter = () => {
    setMinSalaryLabel("");
    props.setFilterData([]);
  };

  const removeRemoteFilter = () => {
    setRemoteLabel("");
    props.setFilterData([]);
  };

  const removeRoleFilter = () => {
    setRoleLabel("");
    props.setFilterData([]);
  };
  useEffect(() => {
    setRolesData(getExperianceYears());
    console.log(props.cardData, "props.cardData");
  }, [props.cardData]);

  return (
    <div className={style.container}>
      <div>
        <input
          type="text"
          placeholder="Search Company Name"
          id="myInput"
          onChange={filterFunction}
        />
      </div>

      <div className={style.experienceContainer}>
        <div className={style.experienceHeaderContainer}>
          {roleLabel !== "" ? (
            <span className={style.labelWrapper}>
              {roleLabel}{" "}
              <img
                onClick={removeRoleFilter}
                className={style.crossIcon}
                src={cross}
                alt="cross"
              />
            </span>
          ) : (
            "Roles"
          )}{" "}
          |{" "}
          <span
            className={`${style.arrow} ${arrow ? style.up : style.down}`}
            onClick={onRolesClick}
          />
        </div>
        {arrow && (
          <div className={style.listWrapper}>
            {rolesData.map((item) => (
              <div
                className={style.listItem}
                onClick={() => item && rolesClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={style.experienceContainer}>
        <div className={style.experienceHeaderContainer}>
          {remoteLabel !== "" ? (
            <span className={style.labelWrapper}>
              {remoteLabel}{" "}
              <img
                onClick={removeRemoteFilter}
                className={style.crossIcon}
                src={cross}
                alt="cross"
              />
            </span>
          ) : (
            "Remote"
          )}{" "}
          |{" "}
          <span
            className={`${style.arrow} ${remoteArrow ? style.up : style.down}`}
            onClick={onRemoteClick}
          />
        </div>
        {remoteArrow && (
          <div className={style.listWrapper}>
            {remoteData.map((item) => (
              <div
                className={style.listItem}
                onClick={() => item && remoteClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={style.experienceContainer}>
        <div className={style.experienceHeaderContainer}>
          {minSalaryLabel !== "" ? (
            <span className={style.labelWrapper}>
              {minSalaryLabel}{" "}
              <img
                onClick={removeMinPayFilter}
                className={style.crossIcon}
                src={cross}
                alt="cross"
              />
            </span>
          ) : (
            "Minimum Base Pay Salary"
          )}{" "}
          |{" "}
          <span
            className={`${style.arrow} ${
              minSalaryArrow ? style.up : style.down
            }`}
            onClick={onMinSalaryClick}
          />
        </div>
        {minSalaryArrow && (
          <div className={style.listWrapper}>
            {minSalary.map((item) => (
              <div
                className={style.listItem}
                onClick={() => item && minSalaryClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={style.experienceContainer}>
        <div className={style.experienceHeaderContainer}>
          {experienceLabel !== "" ? (
            <span className={style.labelWrapper}>
              {experienceLabel}{" "}
              <img
                onClick={removeExpFilter}
                className={style.crossIcon}
                src={cross}
                alt="cross"
              />
            </span>
          ) : (
            "Experience"
          )}{" "}
          |{" "}
          <span
            className={`${style.arrow} ${
              experienceArrow ? style.up : style.down
            }`}
            onClick={onExperienceClick}
          />
        </div>
        {experienceArrow && (
          <div className={style.listWrapper}>
            {experience.map((item) => (
              <div
                className={style.listItem}
                onClick={() => item && experienceClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
