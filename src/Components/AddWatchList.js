import React from "react";

const AddWatchList = () => {
  return (
    <div>
      <span
        className="mr-2"
        style={{ verticalAlign: "middle", color: "rgb(255, 210, 80)" }}
      >
        Add to Watchlist{" "}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="rgb(255, 210, 80)"
        class="bi bi-plus-lg"
        viewBox="0 0 16 16"
        style={{ verticalAlign: "middle" }}
      >
        <path
          fill-rule="evenodd"
          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
        />
      </svg>
    </div>
  );
};

export default AddWatchList;
