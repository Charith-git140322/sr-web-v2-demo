import Image from "next/image";

type Props = {
  children: React.ReactNode;
  title: string;
};

const backgroundMap: Record<string, string> = {
  "Contact Us": "/images/contact-us-bg.png",
  "Affordable Pricing with Free Plan": "/images/pricing-bg.png",
  "Frequently Asked Questions": "/images/faqs-bg.png",
  "About Us": "/images/about-us-bg.png",
  "Terms & Conditions": "/images/terms-conditions-bg.png",
  "Privacy Policy": "/images/privacy-bg.png",
};

export default function InfoPageWrapper({ children, title }: Props) {
  const backgroundImage = backgroundMap[title];
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-white to-[#f5e8da] pb-20">
      <section className="relative h-[250px] w-full md:h-[300px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div>
              {backgroundImage && (
                <Image
                  src={backgroundImage}
                  alt="Info Page Background"
                  layout="fill"
                  className="object-cover"
                  priority
                />
              )}
            </div>
          </div>
          <h1 className="z-10 text-center text-[40px] font-semibold leading-tight text-gray-800 sm:text-[36px] md:text-[48px] lg:text-[64px]">
            {title}
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <Image
            src="/images/vector-top.png"
            alt="Vector Classes"
            layout="responsive"
            width={1580}
            height={1230}
            className="w-full"
          />
        </div>
      </section>
      <section className="mx-auto flex max-w-7xl flex-col gap-2 px-4 text-justify md:text-lg">
        {children}
      </section>
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src="/images/vector-bottom.svg"
          alt="Vector Bottom"
          layout="responsive"
          width={1580}
          height={1230}
          className="w-full"
        />
      </div>
    </div>
  );
}
