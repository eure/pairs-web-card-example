import React from "react";

import "./index.css";

export function Card(props) {
  return (
    <div
      className={`card ${props.isLiked ? "card-liked" : ""} ${
        props.isSkipped ? "card-skipped" : ""
      }`}
      style={{
        backgroundImage: `url(${props.image})`
      }}
    >
      <div className="info">
        <div className="name">
          <span>
            <svg style={{ width: "10px", height: "10px" }} viewBox="0 0 24 24">
              <path
                fill="#01cb6f"
                d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
              />
            </svg>
          </span>
          <span>{props.name}</span>
          <span className="age">{props.age}歳</span>
          <span className="prefecture">{props.prefecture}</span>
          <span className="percent">
            <span>
              <svg
                style={{ width: "10px", height: "10px" }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#f67272"
                  d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                />
              </svg>
            </span>
            <span>{props.rate}%</span>
          </span>
        </div>
        <div className="communities">
          <span className="community">{props.community}</span>
        </div>
      </div>
    </div>
  );
}
