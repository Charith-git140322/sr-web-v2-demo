import VersionDownloadButton from "./version-download-button";

type DownloadItem = {
  label: string;
  file: string;
  link: string;
};

type VersionDownloadListProps = {
  version: string;
  items: DownloadItem[];
};
function VersionDownloadList({ version, items }: VersionDownloadListProps) {
  return (
    <section>
      <div className="flex items-center">
        <p className="mt-4 text-base font-semibold">Version {version}</p>
      </div>

      <ul className="mt-1 space-y-4">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex flex-col border-b pb-2 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="text-sm sm:text-base">
              <span className="underline">{item.label}</span> {item.file}
            </span>
            <VersionDownloadButton link={item.link} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default VersionDownloadList;
