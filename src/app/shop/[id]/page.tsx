"use client";
import Header from "@/components/header";
import { error, success } from "@/lib/toast";
import { getProductById } from "@/service/net";
import { TProduct } from "@/types/t-user";
import { useParams } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";

export default function ProductViewPage() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<TProduct | null>(null);
  const getP = async (id: string) => {
    setLoading(true);
    const product = await getProductById(id);
    if (product == null) {
      error("Product not found");
      return;
    }
    setLoading(false);
    setProduct(product);
  };
  useEffect(() => {
    getP(params.id as string);
  }, [params.id as string]);
  return (
    <Fragment>
      <Header />
      <section className="th-product-wrapper product-details space-top space-extra-bottom">
        <div className="container">
          {loading && (
            <div className="text-center">Loading product details...</div>
          )}
          {!loading && product && (
            <div className="row">
              <div className="col-lg-6">
                <div className="product-big-img">
                  <img
                    src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${product.path}`}
                    alt="Product Image"
                    className="w-100"
                  />
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="product-about">
                  <h2 className="product-title">{product.itemName}</h2>
                  <p className="price">${product.price}</p>
                  <p className="product-text">{product.description}</p>
                  <div className="product-actions">
                    <button
                      className="th-btn"
                      onClick={() => {
                        success("Product added to cart");
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {!loading && !product && (
            <div className="text-center">Product not found.</div>
          )}
        </div>
      </section>
    </Fragment>
  );
}
