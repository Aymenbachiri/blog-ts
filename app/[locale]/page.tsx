"use client";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Navbar");
  return <h1 className="mt-[110px]">{t("home")}</h1>;
}
