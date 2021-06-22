const element = (
  // Write your code here.
  <div>
    <div className="bg-container">
      <h1 className="heading">Congratulations</h1>
      <div className="profile-card">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        />
        <h1 className="profile-heading">Kiran V</h1>
        <p className="description">
          Rajiv Gandhi University of Knowledge and Technologies,RK Valley
        </p>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
