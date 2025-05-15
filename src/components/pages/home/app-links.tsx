import Image from "next/image";
import Link from "next/link";
import androidLogo from "@/../public/images/android_logo.png";
import appleLogo from "@/../public/images/apple_logo.png";
import windowsIcon from "@/../public/images/windows_icon.png";
import macOSIcon from "@/../public/images/macOS_icon.png";
import "@/styles/app-links.css";

const AppLinks = () => {
  return (
    <div className="app-links">
      <div className="app-links-heading">
        <h1>Study on the go anywhere! Download our student App now!</h1>
      </div>

      <div className="app-links-buttons group">
        <Link
          href={
            "https://stdyrsrv2.sgp1.digitaloceanspaces.com/Executables_Mobile_Apps/app-release-v1.0.26.apk"
          }
          target="_blank"
          className="card-android group"
        >
          <h3 className="card-android-title">Download Android App now!</h3>
          <div className="android-logo">
            <Image src={androidLogo} alt="Android App Logo" />
          </div>
        </Link>
        <Link
          href="https://apps.apple.com/gb/app/study-reserve/id6503342135"
          target="_blank"
          className="card-ios group"
        >
          <div className="flex justify-center">
            <Image
              src={appleLogo}
              alt="IOS App Logo"
              className="card-ios-logo"
            />
          </div>
          <h3 className="card-ios-title">Download IOS App now!</h3>
        </Link>

        <Link
          href={
            "https://drive.google.com/drive/u/8/folders/1PllgZMVIT3VtmNHVhXttF-pnkhz6yc-G"
          }
          target="_blank"
          className="card-windows group"
        >
          <div className="windows-icon">
            <Image src={windowsIcon} alt="Windows Icon" />
          </div>
          <h3 className="card-windows-title">
            Download Windows / MacOS App now!
          </h3>
          <div className="macOS-icon">
            <Image src={macOSIcon} alt="MacOS Icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AppLinks;
