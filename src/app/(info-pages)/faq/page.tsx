import InfoPageWrapper from "@/components/info-page-wrapper";
import QuestionCard from "@/components/pages/faqs/question-card";

export default function Faq() {
  return (
    <InfoPageWrapper title="Frequently Asked Questions">
      <div className="flex flex-col gap-4">
        <QuestionCard question="Getting white screen in windows or mac app, can't see the login screen">
          <p>
            For those who have problems logging in via the desktop app. (This
            may be due to caching in the desktop apps) Try these steps:
          </p>
          <p className="mt-2 font-semibold">
            For macOS desktop app users (Intel chip or M1 chip):
          </p>
          <ol className="list-decimal pl-6">
            <li>
              Once you come to the login screen, press <kbd>command</kbd> +{" "}
              <kbd>shift</kbd> + <kbd>R</kbd> together and wait for 1 minute.
            </li>
          </ol>
          <p className="mt-2 font-semibold">For Windows desktop app users:</p>
          <ol className="list-decimal pl-6">
            <li>
              Once you come to the login screen, press <kbd>ctrl</kbd> +{" "}
              <kbd>shift</kbd> + <kbd>R</kbd> together and wait for 1 minute.
            </li>
            <li>After that try logging in again.</li>
          </ol>
        </QuestionCard>

        <QuestionCard question="The app does not work on macOS Big Sur">
          <p>
            The app does not work on macOS Big Sur and below. This is because
            the app uses the latest technology and the system is not supported.
            Please use macOS Monterey or later to use the app.
          </p>
        </QuestionCard>
      </div>
    </InfoPageWrapper>
  );
}
