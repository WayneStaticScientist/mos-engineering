"use client";
import { useSessionState } from "@/stores/use-userstate";
import React from "react";
import { CgSpinner } from "react-icons/cg";

export default function LoginForm() {
  const session = useSessionState();
  return (
    <div className="space-bottom">
      <div className=" tw:w-full! tw:flex! tw:items-center! tw:justify-center! tw:flex-col!">
        <div className="tw:flex! tw:items-center! tw:justify-center! tw:flex-col! tw:mt-32! ">
          <form
            className="contact-form2 input-smoke  "
            onSubmit={(e) => {
              e.preventDefault();
              session.loginUser();
            }}
          >
            <h3 className="h2 mt-n3 mb-25">Login</h3>
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  onChange={(e) => session.updateEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group col-md-6">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="enter password"
                  onChange={(e) => session.updatePassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-btn col-12">
                <button className="th-btn fw-btn" disabled={session.loading}>
                  {session.loading ? (
                    <CgSpinner className="tw:animate-spin! tw:text-white!" />
                  ) : (
                    <span
                      className="btn-text"
                      data-back={session.loading ? "Loading..." : "Register"}
                      data-front={session.loading ? "Loading..." : "Register"}
                    />
                  )}
                </button>
              </div>
            </div>
            <p className="form-messages mb-0 mt-3" />
          </form>
        </div>
      </div>
    </div>
  );
}
