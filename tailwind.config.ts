import { type Config } from "tailwindcss";

export const colors = {
  primary: "hsl(var(--primary))",
  "primary-foreground": "hsl(var(--primary-foreground))",
  secondary: "hsl(var(--secondary))",
  "secondary-foreground": "hsl(var(--secondary-foreground))",
  muted: "hsl(var(--muted))",
  "muted-foreground": "hsl(var(--muted-foreground))",
  accent: "hsl(var(--accent))",
  "accent-foreground": "hsl(var(--accent-foreground))",
  destructive: "hsl(var(--destructive))",
  "destructive-foreground": "hsl(var(--destructive-foreground))",
  card: "hsl(var(--card))",
  "card-foreground": "hsl(var(--card-foreground))",
  popover: "hsl(var(--popover))",
  "popover-foreground": "hsl(var(--popover-foreground))",
  border: "hsl(var(--border))",
  ring: "hsl(var(--ring))",
  input: "hsl(var(--input))",
  background: "hsl(var(--bg-color))",
};

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
    },
  },
  plugins: [],
};

export default config;
