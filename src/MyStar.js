import React, { useState } from "react";

export default function App() {
  const [maxRating, setMaxRating] = useState(5);
  const [tempRating, setTempRating] = useState();

  return (
    <>
      <StarRating
        maxRating={maxRating}
        onTempRating={setTempRating}
        tempRating={tempRating}
      ></StarRating>
    </>
  );
}

function StarRating({ maxRating, onTempRating, tempRating }) {
  const [rating, setRating] = useState();

  function ratingHandler(e) {
    setRating(e);
  }
  const containerStyle = {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  };
  const textStyle = {
    width: "100%",
    display: "block",
    marginTop: "10px",
    marginBottom: "10px",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: "1",
    marginLeft: "20px",
    fontSize: `22px`,
    color: "white",
  };
  return (
    <div container style={containerStyle}>
      {Array.from({ length: maxRating }, (_, i) => {
        return (
          <Star
            key={i}
            color="#e4d845"
            onRating={() => ratingHandler(i + 1)}
            isFull={i + 1 <= rating}
            onTempRating={() => onTempRating(i + 1)}
          />
        );
      })}
      <p style={textStyle}> Rated : {rating}</p>
      <p style={textStyle}> Temp Rated : {tempRating}</p>
    </div>
  );
}

function Star({ key, color, onRating, isFull, onTempRating }) {
  const starContainer = {
    display: "inline",
    width: "50%",
    height: "100%",
  };
  const style = {
    width: "50px",
    height: "50px",
    display: "inline-block",
    transform: "scale(0.8)",
    transition: "transform 0.3s",
    backgroudColor: "red",
  };
  const starStyle = {
    width: "50px",
    height: "50px",
    display: "block",
    cursor: "pointer",
  };
  return (
    <div style={starContainer}>
      <div
        style={style}
        onClick={() => {
          onRating(key);
        }}
        onMouseEnter={onTempRating}
        onMouseLeave={() => {
          onTempRating(0);
        }}
      >
        <>
          {" "}
          {isFull ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill={color}
              stroke={color}
              style={starStyle}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke={color}
              style={starStyle}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          )}
        </>
      </div>
    </div>
  );
}
