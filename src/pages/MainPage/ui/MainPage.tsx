import React, { FC } from "react";
import { useTranslation } from "react-i18next";

const MainPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("Home page")}</h1>
    </div>
  );
};

export default MainPage;
