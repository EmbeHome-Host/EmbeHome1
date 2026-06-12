import twoModuleChocolateBrown from "@/assets/products/2m/chocolate-brown.png";
import twoModuleWhite from "@/assets/products/2m/white.png";
import twoModuleBlack from "@/assets/products/2m/black.png";
import fourModuleChocolateBrown from "@/assets/products/4m/chocolate-brown.png";
import fourModuleWhite from "@/assets/products/4m/white.png";
import fourModuleBlack from "@/assets/products/4m/black.png";
import eightModuleChocolateBrown from "@/assets/products/8m/chocolate-brown.png";
import eightModuleWhite from "@/assets/products/8m/white.png";
import eightModuleBlack from "@/assets/products/8m/black.png";
import twelveModuleChocolateBrown from "@/assets/products/12m/chocolate-brown.png";
import twelveModuleWhite from "@/assets/products/12m/white.png";
import twelveModuleBlack from "@/assets/products/12m/black.png";
import curtainControllerChocolateBrown from "@/assets/products/cc/chocolate-brown.png";
import curtainControllerWhite from "@/assets/products/cc/white.png";
import curtainControllerBlack from "@/assets/products/cc/black.png";

export interface ProductSlideImage {
  src: string;
  alt: string;
  color: string;
}

/** Same color order for every product: Chocolate Brown → White → Black */
const COLOR_SEQUENCE = [
  { key: "chocolateBrown" as const, label: "Chocolate Brown" },
  { key: "white" as const, label: "White" },
  { key: "black" as const, label: "Black" },
];

type ColorVariants = Record<(typeof COLOR_SEQUENCE)[number]["key"], string>;

function buildSlideshowImages(
  productName: string,
  variants: ColorVariants
): ProductSlideImage[] {
  return COLOR_SEQUENCE.map(({ key, label }) => ({
    src: variants[key],
    alt: `${productName} - ${label}`,
    color: label,
  }));
}

const TWO_MODULE_IMAGES: ColorVariants = {
  chocolateBrown: twoModuleChocolateBrown,
  white: twoModuleWhite,
  black: twoModuleBlack,
};

const FOUR_MODULE_IMAGES: ColorVariants = {
  chocolateBrown: fourModuleChocolateBrown,
  white: fourModuleWhite,
  black: fourModuleBlack,
};

const EIGHT_MODULE_IMAGES: ColorVariants = {
  chocolateBrown: eightModuleChocolateBrown,
  white: eightModuleWhite,
  black: eightModuleBlack,
};

const TWELVE_MODULE_IMAGES: ColorVariants = {
  chocolateBrown: twelveModuleChocolateBrown,
  white: twelveModuleWhite,
  black: twelveModuleBlack,
};

const CURTAIN_CONTROLLER_IMAGES: ColorVariants = {
  chocolateBrown: curtainControllerChocolateBrown,
  white: curtainControllerWhite,
  black: curtainControllerBlack,
};

export const PRODUCT_SLIDESHOWS = {
  twoModule: TWO_MODULE_IMAGES,
  fourModule: FOUR_MODULE_IMAGES,
  eightModule: EIGHT_MODULE_IMAGES,
  twelveModule: TWELVE_MODULE_IMAGES,
  curtainController: CURTAIN_CONTROLLER_IMAGES,
};

export function getProductSlideshow(
  productName: string,
  variants: ColorVariants
): ProductSlideImage[] {
  return buildSlideshowImages(productName, variants);
}
