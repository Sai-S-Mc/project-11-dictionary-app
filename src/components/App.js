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
          This dictionary app was designed and coded by Sai Satti, is
          open-sourced on GitHub and hosted on Netlify
        </footer>
      </div>
    </div>
  );
}

export default App;
