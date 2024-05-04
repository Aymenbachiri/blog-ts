import { ReactNode } from "react";

import { NextIntlClientProvider, IntlConfig } from "next-intl";

interface MyCustomNextIntlClientProviderProps
  extends Omit<IntlConfig, "locale"> {
  locale: string;
  timeZone: string;
  now: Date;
  children: ReactNode;
}

export default function MyCustomNextIntlClientProvider({
  locale,
  timeZone,
  now,
  children,
  ...rest
}: MyCustomNextIntlClientProviderProps) {
  return (
    <NextIntlClientProvider
      defaultTranslationValues={{
        i: (text: ReactNode) => <i>{text}</i>,
      }}
      locale={locale}
      timeZone={timeZone}
      now={now}
      {...rest}
    >
      {children}
    </NextIntlClientProvider>
  );
}
