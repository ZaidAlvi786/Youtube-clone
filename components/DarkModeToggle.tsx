import { ActionIcon } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

export default function DarkModeToggle() {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">({
    key: "mantine-theme",
    defaultValue: "light",
  });

  return (
    <motion.div
      animate={{ rotate: theme === "dark" ? 180 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <ActionIcon
        variant="filled"
        color={theme === "dark" ? "yellow" : "blue"}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        title="Toggle color scheme"
      >
        {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
      </ActionIcon>
    </motion.div>
  );
}
