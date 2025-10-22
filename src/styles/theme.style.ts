import "./global.css";

export const theme = {
  colors: {
    primary: "#3B82F6",
    secondary: "#E2E8F0",
    accent: "#10B981",
    danger: "#EF4444",
    dangerDark: "#DC2626",
    textDark: "#1F2937",
    textMuted: "#6B7280",
    bgLight: "#F8FAFC",
    bgCard: "#FFFFFF",
  },
  shadows: {
    soft: "0 4px 12px rgba(0, 0, 0, 0.05)",
  },
};

export type ThemeType = typeof theme;
