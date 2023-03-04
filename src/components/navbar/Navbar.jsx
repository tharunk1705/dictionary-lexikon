import Logo from "../../assets/lexico-logo.png";
const Navbar = () => {
  return (
    <div className="flex justify-center items-center  p-6 font-righteous text-2xl font-semibold tracking-widest text-gray-100">
      <a href="/" className="flex justify-center items-center gap-4">
        <span>
          L<span className="text-violet-700">e</span>xikon
        </span>
        <img src={Logo} alt="lexico-logo" className="w-6 h-6 " />
      </a>
    </div>
  );
};

export default Navbar;
