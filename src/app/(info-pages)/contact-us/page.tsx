import InfoPageWrapper from "@/components/info-page-wrapper";
import Image from "next/image";
import { FilledButton } from "@/components/buttons";

export default function ContactUs() {
  return (
    <InfoPageWrapper title="Contact Us">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center rounded-xl bg-white p-4 shadow-md md:max-w-5xl md:flex-row">
        <div className="flex w-full items-center justify-center border-b bg-white p-6 md:w-1/2 md:border-b-0 md:border-r">
          <Image
            src="/sr-icon.svg"
            alt="Study Reserve Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
        <div className="flex w-full flex-col justify-between p-6 md:w-1/2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              STUDY RESERVE (PVT) LTD
            </h3>
            <p className="mt-1 text-sm text-gray-700">
              23/3 Pubudu mawatha hospital road, Pamunuwa, <br />
              Maharagama, Sri Lanka
            </p>
            <p className="mt-4 text-sm text-blue-600">
              support@studyreserve.com
            </p>
          </div>
          <div className="mt-4 text-right">
            <FilledButton className="bg-yellow-400 font-semibold text-black hover:bg-yellow-500">
              Contact now!
            </FilledButton>
          </div>
        </div>
      </div>
    </InfoPageWrapper>
  );
}
