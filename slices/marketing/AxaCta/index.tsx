import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AxaCta`.
 */
export type AxaCtaProps = SliceComponentProps<Content.AxaCtaSlice>;

/**
 * Component for "AxaCta" Slices.
 */
const AxaCta = ({ slice }: AxaCtaProps): JSX.Element => {
  return (
    <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
      <div className="absolute inset-0 overflow-hidden">
        <PrismicNextImage
          field={slice.primary.image}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 bg-opacity-50"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <PrismicRichText field={slice.primary.titre} />
        </div>
        <div className="mt-3 text-xl text-white">
          <PrismicRichText field={slice.primary.description} />
        </div>
        <PrismicNextLink
          field={slice.primary.cta_link}
          className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
        >
          {slice.primary.cta_label}
        </PrismicNextLink>
      </div>
    </div>
  );
};

export default AxaCta;
