import InfoPageWrapper from "@/components/info-page-wrapper";
import {
  PageSubHeader,
  PageSubSectionTitle,
} from "@/components/pages/about-us/page-sub-header";
import { SUB_SECTIONS } from "@/data/about-us-data";

export default function AboutUs() {
  return (
    <InfoPageWrapper title="About Us">
      <p className="pt-2 indent-8">
        StudyReserve is an online learning platform based in Sri Lanka, founded
        by a team of passionate educators and technologists facilitating todays
        evolving education.
      </p>
      <p>
        Our platform provides a wide range of facilities to engage students in
        effective online learning as well as educators, where they can create
        course materials and make it accessible at their convenience with
        flexibility from anywhere.
      </p>
      <p>
        We also offer a range of exciting opportunities and services to our
        users. Check out our services page for more!
      </p>
      <PageSubHeader>Our Story</PageSubHeader>
      <p>
        At StudyReserve, our journey began with a simple but powerful idea: to
        make quality education accessible to everyone, everywhere. Founded by a
        team of passionate educators and technologists, we recognized the
        growing need for a learning platform that could adapt to the diverse
        needs of today&apos;s learners.
      </p>
      <PageSubSectionTitle>From Classroom to Cloud</PageSubSectionTitle>
      <p>
        Our founders were inspired by their own experiences in traditional
        education systems, where they saw students struggle with rigid
        schedules, limited resources, and one-size-fits-all approaches.
        Determined to bridge these gaps, we set out to create an online learning
        platform that offered flexibility, personalized learning, and a rich
        library of courses that anyone could access.
      </p>
      <PageSubSectionTitle>
        Built for the Future of Learning
      </PageSubSectionTitle>
      <p>
        Since our inception, StudyReserve has evolved from a small project into
        a thriving global community of learners. We&apos;ve continually
        innovated to offer the best learning experience possible—integrating
        cutting-edge technology, expanding our course offerings, and building a
        platform that&apos;s not just about education, but about empowerment.
      </p>
      <PageSubHeader>What Sets Us Apart</PageSubHeader>
      {SUB_SECTIONS.map(({ title, content }) => (
        <div key={title}>
          <PageSubSectionTitle>{title}</PageSubSectionTitle>
          <p>{content}</p>
        </div>
      ))}
    </InfoPageWrapper>
  );
}
