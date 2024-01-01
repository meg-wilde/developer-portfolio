import Link from "next/link";
import Layout from "../components/MyLayout";

const Projects = () => (
  <Layout>
    <div id="main">
      <h2>Projects</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Project Name</th>
            <th>Description</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>To Do List App</td>
            <td>
              A simple react app that creates a list of tasks. The user can add,
              edit, remove and mark each task as complete.
            </td>
            <td>
              <Link href="https://meg-to-do-ca0360b3b54b.herokuapp.com/">
                <p className="link">Heroku Deployed link</p>
              </Link>
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Hangman Game</td>
            <td>
              A game of hangman where the user has to guess the word to win
            </td>
            <td>
              <Link href="https://github.com/meg-wilde/hangman">
                <p className="link">Github link</p>
              </Link>
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td>iTunes Search</td>
            <td>
              A full stack app which allows the user to search the iTunes API
              for media and then save their favourites to a favourites section.
            </td>
            <td>
              <Link href="https://github.com/meg-wilde/itunes-search-app">
                <p className="link">Github link</p>
              </Link>
            </td>
          </tr>
          <tr>
            <td>4.</td>
            <td>Next.js Developer Portfolio</td>
            <td>
              My first Next.js app. (This app!) To showcase my developer
              portfolio.
            </td>
            <td>
              <Link href="">
                <p className="link">Github link</p>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <style jsx>{`
        #main {
          background-color: #bae9d7;
          text-align: center;
          padding: 20px;
          color: #4c4758;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
          background-color: #e6f0ec;
        }

        th {
          background-color: #d496a7;
          color: white;
        }

        th,
        td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
          justify-content: center;
          align-items: center;
        }

        .link {
          color: #d496a7;
          text-decoration: none;
          margin: 0;
          display: flex;
          align-items: center;
        }

        .link:hover {
          color: #4c4758;
          text-decoration: none;
        }
      `}</style>
    </div>
  </Layout>
);

export default Projects;
