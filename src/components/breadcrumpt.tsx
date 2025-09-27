import React, { Fragment } from "react";

export default function BreadCrump({ title }: { title: string }) {
  return (
    <Fragment>
      <div
        className="breadcumb-wrapper"
        data-bg-src="/assets/img/bg/breadcumb-bg.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">{title}</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>{title}</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
