import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/4" | "auto";
  containerClassName?: string;
}

export function ImageSkeleton({
  src,
  alt,
  className,
  aspectRatio = "auto",
  containerClassName,
  ...props
}: ImageSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const aspectStyles = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "3/4": "aspect-[3/4]",
    "auto": "",
  };

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {/* Skeleton loader with shimmer */}
      {isLoading && !hasError && (
        <div
          className={cn(
            "absolute inset-0 bg-muted",
            "animate-shimmer",
            aspectStyles[aspectRatio]
          )}
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 0%, hsl(var(--accent) / 0.08) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
          }}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div
          className={cn(
            "absolute inset-0 bg-muted flex items-center justify-center",
            aspectStyles[aspectRatio]
          )}
        >
          <span className="text-muted-foreground text-sm">Image non disponible</span>
        </div>
      )}

      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        className={cn(
          className,
          aspectStyles[aspectRatio],
          "transition-opacity duration-700 ease-out",
          isLoading || hasError ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        {...props}
      />
    </div>
  );
}
