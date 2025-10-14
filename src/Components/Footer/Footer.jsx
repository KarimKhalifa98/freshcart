import React from "react";
import amazon from "../../Assets/Images/amazon.png";
import visa from "../../Assets/Images/visa.png";
import paypal from "../../Assets/Images/paypal.png";
import mastercard from "../../Assets/Images/mastercard.png";
import google from "../../Assets/Images/google-play.png";
import appstore from "../../Assets/Images/app-store.png";

export default function Footer() {
  return (
    <>
      <div className="bg-light py-4">
        <div className="bg-light container">
          <h3>Get The FreshCart App</h3>
          <p>
            We will send you a link, open it on your phone to download the app.
          </p>
          <div className="d-flex gap-3 border-bottom py-4">
            <input
              className="form-control focus-input w-75"
              type="email"
              placeholder="Email"
            />
            <button className="btn btn-success w-25">Share App Link</button>
          </div>
          <div className="d-flex gap-3 align-items-center justify-content-between border-bottom py-3">
            <div className="d-flex  align-items-center">
              <p className="h5">Payment Partners</p>
              <ul className="list-style-none d-flex gap-3 align-items-center">
                <li>
                  <img src={amazon} width={60} alt="Amazon Pay" />
                </li>
                <li>
                  <img src={mastercard} width={60} alt="Master Card" />
                </li>
                <li>
                  <img src={paypal} width={60} alt="PayPal" />
                </li>
                <li>
                  <img src={visa} width={60} alt="Visa" />
                </li>
              </ul>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <p className="h5">Get deliveries with FreshCart</p>
              <img src={google} width={200} alt="Google Play" />
              <img src={appstore} width={200} alt="App Store" />
            </div>
          </div>
          <div className="d-flex justify-content-between py-2">
            <div>
              <p className="text-black-50">
                © 2022 - 2024 FreshCart e-Commerce HTML Template. All rights
                reserved.
              </p>
              <p className="text-black-50">
                Powered by{" "}
                <span className="text-success fw-bolder">Karim Khalifa</span>
              </p>
            </div>
            <div className="d-flex align-items-center">
              <div>

              <p className="mb-0">Follow us on</p>
              </div>
              <a
                className="text-black mx-1"
                href="https://www.facebook.com/karim.khalifa.639265"
              >
                <i className="fa-brands fa-facebook-f px-2"></i>
              </a>
              <a className="text-black mx-1" href="https://x.com/Karim69608785">
                <i className="fa-brands fa-x-twitter px-2"></i>
              </a>
              <a
                className="text-black mx-1"
                href="https://www.linkedin.com/in/karimkhalifa98"
              >
                <i className="fa-brands fa-linkedin-in px-2"></i>
              </a>
              <a
                className="text-black mx-1"
                href="https://github.com/KarimKhalifa98"
              >
                <i className="fa-brands fa-github px-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
