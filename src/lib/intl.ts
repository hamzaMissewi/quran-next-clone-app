import {createSharedPathnamesNavigation} from "next-intl/navigation";

export const locales = ["en", "ar","fr"] as const;
export const localePrefix = "as-needed"; // Default

// export const routing = defineRouting({
//     // A list of all locales that are supported
//     locales: ['en', 'de'],
//     // Used when no locale matches
//     defaultLocale: 'en'
// });


export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });