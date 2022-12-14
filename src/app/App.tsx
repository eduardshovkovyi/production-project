import React, { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/route";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

export function App() {
  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
