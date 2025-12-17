import React from "react";
import Logo from "../../../components/Logo/Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const { t, i18n } = useTranslation();

  const handleLogOut = () => {
    logOut().catch(console.log);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const links = (
    <div className="text-xl flex font-medium text-black">
      <li><NavLink to="">{t("services")}</NavLink></li>
      <li><NavLink to="/send-parcel">{t("send parcel")}</NavLink></li>
      <li><NavLink to="/rider">{t("rider")}</NavLink></li>
      <li><NavLink to="/coverage">{t("coverage")}</NavLink></li>

      {user && (
        <>
          <li><NavLink to="/dashboard/my-parcels">{t("my parcels")}</NavLink></li>
          <li><NavLink to="/dashboard">{t("dashboard")}</NavLink></li>
        </>
      )}

      <li><NavLink to="">{t("About Us")}</NavLink></li>
    </div>
  );

  return (
    <div className="navbar fixed z-30 shadow-sm bg-linear-to-r from-[#FFF7F1] via-[#FFF1E6] to-[#FFE8D6]">
      
      {/* 🔹 Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <span className="btn btn-ghost text-xl">
          <Logo />
        </span>
      </div>

      {/* 🔹 Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      {/* 🔹 Navbar End */}
      <div className="navbar-end gap-3">

        {/* 🌍 Language Selector */}
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          defaultValue={localStorage.getItem("lang") || "en"}
          className="select select-sm border  w-20 border-[#f66f08] text-[#f66f08] font-semibold"
        >
          <option value="en">EN</option>
          <option value="bn">বাংলা</option>
        </select>

        {user ? (
          <button onClick={handleLogOut} className="btn">
            {t("logout")}
          </button>
        ) : (
          <Link
            to="/login"
            className="border-2 text-xl font-bold px-4 border-[#f66f08] text-[#f66f08] rounded-full py-1"
          >
            {t("Login")}
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
