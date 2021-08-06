function Button(props) {
  return <button className={props.classNames}>{props.content}</button>;
}

const element = (
  <div className="card-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-div">
      <Button content={"Like"} classNames={"btn1 btn"} />
      <Button content={"Comment"} classNames={"btn2 btn"} />
      <Button content={"Share"} classNames={"btn3 btn"} />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
