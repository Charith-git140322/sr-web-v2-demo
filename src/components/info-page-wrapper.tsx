import Image from "next/image";

type Props = {
  children: React.ReactNode;
  title: string;
};

export default function InfoPageWrapper({ children, title }: Props) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-white to-[#f5e8da] pb-20">
      <section className="relative h-[250px] w-full md:h-[300px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-center text-[36px] font-semibold leading-tight text-gray-800 md:text-[48px]">
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
