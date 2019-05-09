import React from "react";
import styles from "./styles.scss";
import clothes from "./clothes.webp";
import { Link } from "react-router-dom";

export const HomePage = () => (
  <div className={styles.Container}>
    <div className={styles.a} />
    <div className={styles.b} />
    <div className={styles.c}>Simon</div>
    <div className={styles.d} />
    <div className={styles.e} />
    <div className={styles.f}>
      <a
        href={"https://www.twitter.com/simonstead"}
        target="_blank"
        rel="noopener noreferrer"
      >
        talk to me
      </a>
    </div>
    <div className={styles.g}>
      <p>
        <strong>Discover.</strong>
        <span className={styles.Blue}> Build.</span>{" "}
        <span className={styles.Orange}>Learn.</span>
      </p>
      <div>
        {" "}
        <p>
          I'm fortunate to have worked with experts in their fields, from{" "}
          <a
            href="https://twitter.com/coopdigital"
            target="_blank"
            rel="noopener noreferrer"
          >
            @coopdigital
          </a>
          ,{" "}
          <a
            href="https://twitter.com/GDSTeam"
            target="_blank"
            rel="noopener noreferrer"
          >
            @GDSTeam
          </a>{" "}
          and{" "}
          <a
            href="https://twitter.com/ustwo"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ustwo
          </a>{" "}
          to name a few.
        </p>
        <p>
          <strong>Find users</strong> with a problem;{" "}
          <span className={styles.Blue}>talk to them</span> to find out how to
          fix it; build something you think might work;{" "}
          <span className={styles.Black}>iterate</span>.
        </p>
      </div>
      <div>
        <p>
          I specialise in <strong>discovery</strong> and <strong>alpha</strong>{" "}
          work.
        </p>
        <ul>
          <li>
            researching <strong>user needs</strong>
          </li>
          <li>
            <strong>managing stakeholders</strong> in complex organisations
          </li>
          <li>rapid prototyping and iteration</li>
        </ul>
        I'm comfortable in all roles of a product team, applying the right agile
        techniques for the level of maturity of the product/service we build.
      </div>
      <div>
        You don't need someone with <span className={styles.Orange}>x</span>{" "}
        years experience in some language. You need someone who is:
        <ul>
          <li>
            <strong>adaptable</strong>
          </li>
          <li>
            <span className={styles.Orange}>highly collaborative</span>.
          </li>
          <li>
            <span className={styles.Blue}>a</span>gile not <strong>A</strong>
            gile
          </li>
        </ul>
        Who will:
        <ul>
          <li>
            <strong>explain</strong> the complicated stuff{" "}
            <strong>simply</strong>
          </li>
          <li>
            be <span className={styles.Orange}>emotional</span> about the things
            that matter, and <span className={styles.Blue}>pragmatic</span>{" "}
            about the things that don't
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.h} />
    <div
      className={styles.Picture}
      style={{
        background: `url(${clothes})`,
        backgroundSize: "cover"
      }}
    >
      <a
        href="https://makethread.herokuapp.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>
          I'm currently building makethread.com, a social fashion marketplace.
        </p>
      </a>
    </div>
    <div className={styles.Picture}>
      <Link to="/portfolio">
        <p>Check out some other work i've done.</p>
      </Link>
    </div>
    <div className={styles.j} />
    <div className={styles.k} />
    <div className={styles.l} />
    <div className={styles.m} />
    <div className={styles.Contact} id={"#contact"}>
      <p>
        {" "}
        <a href={"mailto:simonstead@me.com"}>simonstead@me.com</a>
      </p>
      <p>
        <a
          href={"https://www.twitter.com/simonstead"}
          target="_blank"
          rel="noopener noreferrer"
        >
          @simonstead
        </a>
      </p>
    </div>
    <div className={styles.n}>S</div>
    <div className={styles.o}>
      <p>
        I am currently available for short term{" "}
        <strong>(1&nbsp;-&nbsp;3&nbsp;month)</strong> projects, so{" "}
        <a
          href={"https://www.twitter.com/simonstead"}
          target="_blank"
          rel="noopener noreferrer"
        >
          let's chat
        </a>
        .
      </p>
    </div>
    <div className={styles.p} />
  </div>
);

// <div className={styles.Create}>CREATE</div>
export default HomePage;
