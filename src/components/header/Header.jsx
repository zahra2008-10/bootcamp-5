import menu from "./menu";
import logo from "../../assets/imgs/logo.svg";

function Header() {
  return (
    <>
      <header className="flex justify-between  ">
        <div>
          <img src={logo} alt="" />
          <span>learn</span>
        </div>
        <nav>
          <ul className="flex gap-10">
            {menu.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.link}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div>
          <button>Login</button>
          <a href="#">Register</a>
        </div>
      </header>
    </>
  );
}
export default Header;
