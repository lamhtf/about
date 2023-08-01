import { TopMenuBar } from "@/components/TopMenuBar";
import styles from "./styles/joinus.module.scss";

const ORANGE = "#e87722";

const Title = ({ children }: { children: string }) => (
  <div className={styles.title}>{children}</div>
);
const Text = ({ children }: { children: string }) => (
  <div className={styles.text}>{children}</div>
);
const Bullet = ({ children }: { children: string }) => (
  <>
    <div
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
    <div className={styles.point}>{children}</div>
  </>
);

export default function JoinUs() {
  return (
    <>
      <TopMenuBar />
      <br />
      <div className={styles.content}>
        <span></span>
        <Title>Employment Type</Title>
        <Text>Full Time, Contract</Text>
        <Title>Title</Title>
        <Text>Analyst Programmer (Frontend)</Text>
        <Title>About the Person</Title>
        <Bullet>
          Degree holder in Computer Science / Technology or its equivalent
        </Bullet>
        <Bullet>
          Passionate about technology and capable of acquiring new technical
          skills
        </Bullet>
        <Bullet>
          Enjoys teamwork and values a culture of knowledge sharing and fun
        </Bullet>
        <Bullet>
          Interested in transitioning from a pure frontend developer to become a
          full stack developer
        </Bullet>
        <Title>About the Job</Title>
        <Bullet>
          Join a large regional team to help develop multiple key regional
          digital applications in web / mobile / tablet platforms
        </Bullet>
        <Bullet>
          Work closely with UI/UX Designers, Technical Team Leads, Frontend /
          Backend Developers, Product Owners, BAs, QAs, etc.
        </Bullet>
        <Bullet>
          Work with multiple small teams, each with 6-10 developers, 1-2 Product
          Owners, 1-2 BAs, 1-2 QAs
        </Bullet>
        <Bullet>Agile development with 2-week sprints</Bullet>
        <Bullet>Support BAU for multiple regions</Bullet>
        <Bullet>
          Hands-on experience in ReactNative / Expo / Next.js / React.js /
          Typescript
        </Bullet>
        <Bullet>
          Knowledge on calling Restful API / React Query & Redux / Zustand is a
          must
        </Bullet>
        <Bullet>Knowledge on Mongo / MS SQL Server is an advantage</Bullet>
        <Bullet>Knowledge on Java maybe an advantage</Bullet>
        <Bullet>
          Good written and verbal communication skills in English and Chinese
        </Bullet>
        <Bullet>
          Focus on Frontend development on the first half year then gradually
          get involved in some of the backend development
        </Bullet>
        <Title>Office Location</Title>
        <Text>TaiKoo</Text>
        <Title>
          Please send your resume/CV including your contact methods to
          <span style={{ color: ORANGE }}> felix.ht.lam@fwd.com</span> with
          title “Apply for Analyst Programmer”
        </Title>
      </div>
    </>
  );
}
