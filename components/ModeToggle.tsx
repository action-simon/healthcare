"use client";

import * as React from "react";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="rotate-0 scale-90 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-90" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
