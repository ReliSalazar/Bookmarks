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
      name: "Titan Email",
      url: "https://titan.hostgator.mx/mail/",
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
      name: "Reddit",
      url: "https://www.reddit.com/",
      type: "social",
    },
    {
      name: "Wirechan",
      url: "https://wirechan.org/",
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
      name: "Trello",
      url: "https://trello.com/b/HSkYq7kV/sprint-software-compacto",
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
      url: "https://demo.relisalazar.com/",
      type: "utility",
    },
  ];
  const tools = [
    {
      name: "Dev Docs",
      url: "https://devdocs.io/",
      type: "tools",
    },
    {
      name: "Tools & Resources",
      url: "https://undesign.learn.uno/",
      type: "tools",
    },
    {
      name: "Color wheel",
      url: "https://www.canva.com/colors/color-wheel/",
      type: "tools",
    },
    {
      name: "Coolors",
      url: "https://coolors.co/generate",
      type: "utility",
    },
    {
      name: "Smooth Shadow",
      url: "https://shadows.brumm.af/",
      type: "tools",
    },
    {
      name: "Glassmorphism",
      url: "https://hype4.academy/tools/glassmorphism-generator",
      type: "tools",
    },
    {
      name: "Get waves",
      url: "https://getwaves.io/",
      type: "tools",
    },
  ];

  return (
    <div className="app">
      <div className="container fade-in">
        <div className="links">
          <div className="titlebox">
            <h2>daily use</h2>
          </div>
          {daily.map((bookmark) => (
            <Link name={bookmark.name} url={bookmark.url} key={bookmark.url} />
          ))}
        </div>

        <div className="links">
          <div className="titlebox">
            <h2>social</h2>
          </div>
          {social.map((bookmark) => (
            <Link name={bookmark.name} url={bookmark.url} key={bookmark.url} />
          ))}
        </div>

        <div className="links">
          <div className="titlebox">
            <h2>utility</h2>
          </div>
          {utility.map((bookmark) => (
            <Link name={bookmark.name} url={bookmark.url} key={bookmark.url} />
          ))}
        </div>

        <div className="links">
          <div className="titlebox">
            <h2>tools</h2>
          </div>
          {tools.map((tool) => (
            <Link name={tool.name} url={tool.url} key={tool.url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
