import type { ProductSlideImage } from "../data/productSlideshowImages";
import { useSyncedSlideshowIndex } from "../hooks/useSyncedSlideshowIndex";

interface ProductImageSlideshowProps {
  productId: string;
  images: ProductSlideImage[];
}

export default function ProductImageSlideshow({
  productId,
  images,
}: ProductImageSlideshowProps) {
  const activeIndex = useSyncedSlideshowIndex(images.length);

  if (images.length === 0) return null;

  const activeImage = images[activeIndex];

  return (
    <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {images.map((image, index) => (
        <img
          key={`${productId}-${image.color}`}
          src={image.src}
          alt={image.alt}
          className={`absolute inset-0 w-full h-full object-contain p-6 transition-opacity duration-700 ease-in-out ${
            index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {images.length > 1 && (
        <>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {images.map((image, index) => (
              <span
                key={`${productId}-dot-${image.color}`}
                aria-hidden
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-6 bg-[#009A9A]"
                    : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>

          <p className="absolute top-4 left-4 text-xs font-medium text-[#009A9A] bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full z-20">
            {activeImage.color}
          </p>

          <p className="absolute top-4 right-4 text-xs font-medium text-gray-500 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full z-20">
            {activeIndex + 1} / {images.length}
          </p>
        </>
      )}
    </div>
  );
}
