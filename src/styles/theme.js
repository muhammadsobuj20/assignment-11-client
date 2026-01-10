// Theme configuration for consistent design system
export const theme = {
  colors: {
    primary: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      500: "#14b8a6", // Main primary
      600: "#0d9488",
      700: "#0f766e",
      900: "#134e4a",
    },
    secondary: {
      50: "#fef3c7",
      100: "#fde68a",
      500: "#f59e0b", // Main secondary
      600: "#d97706",
      700: "#b45309",
    },
    accent: {
      50: "#fdf4ff",
      100: "#fae8ff",
      500: "#a855f7", // Main accent
      600: "#9333ea",
      700: "#7c3aed",
    },
    neutral: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    "2xl": "4rem",
  },
  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
  },
};

export const cardStyles = {
  base: "bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300",
  padding: "p-6",
  border: "border border-gray-200 dark:border-gray-700",
};

export const buttonStyles = {
  primary:
    "bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200",
  secondary:
    "bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200",
  outline:
    "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-200",
};
