import { TopMenuBar } from "@/components/TopMenuBar";
import styles from "./styles/aboutus.module.scss";
import { BottomBar } from "@/components/BottomBar";

export default function AboutUs() {
  return (
    <>
      <TopMenuBar />
      <br />
      <div className={styles.content}>
        <div className={styles.title}>Our Team</div>
        <div className={styles.text}>
          As the best development team in Group IT, we hold ourselves to high
          standards and are constantly pushing ourselves to learn and grow with
          cutting-edge technologies.
        </div>
        <br />
        <div className={styles.text}>
          We are currently undergoing a team expansion to meet the demands of
          new project opportunities across various countries in the APAC region.
        </div>
        <br />
        <div className={styles.text}>
          We are actively looking for talented React frontend developers to join
          us on this exciting journey.
        </div>
      </div>
      <br />
      <div className={styles.content}>
        <div className={styles.title}>Team Culture</div>
        <div className={styles.text}>
          Our team prides itself on cultivating a peer culture that is both fun
          and engaging.
        </div>
        <br />
        <div className={styles.text}>
          Laughter fills our office, creating an atmosphere that is far from
          quiet.
        </div>
        <br />
        <div className={styles.text}>
          You will find that many of our developers, like yourself, have similar
          backgrounds in boot camp training.
        </div>
        <br />
        <div className={styles.text}>
          Here, you will be welcomed into a tight-knit community that feels like
          a happy family.
        </div>
      </div>
      <br />
      <div className={styles.content}>
        <div className={styles.title}>Work Life Balance</div>
        <div className={styles.text}>
          We understand that you may have concerns about overtime, and we want
          to assure you that our team values work-life balance.
        </div>
        <br />
        <div className={styles.text}>
          {" "}
          In fact, most of our teammates leave promptly at 6pm each day.
        </div>
        <br />
        <div className={styles.text}>
          Additionally, we offer a work-from-home policy that allows you to work
          remotely for up to two days per week.
        </div>
        <br />
        <div className={styles.text}>
          This flexibility ensures that you can maintain a healthy balance
          between work and personal responsibilities.
        </div>
      </div>
      <br />
      <div className={styles.content}>
        <div className={styles.title}>Fruits, Coffees & Wines</div>
        <div className={styles.text}>
          Our office is stocked with daily fresh fruit and complimentary
          beverages in the fridge, and we also provide free coffee capsules in
          the pantry to fuel your workday.
        </div>
        <br />
        <div className={styles.text}>
          Moreover, we organize monthly wine gatherings at 5:30pm, which offer a
          great opportunity to unwind and socialize with colleagues.
        </div>
        <br />
        <div className={styles.text}>
          Our team also participates in happy hours a few times per month with
          our Group Digital teammates, fostering a sense of community and
          camaraderie across different departments and teams.
        </div>
      </div>
      <br />
      <BottomBar />
    </>
  );
}
