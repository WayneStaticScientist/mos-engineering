import Header from "@/components/header";
import Footer from "@/components/footer";
import React, { Fragment } from "react";
import BreadCrump from "@/components/breadcrumpt";
import LoginForm from "@/components/login-form";

export default function LoginPage() {
  return (
    <Fragment>
      <Header />
      <BreadCrump title="Login" />
      <LoginForm />
      <Footer />
    </Fragment>
  );
}
