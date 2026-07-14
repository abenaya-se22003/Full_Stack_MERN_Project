import { useState, useCallback } from "react";
import { getOptimizedImageUrl, FALLBACK_IMAGE } from "../../utils/imageUtils";

/**
 * OptimizedImage — A premium image component with:
 * - Cloudinary CDN auto-optimization (f_auto, q_auto)
 * - Native lazy loading
 * - Animated skeleton loader while loading
 * - Smooth fade-in transition on load
 * - Graceful error fallback (beautiful placeholder)
 */
const OptimizedImage = ({
  src,
  alt = "",
  className = "",
  containerClassName = "",
  width,
  onClick,
  draggable,
  style,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Get the optimized URL (applies Cloudinary transforms if applicable)
  const optimizedSrc = getOptimizedImageUrl(src, { width });

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(true);
  }, []);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Skeleton loader — visible until image loads */}
      {!isLoaded && (
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            background:
              "linear-gradient(110deg, #f1f5f9 30%, #e2e8f0 50%, #f1f5f9 70%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s ease-in-out infinite",
          }}
        />
      )}

      {/* The actual image */}
      <img
        src={hasError ? FALLBACK_IMAGE : optimizedSrc}
        alt={alt}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        onClick={onClick}
        draggable={draggable}
        style={{
          ...style,
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.4s ease-in-out",
        }}
        className={className}
      />
    </div>
  );
};

export default OptimizedImage;
