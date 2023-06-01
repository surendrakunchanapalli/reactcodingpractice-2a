const Button = (props) => {
  const { btntext, classname } = props;
  return (
          <button className={`button ${className}`}>{btntext}</button>;
  );
};

const element = (
    <div className="bg-container">
      <div className="social-container">
        <h1 className="heading">Social Buttons</h1>
        <div className="button-container"></div>
            <Button btntext="Like" className="btn1" />
            <Button btntext="Comment" className="btn2" />
            <Button btntext="Share" className="btn3" />
        </div>
    </div>
</div>
);
ReactDOM.render(element, document.getElementById("root"));
