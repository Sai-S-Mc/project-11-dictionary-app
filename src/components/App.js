import "../styles/App.css";
import Dictionary from "./Dictionary";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Dictionary />
        <div className="footer-wrapper">
          <footer>
            This dictionary app{" "}
            <FontAwesomeIcon icon={faBook} className="icon" /> was designed and
            coded by{" "}
            <a
              href="https://github.com/Sai-S-Mc"
              target="_blank"
              rel="noreferrer"
              title="Sai's GitHub Profile"
            >
              Sai Satti
            </a>{" "}
            , is{" "}
            <a
              href="https://github.com/Sai-S-Mc/project-11-dictionary-app"
              target="_blank"
              rel="noreferrer"
              title="Sai's GitHub repository"
            >
              open-sourced on GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://project-11-dictionary-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
              title="Sai's project on Netlify"
            >
              Netlify
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
