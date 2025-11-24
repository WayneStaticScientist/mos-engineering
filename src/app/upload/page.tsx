"use client";
import Header from "@/components/header";
import { error, success } from "@/lib/toast";
import { uploadProduct } from "@/service/net";
import React, { Fragment, useState } from "react";
import { CgSpinner } from "react-icons/cg";

export default function UploadPage() {
  const [loading, setLoading] = useState(false);
  const upload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setLoading(true);
    const result = await uploadProduct(
      localStorage.getItem("token") ?? "",
      localStorage.getItem("deviceId") ?? "",
      formData
    );
    setLoading(false);
    if (!result.success) {
      return error(result.message ?? "Something went wrong");
    }
    success("Product uploaded successfully");
    window.location.href = "/upload";
  };
  return (
    <Fragment>
      <Header />
      <div
        className="breadcumb-wrapper"
        data-bg-src="/assets/img/bg/breadcumb-bg.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Upload Product</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Upload Product</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-bottom">
        <div className="tw:w-full! tw:flex! tw:items-center! tw:justify-center! tw:flex-col!">
          <div className="tw:flex! tw:items-center! tw:justify-center! tw:flex-col! tw:mt-32! ">
            <form className="contact-form2 input-smoke" onSubmit={upload}>
              <h3 className="h2 mt-n3 mb-25">Upload New Product</h3>
              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="productImage" className="form-label">
                    Product Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="file"
                    id="file"
                    accept="image/*"
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="itemName"
                    id="itemName"
                    placeholder="Item Name"
                    required
                  />
                </div>
                <div className="form-group col-12">
                  <textarea
                    name="description"
                    id="description"
                    cols={30}
                    rows={5}
                    className="form-control"
                    placeholder="Product Description"
                    required
                  />
                </div>
                <div className="form-btn col-12">
                  <button className="th-btn fw-btn">
                    {loading && <CgSpinner className="tw:animate-spin!" />}
                    {!loading && (
                      <span
                        className="btn-text"
                        data-back="Upload Product"
                        data-front="Upload Product"
                      />
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
