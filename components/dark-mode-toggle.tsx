"use client";

import { useTheme } from "next-themes";
import { Sun } from "./icons/sun";
import { Moon } from "./icons/moon";
import { Button } from "./ui/button";

export function DarkModeToggle() {
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="rounded-full"
    >
      <Sun className="size-7 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 duration-500" />
      <Moon className="absolute  size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 duration-500" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
