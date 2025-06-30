import { FaWindows, FaApple, FaAndroid } from "react-icons/fa";
import React, { useState } from "react";
import DialogBox from "./dialog-box";
import {
  ANDROID_APP,
  IOS_APP,
  MACOS_DESKTOP_APP_INTEL,
  MACOS_DESKTOP_APP_SILICON,
  WINDOWS_DESKTOP_APP,
} from "@/config/external-links";

const APP_OPTIONS = [
  {
    title: "Windows Desktop App",
    link: WINDOWS_DESKTOP_APP,
    icon: <FaWindows className="text-4xl text-border md:text-5xl" />,
  },
  {
    title: "MacOS Desktop App (Silicon Chip)",
    link: MACOS_DESKTOP_APP_SILICON,
    icon: <FaApple className="text-4xl text-border md:text-5xl" />,
  },
  {
    title: "MacOS Desktop App (Intel chip)",
    link: MACOS_DESKTOP_APP_INTEL,
    icon: <FaApple className="text-4xl text-border md:text-5xl" />,
  },
  {
    title: "Android App",
    link: ANDROID_APP,
    icon: <FaAndroid className="text-4xl text-border md:text-5xl" />,
  },
  {
    title: "Apple iOS App",
    link: IOS_APP,
    icon: (
      <span className="text-4xl font-bold text-border md:text-5xl">iOS</span>
    ),
  },
];

type AppOption = {
  title: string;
  link: string;
  icon: React.ReactNode;
};

const AppDownloadCards = () => {
  const [selectedApp, setSelectedApp] = useState<AppOption | null>(null);

  const handleDownload = (link: string) => {
    const a = document.createElement("a");
    a.href = link;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      <div className="flex w-full flex-col items-center px-4 py-10">
        <h2 className="mb-6 text-center text-[32px] md:text-[40px]">
          Study on the go anywhere! <br />
          Download our Student App now!
        </h2>

        <div className="grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {APP_OPTIONS.map((app, index) => (
            <button
              key={index}
              onClick={() => setSelectedApp(app)}
              className="flex h-[200px] w-[320px] flex-col items-center justify-center rounded-xl bg-white shadow-md transition-transform duration-300 hover:scale-105 xl:w-[350px]"
            >
              {app.icon}
              <p className="mt-3 text-center font-medium text-gray-800">
                {app.title}
              </p>
            </button>
          ))}
        </div>

        {/* Archived Versions Link */}
        <p className="mt-6 text-sm">
          Find older versions in{" "}
          <a href="/archived-versions" className="text-amber-800 underline">
            Archived versions
          </a>
        </p>
      </div>
      <DialogBox
        open={!!selectedApp}
        title="Installation Guide for Study Reserve"
        onClick={() => {
          if (!selectedApp) return;
          handleDownload(selectedApp.link);
        }}
        onClose={() => setSelectedApp(null)}
      />
    </>
  );
};

export default AppDownloadCards;
