import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import React from "react";
import { Button } from "shared/ui/Button/Button";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
  };

  return (
    <Button
      className={classNames(cls.langSwitcher, {}, [className])}
      onClick={toggle}
    >
      {t("language")}
    </Button>
  );
};