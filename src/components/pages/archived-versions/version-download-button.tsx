"use client";

type VersionButtonProps = {
  link: string;
};

function VersionDownloadButton({ link }: VersionButtonProps) {
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = link;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-full p-2 text-[var(--tertiary-color)] transition hover:bg-[var(--menu-active-background)] hover:text-black"
      aria-label="Download"
      onClick={handleDownload}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
        />
      </svg>
    </button>
  );
}

export default VersionDownloadButton;
