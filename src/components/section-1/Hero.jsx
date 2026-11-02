import student from "../../assets/imgs/student.webp";
import hero from "../../assets/imgs/hero.avif";
import menu from "../header/menu";
import logo from "../../assets/imgs/logo.svg";
function Hero() {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${hero})` }}
        className="bg-cover bg-center bg-no-repeat  bg-[#0f252a] h-250 "
      >
        <header className="flex justify-between pt-5  ">
          <img src={logo} alt="" className="pl-[15px]" />

          <nav>
            <ul className="flex gap-10 text-white">
              {menu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="font-['Outfit',sans-serif] text-[16px] font-normal h-[29px] tracking-[0.5px] leading-[29px]"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex pr-15 ">
            <button className="text-white pr-5 text-[16px]  ">Login</button>
            <a
              href="#"
              className="text-white border-l-[1px] border-white border-solid pl-5"
            >
              Register
            </a>
          </div>
        </header>
        {/* ******************************************************************* */}
        <div className="flex justify-evenly">
          <div>
            <img src={student} alt="" className="w-180  mt-20" />
          </div>
          <div className="mt-60 flex flex-col gap-4">
            <p className="text-white font-[Outfit, sans-serif] text-[15px] font-medium tracking-[0.5px] leading-[29px]">
              ONLINE LEARNING
            </p>
            <h1
              className="text-white   font-['Space_Grotesk']
  text-[60px]
  font-semibold
h-[180px]
  tracking-[-2.3px]
  leading-[60px]"
            >
              More then{" "}
              <span
                className="font-['Space_Grotesk']
  text-[60px]
  font-semibold
  tracking-[-2.3px]
  leading-[60px] text-[#ffb606]"
              >
                {" "}
                25000+
              </span>{" "}
              <br /> education courses <br />
              online
            </h1>
            <p
              className="text-white font-['Outfit']
  text-[17px]
  font-normal
  h-[58px]
  tracking-[0.5px]
  leading-[29px]"
            >
              Lorem ipsum dolor sit amet consectetur. Gravida enim risus <br />
              sollicitudin mauris tincidunt commodo ornare.
            </p>
            <button className="text-white border-1 border-solid border-rgba(255, 255, 255, 0.2) bg-[#0f252a] w-[175.025px] h-[50.6px] border-rad rounded-[3px] ">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
