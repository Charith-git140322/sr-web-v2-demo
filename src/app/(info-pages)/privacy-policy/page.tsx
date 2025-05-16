import { PageSubHeader } from "@/components/page-sub-header";
import InfoPageWrapper from "@/components/info-page-wrapper";
export default function PrivacyPolicy() {
  return (
    <InfoPageWrapper title="Privacy Policy">
      <p className="pt-2 indent-8">
        This privacy policy applies to the Study Reserve app (hereby referred to
        as &quot;Application&quot;) for mobile devices that was created by Study
        Reserve (PVT) LTD (hereby referred to as &quot;Service Provider&quot;)
        as a Freemium service. This service is intended for use &quot;AS
        IS&quot;.
      </p>
      <PageSubHeader>Information Collection and Use</PageSubHeader>
      <p>
        The Application collects information when you download and use it. This
        information may include information such as
      </p>
      <div className="flex pl-5 indent-4">
        <ul className="mb-4 list-item list-disc">
          <li>
            {" "}
            Your device&apos;s Internet Protocol address (e.g. IP address)
          </li>
          <li>
            The pages of the Application that you visit, the time and date of
            your visit, the time spent on those pages
          </li>
          <li> The time spent on the Application</li>
          <li>The operating system you use on your mobile device</li>
        </ul>
      </div>
      <p>
        The Application does not gather precise information about the location
        of your mobile device.
      </p>
      <p>
        The Service Provider may use the information you provided to contact you
        from time to time to provide you with important information, required
        notices and marketing promotions.
      </p>
      <p>
        For a better experience, while using the Application, the Service
        Provider may require you to provide us with certain personally
        identifiable information, including but not limited to Email, Age,
        Country, address, school, university. The information that the Service
        Provider request will be retained by them and used as described in this
        privacy policy.
      </p>
      <PageSubHeader>Third Party Access</PageSubHeader>
      <p>
        Only aggregated, anonymized data is periodically transmitted to external
        services to aid the Service Provider in improving the Application and
        their service. The Service Provider may share your information with
        third parties in the ways that are described in this privacy statement.
      </p>
      <p>
        Please note that the Application utilizes third-party services that have
        their own Privacy Policy about handling data. Below are the links to the
        Privacy Policy of the third-party service providers used by the
        Application:
      </p>
      <div className="mt-2 flex items-center justify-center">
        <ul className="mb-4 list-item list-disc">
          <li>Google Play Services</li>
          <li>Google Analytics for Firebase</li>
          <li>Firebase Crashlytics</li>
        </ul>
      </div>
      <p>
        The Service Provider may disclose User Provided and Automatically
        Collected Information:
        <br />
        as required by law, such as to comply with a subpoena, or similar legal
        process;
        <br />
        when they believe in good faith that disclosure is necessary to protect
        their rights, protect your safety or the safety of others, investigate
        fraud, or respond to a government request;
        <br />
        with their trusted services providers who work on their behalf, do not
        have an independent use of the information we disclose to them, and have
        agreed to adhere to the rules set forth in this privacy statement.
      </p>
      <PageSubHeader>Opt-Out Rights</PageSubHeader>
      <p>
        You can stop all collection of information by the Application easily by
        uninstalling it. You may use the standard uninstall processes as may be
        available as part of your mobile device or via the mobile application
        marketplace or network.
      </p>
      <PageSubHeader>Data Retention Policy</PageSubHeader>
      <p>
        The Service Provider will retain User Provided data for as long as you
        use the Application and for a reasonable time thereafter. If you&apos;d
        like them to delete User Provided Data that you have provided via the
        Application, please contact them at admin@studyreserve.com and they will
        respond in a reasonable time.
      </p>
      <PageSubHeader>Children</PageSubHeader>
      <p>
        The Service Provider does not use the Application to knowingly solicit
        data from or market to children under the age of 13.
      </p>
      <p>
        The Application does not address anyone under the age of 13. The Service
        Provider does not knowingly collect personally identifiable information
        from children under 13 years of age. In the case the Service Provider
        discover that a child under 13 has provided personal information, the
        Service Provider will immediately delete this from their servers. If you
        are a parent or guardian and you are aware that your child has provided
        us with personal information, please contact the Service Provider ({" "}
        <a
          href="mailto:admin@studyreserve.com"
          className="text-amber-800 underline hover:text-amber-950"
        >
          admin@studyreserve.com
        </a>{" "}
        ) so that they will be able to take the necessary actions.
      </p>
      <PageSubHeader>Security</PageSubHeader>
      <p>
        The Service Provider is concerned about safeguarding the confidentiality
        of your information. The Service Provider provides physical, electronic,
        and procedural safeguards to protect information the Service Provider
        processes and maintains.
      </p>
      <PageSubHeader>Changes</PageSubHeader>
      <p>
        This Privacy Policy may be updated from time to time for any reason. The
        Service Provider will notify you of any changes to the Privacy Policy by
        updating this page with the new Privacy Policy. You are advised to
        consult this Privacy Policy regularly for any changes, as continued use
        is deemed approval of all changes.
      </p>
      <p>This privacy policy is effective as of 2024-01-01</p>
      <PageSubHeader>Your Consent</PageSubHeader>
      <p>
        By using the Application, you are consenting to the processing of your
        information as set forth in this Privacy Policy now and as amended by
        us.
      </p>
      <PageSubHeader>Contact Us</PageSubHeader>
      <p>
        If you have any questions regarding privacy while using the Application,
        or have questions about the practices, please contact the Service
        Provider via email at{" "}
        <a
          href="mailto:admin@studyreserve.com"
          className="text-amber-800 underline hover:text-amber-950"
        >
          admin@studyreserve.com
        </a>
        .
      </p>
    </InfoPageWrapper>
  );
}
