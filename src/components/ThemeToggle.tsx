import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="relative w-10 h-10 rounded-full flex items-center justify-center">
        <div className="w-5 h-5" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative w-10 h-10 rounded-full flex items-center justify-center",
        "border border-border/30 hover:border-accent/40",
        "bg-transparent hover:bg-accent/5",
        "transition-all duration-500 ease-out",
        "group"
      )}
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
    >
      {/* Sun icon */}
      <Sun
        className={cn(
          "absolute w-[18px] h-[18px] text-accent transition-all duration-500",
          isDark 
            ? "opacity-0 rotate-90 scale-0" 
            : "opacity-100 rotate-0 scale-100"
        )}
      />
      {/* Moon icon */}
      <Moon
        className={cn(
          "absolute w-[18px] h-[18px] text-accent transition-all duration-500",
          isDark 
            ? "opacity-100 rotate-0 scale-100" 
            : "opacity-0 -rotate-90 scale-0"
        )}
      />
    </button>
  );
}
