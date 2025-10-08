import Header from "@/components/header";
import Footer from "@/components/footer";
import React, { Fragment } from "react";
import BreadCrump from "@/components/breadcrumpt";
import RegisterForm from "@/components/register-form";

export default function RegisterPage() {
  return (
    <Fragment>
      <Header />
      <BreadCrump title="Register" />
      <RegisterForm />
      <Footer />
    </Fragment>
  );
}
