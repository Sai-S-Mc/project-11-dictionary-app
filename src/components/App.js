import "../styles/App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer>
          This dictionary app was designed and coded by{" "}
          <a
            href="https://github.com/Sai-S-Mc"
            target="_blank"
            rel="noreferrer"
          >
            Sai Satti
          </a>{" "}
          , is{" "}
          <a
            href="https://github.com/Sai-S-Mc/project-11-dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://project-11-dictionary-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
