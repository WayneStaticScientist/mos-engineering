"use client";
import React from "react";
import { Constants } from "@/lib/utils";
import SearchMenu from "./ui/search-menu";
import MenuWrapper from "./ui/menu-wrapper";
import SideMenuWrapper from "./ui/side-menu-wrapper";
import Link from "next/link";
import { useSessionState } from "@/stores/use-userstate";
import { useEffect } from "react";
export default function Header() {
  const session = useSessionState();
  useEffect(() => {
    session.initializeUser();
  }, []);
  return (
    <>
      <>
        <SideMenuWrapper />
        <SearchMenu />
        <MenuWrapper />
      </>
      <header className="th-header header-layout1">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-md-between align-items-center">
              <div className="col-auto d-none d-md-block">
                <div className="header-links">
                  <ul>
                    <li className="d-none d-xl-inline-block tw:text-white!">
                      <i className="fa-light fa-clock tw:text-white!" />
                      <span className="tw:text-white!">Mon - Sun 24hrs</span>
                    </li>
                    <li className="">
                      <i className="fa-sharp fa-regular fa-location-dot" />
                      <span>{Constants.ADDRESS}</span>
                    </li>
                    <li>
                      <i className="fa-regular fa-envelope" />
                      <a href={`mailto:${Constants.EMAIL_ADDRESS}`}>
                        {Constants.EMAIL_ADDRESS}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="social-links">
                  <span className="social-title">Follow Us On:</span>
                  <a href={Constants.INSTAGRAM}>
                    <i className="fab fa-instagram" />
                  </a>
                  <a href={`mailto:${Constants.EMAIL_ADDRESS}`}>
                    <i className="fab fa-google" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container-fiuld">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a href="home-solar-energy.html">
                      <img
                        src="/assets/img/logo-white.png"
                        alt="Mos-Engineering "
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto me-xl-auto">
                  <nav className="main-menu style2 d-none d-lg-inline-block">
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
                    {session.user.role == "admin" && (
                        <li>
                          <a href="/upload">Upload</a>
                        </li>
                      )} 
                    </ul>
                  </nav>
                  <div className="header-button">
                    <button
                      type="button"
                      className="th-menu-toggle d-inline-block d-lg-none"
                    >
                      <i className="far fa-bars" />
                    </button>
                  </div>
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <button type="button" className="icon-btn searchBoxToggler">
                      <i className="far fa-search" />
                    </button>
                    <a
                      href="#"
                      className="icon-btn sideMenuToggler d-none d-lg-block tw:items-center! tw:justify-center! tw:flex!"
                    >
                      <img src="/assets/img/icon/grid.svg" alt="" />
                    </a>
                    <a
                      href={`tel:${Constants.PHONE_NUMBERS[0]}`}
                      className="th-btn th-icon"
                    >
                      <span
                        className="btn-text"
                        data-back={`Call For Help Us: ${Constants.PHONE_NUMBERS[0]} `}
                        data-front={`Call For Help Us: ${Constants.PHONE_NUMBERS[1]}`}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="logo-bg"
              data-mask-src="/assets/img/logo_bg_mask.png"
            />
          </div>
        </div>
      </header>
    </>
  );
}
