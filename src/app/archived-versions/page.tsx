import VersionDownloadList from "@/components/pages/archived-versions/version-download-list";

export default function ArchivedVersions() {
  return (
    <div className="w-full bg-gradient-to-r from-white to-[#f5e8da]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 pb-36 pt-10">
        <section>
          <h3 className="mt-8 text-xl font-bold">
            Study Reserve Desktop Versions
          </h3>
          <VersionDownloadList
            version="1.0.6"
            items={[
              {
                label: "Windows:",
                file: " Study.Reserve-1.0.6.Setup.exe",
                link: "https://stdyrsrv2.sgp1.digitaloceanspaces.com/app_versions/desktop_app/v1.0.6/Study.Reserve-1.0.6.Setup.exe",
              },
              {
                label: "MacOS (Silicon M1 Chip):",
                file: " Study.Reserve-1.0.6-arm64.dmg",
                link: "https://stdyrsrv2.sgp1.digitaloceanspaces.com/app_versions/desktop_app/v1.0.6/Study.Reserve-1.0.6-arm64.dmg",
              },
              {
                label: "MacOS (Intel Chip):",
                file: " Study.Reserve-1.0.6-x64.dmg",
                link: "https://stdyrsrv2.sgp1.digitaloceanspaces.com/app_versions/desktop_app/v1.0.6/Study.Reserve-1.0.6-x64.dmg",
              },
            ]}
          />
        </section>

        {/* App Versions */}
        <section>
          <h3 className="mt-8 text-xl font-bold">
            Study Reserve Mobile App Versions
          </h3>
          <VersionDownloadList
            version="1.0.23"
            items={[
              {
                label: "Android:",
                file: "App-release-v1.0.23.apk",
                link: "https://stdyrsrv2.sgp1.digitaloceanspaces.com/app_versions/mobile_app/v1.0.23/app-release-v1.0.23%20.apk",
              },
            ]}
          />
        </section>
      </div>
    </div>
  );
}
