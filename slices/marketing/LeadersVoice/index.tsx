import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LeadersVoice`.
 */
export type LeadersVoiceProps = SliceComponentProps<Content.LeadersVoiceSlice>;

/**
 * Component for "LeadersVoice" Slices.
 */
const LeadersVoice = ({ slice }: LeadersVoiceProps): JSX.Element => {
  return (
    <div className="w-full bg-[#014750] flex flex-row items-start justify-start tracking-[normal]">
      <section className="overflow-x-auto items-start justify-start pt-[90px] pb-[90.5px] pr-0 pl-[185px] box-border gap-[160px] max-w-full text-left text-xl text-white mq450:gap-[160px_20px] mq450:pl-5 mq450:box-border mq950:gap-[160px_40px] mq950:pl-[46px] mq950:pt-[58px] mq950:pb-[59px] mq950:box-border mq1425:gap-[160px_80px] mq1425:pl-[92px] mq1425:box-border inline-flex">
        <div className="w-1/4 shrink-0 flex flex-col items-start justify-start pt-[248px] box-border text-4xl mq450:pt-[161px] mq450:box-border">
          <div className="flex flex-col items-start justify-start py-0 pr-5 box-border gap-[8px] shrink-0 max-w-full">
            <b className="relative leading-[56px] mq450:text-[27px] mq450:leading-[34px] mq950:text-[36px] mq950:leading-[45px]">
              <PrismicRichText field={slice.primary.title} />
            </b>
            <div className="h-[60px] relative text-xl leading-[28px]  flex items-center shrink-0 mq450:text-lgi mq450:leading-[22px] font-light">
              <PrismicRichText field={slice.primary.description} />
            </div>
            <button className="cursor-pointer mt-10 py-3 pr-[27px] px-8 bg-[transparent] border-[1px] border-solid border-white hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-[#e6e6e6]">
              <PrismicNextLink field={slice.primary.cta_link}>
                <div className="flex-1 relative text-sm tracking-[1px] leading-[16px] uppercase font-semibold  text-white text-center">
                  {slice.primary.cta_label}
                </div>
              </PrismicNextLink>
            </button>
          </div>
        </div>
        <div className="h-[667.5px] w-4/5 overflow-visible shrink-0 flex flex-row items-start justify-start gap-[25px] max-w-full">
          {slice.items.map((item, idx) => (
            <div
              key={idx}
              className="w-[290px] shrink-0 flex flex-col items-start justify-start gap-6"
            >
              <div className="flex flex-col items-start justify-start pt-0 pb-[30.5px] pr-5 pl-0 gap-[8px] min-h-36">
                <b className="leading-[28px] inline-block min-w-[123.9px] mq450:text-base mq450:leading-[22px]">
                  {item.name}
                </b>
                <div className="relative leading-[24px] font-semibold text-[#80a3a7] mq450:text-base mq450:leading-[19px]">
                  {item.role}
                </div>
              </div>
              <PrismicNextImage
                field={item.image}
                className="self-stretch h-[360px] relative max-w-full overflow-hidden shrink-0 object-cover"
              />
              <b className="relative text-xl leading-[28px] inline-block pr-1.5 mq450:text-lgi mq450:leading-[22px]">
                <p className="m-0"> {item.quote} </p>
              </b>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LeadersVoice;
