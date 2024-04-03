import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AxaStory`.
 */
export type AxaStoryProps = SliceComponentProps<Content.AxaStorySlice>;

/**
 * Component for "AxaStory" Slices.
 */
const AxaStory = ({ slice }: AxaStoryProps): JSX.Element => {
  return (
    <div className="w-full h-[640px] relative overflow-hidden tracking-[normal] text-left text-sm text-white font-source-sans-pro">
      <PrismicNextImage
        field={slice.primary.image}
        className="absolute w-full top-[calc(50%_-_240px)] right-[0px] left-[0px] max-w-full overflow-hidden h-[560px] object-cover"
      />

      <div className="absolute top-0 right-0 bg-[#8a7333] py-[50px] px-[65px] w-[921.6px] flex flex-col items-start justify-start box-border gap-[15px] max-w-[48%] z-[1]">
        <div className="relative tracking-[1px] leading-[18px] uppercase font-semibold inline-block min-w-[88.8px]">
          {slice.primary.eyebrow}
        </div>
        <div className="font-bold relative text-5xl leading-[56px] flex font-inter items-center shrink-0 max-w-full mq450:text-3xl mq450:leading-[34px] mq950text-4xl mq950:leading-[45px]">
          <span>
            <PrismicRichText field={slice.primary.title} />
          </span>
        </div>
        <PrismicNextLink
          field={slice.primary.cta_link}
          className="cursor-pointer py-3 px-4 bg-[transparent] box-border overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-white hover:bg-white hover:bg-opacity-25 hover:box-border hover:border-[1px] hover:border-solid hover:border-[#e6e6e6]"
        >
          <div className="text-sm leading-[16px] uppercase font-semibold text-white text-center">
            {slice.primary.cta_label}
          </div>
        </PrismicNextLink>
      </div>
    </div>
  );
};

export default AxaStory;
