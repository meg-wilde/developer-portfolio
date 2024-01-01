//Import the Link API to support client-side navigation
import Link from "next/link";
import Layout from "../components/MyLayout";

export default () => (
  <Layout>
    <div id="main">
      <h2>About Me</h2>
      <h4>Work</h4>
      <p>
        I work full-time as a Staff Product Manager in a travel tech company
        based out of our Edinburgh office
      </p>
      <h4>Education</h4>
      <p>
        I am currently studying a Software Engineering Bootcamp with Hyperion
        Dev. At university I studied Journalism at the Univeristy of Stirling
        2010-2014.
      </p>
      <h4>Hobbies</h4>
      <p>
        Outside of work I enjoy keeping active. I have 2 dogs that I enjoy
        taking for long walks and I play field hockey for a local team.
      </p>
    </div>
    <style jsx>{`
      #main {
        background-color: #bae9d7;
        text-align: left;
        padding: 20px;
        color: #4c4758;
      }
      p {
        color: ##424145;
      }
      h2 {
        text-align: center;
      }
    `}</style>
  </Layout>
);
