import Link from "next/link";
import React from "react";

export default function MenuWrapper() {
  return (
    <div className="th-menu-wrapper">
      <div className="th-menu-area text-center">
        <button className="th-menu-toggle">
          <i className="fal fa-times" />
        </button>
        <div className="mobile-logo">
          <a href="home-solar-energy.html">
            <img src="/assets/img/logo-white.png" alt="Mos-Engineering " />
          </a>
        </div>
        <div className="th-mobile-menu">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li className="menu-item-has-children">
              <a href="#">Services</a>
              <ul className="sub-menu">
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
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            {session.loggedIn && session.user.role === "admin" && (
                        <li>
                          <a href="/upload">Upload</a>
                        </li>
                      )}
          </ul>
        </div>
      </div>
    </div>
  );
}
