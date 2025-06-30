import { BorderButton, FilledButton } from "@/components/buttons";
import React from "react";

type DialogBoxProps = {
  open: boolean;
  title: string;
  onClick: () => void;
  onClose: () => void;
  children?: React.ReactNode;
};

function DialogBox({
  open,
  title,
  onClick,
  onClose,
  children,
}: DialogBoxProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-6 lg:px-8"
      role="dialog"
      aria-modal="true"
      data-lenis-prevent-wheel
    >
      <div className="relative w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800">
        <div className="max-h-[70vh] overflow-y-auto">
          <div className="flex items-center justify-between border-b pb-3">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h1>
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="text-2xl leading-none text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              &times;
            </button>
          </div>

          <div className="my-4 space-y-2 text-gray-600 dark:text-gray-300">
            {children ?? <InstallationGuideline />}
          </div>

          <div className="mt-6 flex flex-col justify-end space-y-2 border-t pt-4 sm:flex-row sm:space-x-2 sm:space-y-0">
            <FilledButton onClick={onClick}>Download</FilledButton>
            <BorderButton onClick={onClose}>Close</BorderButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DialogBox;

function InstallationGuideline() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-2">
      <p className="mb-4">
        Thank you for choosing Study Reserve! Below are the steps to install the
        application on your respective platforms.
      </p>

      <div className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">For Windows Users:</h2>
        <ol className="list-inside list-decimal space-y-2">
          <li>
            <strong>Download:</strong>
            <ul className="ml-6 list-inside list-disc">
              <li>
                Choose <span className="font-bold">Windows Desktop App</span>.
              </li>
            </ul>
          </li>
          <li>
            <strong>Installation:</strong>
            <ul className="ml-6 list-inside list-disc">
              <li>Double-click on the downloaded file.</li>
              <li>
                Follow the on-screen instructions to complete installation.
              </li>
              <li>Find Study Reserve in your applications list.</li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">For Mac Users:</h2>
        <ol className="list-inside list-decimal space-y-2">
          <li>
            <strong>Download:</strong>
            <ul className="ml-6 list-inside list-disc">
              <li>
                Apple Silicon:{" "}
                <span className="font-bold">
                  MacOS Desktop App (Silicon Chip)
                </span>
              </li>
              <li>
                Intel Chip:{" "}
                <span className="font-bold">
                  MacOS Desktop App (Intel chip)
                </span>
              </li>
            </ul>
            <p className="mt-1 text-sm text-gray-600">
              Not sure which Mac you have?{" "}
              <a
                href="https://www.sweetwater.com/sweetcare/articles/intel-based-mac-or-mac-with-apple-silicon/"
                target="_blank"
                rel="noreferrer"
                className="text-amber-800 underline"
              >
                Check this guide
              </a>
            </p>
          </li>
          <li>
            <strong>Installation:</strong>
            <ul className="ml-6 list-inside list-disc">
              <li>Double-click the .dmg file to mount it.</li>
              <li>Drag the app icon to the Applications folder.</li>
              <li>(Optional) Add to Dock for easier access.</li>
            </ul>
          </li>
        </ol>
      </div>

      <p className="mb-4">
        That&apos;s it! You&apos;ve successfully installed Study Reserve. If you
        need help&lsquo; reach out to our support team.
      </p>
      <p className="font-medium">Happy studying!</p>
    </section>
  );
}
