import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();

  const myApiKey = "cMaNNHPRW1y1jeNtKec1MuyUIM7UwRTIjfgeMYfc";

  const fetchImageOfTheDay = () => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${myApiKey}`).then(
      (response) =>
        response
          .json()
          .then((fetchedData) => setData(fetchedData))
          .catch((error) => console.log(error.message))
    );
  };

  useEffect(() => {
    fetchImageOfTheDay();
  }, []);

  return (
    <div className="container">
      <h1>NASA Picture Of The Day by KPortfolio</h1>
      {data ? (
        <div className="main">
          <div className="left">
            <img src={data.url} alt={data.explanation}></img>
          </div>
          <div className="right">
            <h1 className="titles">{data.date}</h1>
            <h3 className="titles">{data.title}</h3>
            <h2 className="titles">{data.copyright}</h2>
            <p className="explanation">{data.explanation}</p>
            <a className="link" href={data.url}>
              Link of the picture
            </a>
          </div>
        </div>
      ) : (
        <p>🤩 we are collecting data at the moment 🤩</p>
      )}
      <footer>
        <p className="copyright">
          &copy; Copyright {new Date().getFullYear()} by{" "}
          <a
            href="https://tranquil-monstera-12b36b.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            KPortfolio
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
