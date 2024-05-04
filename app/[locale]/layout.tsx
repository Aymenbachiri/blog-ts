import AuthProvider from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MaterialTailwindProvider from "@/components/MaterialTailwindProvider";
import { ThProvider } from "@/components/ThemeProvider";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactElement;
  params: { locale: string };
}) {
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body>
        <AuthProvider>
          <ThProvider>
            <MaterialTailwindProvider>
              <>
                <Header />
                {children}
                <Footer />
              </>
            </MaterialTailwindProvider>
          </ThProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
