/**
 * Image utility functions for Cloudinary CDN optimization
 * and graceful fallback handling.
 */

// Beautiful gradient SVG placeholder — shown when an image fails to load
export const FALLBACK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23e2e8f0'/%3E%3Cstop offset='100%25' stop-color='%23cbd5e1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='800' fill='url(%23g)'/%3E%3Ctext x='400' y='380' text-anchor='middle' font-family='system-ui,sans-serif' font-size='48' fill='%2394a3b8'%3EImage%3C/text%3E%3Ctext x='400' y='440' text-anchor='middle' font-family='system-ui,sans-serif' font-size='32' fill='%23a1a1aa'%3EUnavailable%3C/text%3E%3C/svg%3E";

/**
 * Optimize a Cloudinary image URL by injecting transformation parameters.
 * For non-Cloudinary URLs (e.g., Unsplash), returns the URL unchanged.
 *
 * @param {string} url - The image URL
 * @param {object} options - Optimization options
 * @param {number} [options.width] - Desired width in pixels
 * @param {string} [options.quality='auto'] - Quality setting
 * @param {string} [options.format='auto'] - Format setting (auto = WebP/AVIF)
 * @returns {string} The optimized URL
 */
export const getOptimizedImageUrl = (url, options = {}) => {
  if (!url || typeof url !== "string") return FALLBACK_IMAGE;

  // Only optimize Cloudinary URLs (contains 'res.cloudinary.com')
  if (!url.includes("res.cloudinary.com")) {
    return url;
  }

  const { width, quality = "auto", format = "auto" } = options;

  // Build transformation string
  let transforms = `f_${format},q_${quality}`;
  if (width) {
    transforms += `,w_${width},c_limit`;
  }

  // Insert transformations after /upload/
  // Cloudinary URL format: https://res.cloudinary.com/<cloud>/image/upload/<transforms>/<path>
  const optimized = url.replace("/upload/", `/upload/${transforms}/`);

  return optimized;
};
