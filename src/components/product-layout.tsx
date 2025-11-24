import { TProduct } from "@/types/t-user";
import React from "react";

export default function ProductLayout({ product }: { product: TProduct }) {
  return (
    <div className="col-xl-4 col-md-6">
      <div className="price-box style2 th-ani">
        <span className="offer-tag" />
        <img
          src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${product.path}`}
          alt=""
          width={500}
          height={500}
        />
        <p className="box-text2">{product.itemName}</p>
         <div className="box-content">
          <div className="available-list">
            {product.description.length > 200
              ? product.description.slice(0, 200) + "..."
              : product.description}
          </div>
        </div>
        <a
          href={`/shop/${product._id}`}
          className="th-btn black-btn th-icon fw-btn"
        >
          <span
            className="btn-text"
            data-back="View Product"
            data-front="View Product"
          />
          <i className="fa-regular fa-arrow-right ms-2" />
        </a>
      </div>
    </div>
  );
}
