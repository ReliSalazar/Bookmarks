import "./Form.css";

function Form({
  onSubmit,
  name,
  handleName,
  url,
  handleUrl,
  type,
  handleType,
}) {
  return (
    <form onSubmit={onSubmit} className="form">
      <h2>new bookmark</h2>
      <div className="field">
        <label htmlFor="name">name:</label>
        <input type="text" vaue={name} onChange={handleName} />
      </div>
      <div className="field">
        <label htmlFor="name">url:</label>
        <input type="text" vaue={url} onChange={handleUrl} />
      </div>
      <div className="field">
        <label htmlFor="name">type:</label>
        <input type="text" vaue={type} onChange={handleType} />
      </div>
      <button type="submit">save</button>
    </form>
  );
}

export default Form;
