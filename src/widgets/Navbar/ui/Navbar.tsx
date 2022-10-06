import React from "react";
import { AppRoutes, RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink to={RoutePath[AppRoutes.MAIN]} theme={AppLinkTheme.SECONDARY}>
          {t("Home page")}
        </AppLink>
        <AppLink to={RoutePath[AppRoutes.ABOUT]} theme={AppLinkTheme.SECONDARY}>
          {t("About page")}
        </AppLink>
      </div>
    </div>
  );
};
