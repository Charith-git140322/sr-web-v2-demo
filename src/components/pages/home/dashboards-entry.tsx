import Image from "next/image";
import Link from "next/link";
import studentDashboardImg from "@/../public/images/student-dashboard.png";
import teacherDashboardImg from "@/../public/images/teacher-dashboard.png";
import dashboardEntryBgImg from "@/../public/images/dashboardEntry-bg.svg";
import SquareArrow from "@/../public/icons/square-arrow.svg";
import "@/styles/dashboard-entry.css";
import { DASHBOARD_SECTION_ID } from "@/config/constants";

const DashboardsEntry = () => {
  return (
    <div className="dashboards-entry" id={DASHBOARD_SECTION_ID}>
      <Image
        src={dashboardEntryBgImg as string}
        alt="Background image of the login dashboard page with a subtle texture and a gentle gradient"
        className="dashboards-entry-bg-img"
        fill
      />
      <div className="insert-0 dashboards-entry-content">
        <div className="teacher-dashboard-card">
          <Link
            href="https://admin.studyreserve.com/login"
            className="login-link group"
          >
            <div className="overflow-hidden">
              <Image
                src={teacherDashboardImg}
                alt="A Teacher Explaining a lesson"
                className="dash-img"
              />
            </div>
            <div className="teacher-dashboard-card-text">
              <span>
                Teacher Dashboard
                <Image
                  src={SquareArrow as string}
                  alt={"square arrow"}
                  width={20}
                  height={20}
                  className="dash-square-arrow"
                />
              </span>
            </div>
          </Link>
        </div>
        <div className="dashboards-text">
          <div>
            <h1>Log in to the Dashboards</h1>
          </div>
        </div>
        <div className="student-dashboard-card">
          <Link
            href="https://dash.studyreserve.com/#/auth"
            className="login-link group"
          >
            <div className="overflow-hidden">
              <Image
                src={studentDashboardImg}
                alt="Students learning in the class"
                className="dash-img"
              />
            </div>
            <div className="student-dashboard-card-text">
              <span>
                Student Dashboard
                <Image
                  src={SquareArrow as string}
                  alt={"square arrow"}
                  width={20}
                  height={20}
                  className="dash-square-arrow"
                />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DashboardsEntry;
