import Link from "next/link";
import React from "react";

export default function ServiceDetail({
  title,
  summary,
  imageSrc,
  checkList,
}: {
  title: string;
  summary: string[];
  imageSrc?: string;
  checkList?: string[];
}) {
  return (
    <section className="space-top space-extra-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-lg-8">
            <div className="page-single">
              <div className="page-img global-img mb-35">
                <img
                  src={imageSrc ?? "/assets/img/bg/breadcumb-bg.jpg"}
                  alt="Service Image"
                />
              </div>
              <div className="page-content">
                <h2 className="h2 page-title mb-20">{title}</h2>
                {summary.map((e, i) => (
                  <p className="blog-text mb-30" key={i}>
                    {e}
                  </p>
                ))}
                {checkList && (
                  <div className="row gy-4 gx-40">
                    <div className="col-xl-4">
                      <div className="checklist style6">
                        <ul>
                          {checkList.map((e, i) => (
                            <li key={i}>{e}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-4">
            <aside className="sidebar-area">
              <div className="widget widget_search">
                <form className="search-form">
                  <input type="text" placeholder="Enter Keyword" />
                  <button type="submit">
                    <i className="far fa-search" />
                  </button>
                </form>
              </div>
              <div className="widget widget_nav_menu">
                <h3 className="widget_title style2">All Services</h3>
                <div className="menu-all-pages-container">
                  <ul>
                    <li>
                      <Link href="/electrical-engineering">
                        Electrical Engineering & Maintenance
                      </Link>
                    </li>
                    <li>
                      <Link href="/industrial-automation">
                        Industrial Automation & PLCs
                      </Link>
                    </li>
                    <li>
                      <Link href="/solar-panel-installation">
                        Solar Panel Installation & Maintenance
                      </Link>
                    </li>
                    <li>
                      <Link href="/industrial-mining-supplies">
                        Industrial and Mining Supplies
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
