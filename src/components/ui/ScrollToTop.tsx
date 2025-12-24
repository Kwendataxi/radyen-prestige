import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full",
        "bg-accent text-accent-foreground",
        "flex items-center justify-center",
        "shadow-lg shadow-accent/20",
        "transition-all duration-500 ease-out",
        "hover:scale-110 hover:shadow-xl hover:shadow-accent/30",
        "hover:-translate-y-1",
        "focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background",
        "group",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
      aria-label="Retour en haut"
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
      
      {/* Pulse ring effect */}
      <span
        className={cn(
          "absolute inset-0 rounded-full border-2 border-accent/40",
          "animate-ping opacity-75",
          isVisible ? "block" : "hidden"
        )}
        style={{ animationDuration: "2s" }}
      />
    </button>
  );
}
