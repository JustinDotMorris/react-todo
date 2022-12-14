import "./Header.scss";

const Header = () => {
  return (
    <div className="headerContainer">
      <h1 className="headerContainer--mainHeading">My Todos</h1>
      <button className="headerContainer--resetButton">Reset</button>
    </div>
  );
};

export default Header;
