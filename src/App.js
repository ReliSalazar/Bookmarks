import Link from "./components/Link";
import "./App.css";

function App() {
  const daily = [
    {
      name: "Google News",
      url: "https://news.google.com/",
      type: "daily",
    },
    {
      name: "Gmail",
      url: "https://gmail.com/",
      type: "daily",
    },
    {
      name: "Pomodoro Clock",
      url: "https://relisalazar.github.io/pomodoro-clock/",
      type: "daily",
    },
    {
      name: "Schedule",
      url: "https://relisalazar.github.io/daily/",
      type: "daily",
    },
    {
      name: "Rutina",
      url: "https://relisalazar.github.io/rutina/",
      type: "daily",
    },
  ];
  const social = [
    {
      name: "Tweetdeck",
      url: "https://tweetdeck.twitter.com/",
      type: "social",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
      type: "social",
    },
    {
      name: "Deviantart",
      url: "https://www.deviantart.com/",
      type: "social",
    },
    {
      name: "Wired-7",
      url: "https://wired-7.org/",
      type: "social",
    },
    {
      name: "Lainchan",
      url: "https://lainchan.org/",
      type: "social",
    },
  ];
  const utility = [
    {
      name: "Notion",
      url: "https://www.notion.so/relisalazar/",
      type: "utility",
    },
    {
      name: "Coolors",
      url: "https://coolors.co/generate",
      type: "utility",
    },
    {
      name: "Mongo",
      url: "https://cloud.mongodb.com/",
      type: "utility",
    },
    {
      name: "Heroku",
      url: "https://dashboard.heroku.com/",
      type: "utility",
    },
    {
      name: "Github",
      url: "https://github.com/",
      type: "utility",
    },
    {
      name: "Portfolio",
      url: "https://relisalazar.com/",
      type: "utility",
    },
    {
      name: "Demo Site",
      url: "http://demo.relisalazar.com/",
      type: "utility",
    },
  ];

  return (
    <div className="app">
      <div className="container">
        <div className="links">
          <h2>daily use</h2>
          {daily.map((bookmark) => (
            <Link name={bookmark.name} url={bookmark.url} key={bookmark.url} />
          ))}
        </div>

        <div className="links">
          <h2>social</h2>
          {social.map((bookmark) => (
            <Link name={bookmark.name} url={bookmark.url} key={bookmark.url} />
          ))}
        </div>

        <div className="links">
          <h2>utility</h2>
          {utility.map((bookmark) => (
            <Link name={bookmark.name} url={bookmark.url} key={bookmark.url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
