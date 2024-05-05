import React from "react";
import styles from "./style.module.css";

const ApplicationCard = (props) => {
  const data = props.cardData;
  return (
    <div className={styles.gridContainer}>
      {Array.isArray(data) &&
        data.length > 0 &&
        data.map((item) => (
          <div className={styles.cardWrapper}>
            <div className={styles.ellipseCard}>Posted 5 days ago</div>
            <div style={{ display: "flex" }}>
              <img
                src={item.logoUrl}
                alt="Company Logo"
                className={styles.imgWrapper}
              />
              <div>
                <div className={styles.companyName}>{item.companyName}</div>
                <div>{item.jobRole} Engineer</div>
                <div>{item.location}</div>
              </div>
            </div>
            <div className={styles.estimatedSalary}>
              Estimated Salary: ₹{`${item.minJdSalary}-${item.maxJdSalary}`} LPA
            </div>
            <div className={styles.aboutContainer}>
            <div className={styles.aboutCompanyTitle}>About Company:</div>
            <div id="text" className={styles.description}>{item.jobDetailsFromCompany}</div>
            </div>
            <div className={styles.minExpContainer}>
            <div className={styles.minExpTitle}>Minimum Experiance</div>
            <span>{item.minExp ? item.minExp : 8} years</span>
            </div>

            <div className={styles.buttonsContainer}>
            <button className={styles.buttonWrapper}>Easy Apply</button>
            <button
              className={`${styles.buttonWrapper} ${styles.unlockButtonWrapper}`}
            >
              Unlock refferal asks
            </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ApplicationCard;
