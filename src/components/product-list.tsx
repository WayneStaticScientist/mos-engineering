"use client";
import React, { useEffect, useState } from "react";
import ProductLayout from "./product-layout";
import { TProduct } from "@/types/t-user";
import { getProducts } from "@/service/net";
import { set } from "mongoose";

export default function ProductLists() {
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<TProduct[]>([]);
  const fetchProducts = async (page: number) => {
    setLoading(true);
    setCurrentPage(page);
    setTotalPages(page + 5);
    const result = await getProducts(page);
    setProducts(result);
    setLoading(false);
  };
  useEffect(() => {
    fetchProducts(1);
  }, []);
  return (
    <section className="space">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Products</span>
          <h2 className="sec-title">View All Our Products</h2>
        </div>
        <div className="row gy-4 justify-content-center">
          {loading && <div>Loading...</div>}
          {!loading &&
            products.length > 0 &&
            products.map((product, index) => (
              <ProductLayout key={index} product={product} />
            ))}
          {!loading && products.length === 0 && <div>No products found</div>}
          <div className="row tw:mt-24!">
            <div className="col-12">
              <div className="th-pagination text-center">
                <ul>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <li key={page}>
                        <a
                          className={
                            currentPage === page
                              ? "active"
                              : " tw:cursor-pointer!"
                          }
                          onClick={() => fetchProducts(page)}
                        >
                          {page}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="shape-mockup d-none d-xxl-block"
        data-top="0%"
        data-right="0%"
      >
        <img src="/assets/img/shape/shape-1.png" alt="" />
      </div>
    </section>
  );
}
