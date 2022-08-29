import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        body: "K2D, system-ui, sans-serif",
        heading: "K2D, Georgia, serif",
        mono: "K2D, Menlo, monospace",
    },
    colors: {
        palette: {
            main: "#79B4B7",
            secondary: "#F8F0DF",
            footer: "#79B4B7",
            body: "#FEFBF3",
            container: "#FFFFFF"
        },
        menu: {
            50: "#E4F2E3",
            100: "#D1E9D4",
            200: "#BFDFC9",
            300: "#ADD6C1",
            400: "#9BCCBC",
            500: "#79B4B7",
            600: "#6992A1",
            700: "#59738B",
            800: "#4A5774",
            900: "#3A3E5E",
        }
    },
})
