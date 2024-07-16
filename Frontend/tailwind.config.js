/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1c1c1c",
        onyx: "#333333",
        textBrand: "var(--text-brand)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        textTertiary: "var(--text-tertiary)",
        textActive: "var(--text-active)",
        textHover: "var(--text-hover)",
        textSuccess: "var(--text-success)",
        textError: "var(--text-error)",
        textWarning: "var(--text-warning)",
        textInfo: "var(--text-info)",

        borderPrimary: "var(--border-primary)",

        bgBrand: "var(--bg-brand)",
        bgPrimary: "var(--bg-primary)",
        bgSecondary: "var(--bg-secondary)",
        bgTertiary: "var(--bg-tertiary)",
        bgQuaternary: "var(--bg-quaternary)",
        bgActive: "var(--bg-active)",
        bgHover: "var(--bg-hover)",
        bgSuccess: "var(--bg-success)",
        bgError: "var(--bg-error)",
        bgWarning: "var(--bg-warning)",
        bgInfo: "var(--bg-info)",

        brand: {
          25: "#fcfaff",
          50: "#f9f5ff",
          100: "#f4ebff",
          200: "#e9d7fe",
          300: "#d6bbfb",
          400: "#b692f6",
          500: "#9e77ed",
          600: "#7f56d9",
          700: "#6941c6",
          800: "#53389e",
          900: "#42307d",
        },
        error: {
          25: "#fffbfa",
          50: "#fef3f2",
          100: "#fee4e2",
          200: "#fecdca",
          300: "#fda29b",
          400: "#f97066",
          500: "#f04438",
          600: "#d92d20",
          700: "#b42318",
          800: "#912018",
          900: "#7a271a",
        },
        warning: {
          25: "#fffcf5",
          50: "#fffaeb",
          100: "#fef0c7",
          200: "#fedf89",
          300: "#fec84b",
          400: "#fdb022",
          500: "#f79009",
          600: "#dc6803",
          700: "#b54708",
          800: "#93370d",
          900: "#7a2e0e",
        },
        success: {
          25: "#f6fef9",
          50: "#ecfdf3",
          100: "#d1fadf",
          200: "#a6f4c5",
          300: "#6ce9a6",
          400: "#32d583",
          500: "#12b76a",
          600: "#039855",
          700: "#027a48",
          800: "#05603a",
          900: "#054f31",
        },
      },
    },
  },
  plugins: [
    nextui({
      // themes:{
      //   light:{
      //     colors:{
      //     }
      //   },
      //   dark:{
      //     colors:{
      //     }
      //   }
      // }
    }),
    require('@tailwindcss/typography'),
  ],
};
