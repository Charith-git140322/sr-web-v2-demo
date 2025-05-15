import Link from "next/link";
import { ImageButton } from "./buttons";
import "../styles/footer.css";
import { TextButton } from "./buttons";
import {
  FACEBOOK,
  INSTAGRAM,
  YOUTUBE,
  ZERO_ONE_TECHNOLOGIES,
} from "@/config/external-links";
import {
  ABOUT_US,
  FAQ,
  PRIVACY_POLICY,
  TERMS_CONDITIONS,
} from "@/config/routes";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-title">
            <h4>Study Reserve</h4>
          </div>
          <div className="footer-content-links">
            <div className="footer-info">
              <h5 className="footer-subtitle">INFORMATION</h5>
              <Links href={ABOUT_US} title="About Us" />
              <Links href={FAQ} title=" FAQs " />
            </div>
            <div className="footer-legal">
              <h5 className="footer-subtitle">LEGAL</h5>
              <Links href={PRIVACY_POLICY} title="Privacy Policy" />
              <Links href={TERMS_CONDITIONS} title="Terms and Conditions" />
            </div>
          </div>
          <div className="footer-content-social">
            <h5 className="footer-subtitle">SOCIAL</h5>
            <div className="footer-social-icons">
              <Link href={INSTAGRAM} aria-label="Instagram">
                <ImageButton
                  imageSrc="/icons/instagram.svg"
                  imageWidth={28}
                  imageHeight={28}
                />
              </Link>
              <Link href={YOUTUBE} aria-label="YouTube">
                <ImageButton
                  imageSrc="/icons/youtube.svg"
                  imageWidth={28}
                  imageHeight={28}
                />
              </Link>
              <Link href={FACEBOOK} aria-label="Facebook">
                <ImageButton
                  imageSrc="/icons/facebook.svg"
                  imageWidth={28}
                  imageHeight={28}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <h6>Copyright © 2025 - All rights reserved</h6>
        <h6>
          powered by{" "}
          <Link
            href={ZERO_ONE_TECHNOLOGIES}
            style={{ color: "hsl(var(--slot-yellow))" }}
            target="_blank"
          >
            Zero One Technologies (PVT) LTD
          </Link>
        </h6>
      </div>
    </footer>
  );
};

type FooterLinkProps = {
  href: string;
  title: string;
};
const Links = ({ href, title }: FooterLinkProps) => {
  return (
    <TextButton fontSize="text-xs md:text-sm" fontWeight="font-semibold">
      <Link href={href}>{title}</Link>
    </TextButton>
  );
};
export default Footer;
