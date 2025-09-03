import React from "react";

export default function SearchMenu() {
  return (
    <div className="popup-search-box d-none d-lg-block">
      <button className="searchClose">
        <i className="fal fa-times" />
      </button>
      <form action="#">
        <input type="text" placeholder="What are you looking for?" />
        <button type="submit">
          <i className="fal fa-search" />
        </button>
      </form>
    </div>
  );
}
