import "./Link.css";

function Link({ name, url }) {
  return (
    <a className="link" href={url}>
      {name}
    </a>
  );
}

export default Link;
