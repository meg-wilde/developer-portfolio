//Import the Link API to support client-side navigation
import Link from "next/link";
import Layout from "../components/MyLayout";
//import Image from 'react-bootstrap/Image'

export default () => (
  <Layout>
    <div id="main">
      <h1>My Developer Portfolio</h1>
      <h3>Meg Wilde</h3>
      <p>Software Developer</p>
    </div>
    <style jsx>{`
      #main {
        background-color: #bae9d7;
        text-align: center;
        padding: 20px;
        color: #4c4758;
      }

      h3,
      p {
        color: #d496a7;
      }
    `}</style>
  </Layout>
);
