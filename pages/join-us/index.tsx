import { TopMenuBar } from "@/components/TopMenuBar";
import styles from "./styles/joinus.module.scss";
import { BottomBar } from "@/components/BottomBar";

const ORANGE = "#e87722";

const Title = ({ children }: { children: any }) => (
  <span className={styles.title}>{children}</span>
);
const Text = ({ children }: { children: string }) => (
  <span className={styles.text}>{children}</span>
);
const Bullet = ({ children }: { children: string }) => (
  <>
    <span
      style={{
        borderRadius: 16,
        width: 2,
        height: 2,
        backgroundColor: ORANGE,
        justifyContent: "center",
        padding: 2,
        float: "left",
        marginTop: 8,
      }}
    />
    <span className={styles.point}>{children}</span>
  </>
);

export default function JoinUs() {
  return (
    <>
      <TopMenuBar />
      <br />
      <div className={styles.text} style={{ marginBottom: 16, marginLeft: 12 }}>
        Job opening remains valid as we are still expanding our team and looking
        for the suitable candidates
        <hr></hr>
        <p>
          <Title>
            * Remember to{" "}
            <a
              className={styles.email}
              href="mailto:felix.ht.lam@fwd.com?subject=Apply for Programmer"
            >
              submit
            </a>{" "}
            your resume / CV along with your contact information to {""}
            <a
              className={styles.email}
              href="mailto:felix.ht.lam@fwd.com?subject=Apply for Programmer"
            >
              felix.ht.lam@fwd.com
            </a>{" "}
            and email subject as `
            <span style={{ color: ORANGE }}>Apply for Programmer</span>
            `.
          </Title>
        </p>
      </div>
      <div className={styles.content}>
        <br />
        <Title>Employment Type</Title>
        <br />
        <Text>Full Time, Contract</Text>
        <p>
          <Title>Title</Title>
          <br />
          <Text>Programmer (Frontend)</Text>
        </p>
        <p>
          <Title>About the Person</Title>
          <br />
          <Bullet>
            Degree holder in Computer Science / IT Bootcamp or equivalent
          </Bullet>
          <Bullet>0 - 1 year IT experience</Bullet>
          <Bullet>
            Passionate about technology and eager to acquire new technical
            skills
          </Bullet>
          <Bullet>
            Eager to learn not just how to complete single tasks yourself but
            also how to achieve team projects together
          </Bullet>
          <Bullet>
            Values teamwork and appreciates a culture of knowledge sharing and
            fun
          </Bullet>
          <Bullet>
            Interested in transitioning from a pure frontend developer role to
            becoming a full stack developer
          </Bullet>
          <Bullet>Wants to have a clear career path and development</Bullet>
        </p>
        <p>
          <Title>About the Job</Title>
          <br />
          <Bullet>
            Join a large regional team to help develop multiple key regional
            digital applications across web, mobile, and tablet platforms
          </Bullet>
          <Bullet>
            Collaborate closely with UI/UX Designers, Technical Team Leads,
            Frontend / Backend Developers, Product Owners, Business Analysts,
            Quality Assurance, and other stakeholders
          </Bullet>
          <Bullet>
            Work with multiple small teams, each comprising 6-10 developers, 1-2
            Product Owners, 1-2 BAs, and 1-2 QAs
          </Bullet>
          <Bullet>
            Follow an Agile development approach with 2-week sprints
          </Bullet>
          <Bullet>Support BAU activities for multiple regions</Bullet>
          <Bullet>
            Possess hands-on experience in ReactNative / Expo / Next.js /
            React.js / Typescript
          </Bullet>
          <Bullet>
            Knowledge on calling Restful API / React Query & Redux / Zustand is
            a must
          </Bullet>
          <Bullet>
            Familiarity with Mongo / MS SQL Server is an advantage
          </Bullet>
          <Bullet>
            Basic understanding of Java / OOP concepts is an advantage
          </Bullet>
          <Bullet>
            Exhibit strong written and verbal communication skills in English
            and Chinese
          </Bullet>
          <Bullet>
            First focus on Frontend development then gradually get involved in
            some of the backend development
          </Bullet>
        </p>
        <p>
          <Title>Office Location</Title>
          <br />
          <Text>TaiKoo</Text>
        </p>
      </div>
      <BottomBar />
    </>
  );
}
