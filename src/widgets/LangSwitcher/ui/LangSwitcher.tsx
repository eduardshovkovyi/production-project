import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import React from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
  };

  return (
    <Button
      className={classNames("", {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      {short ? t("lang") : t("language")}
    </Button>
  );
};
