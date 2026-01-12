import Image from "next/image";

function NavegationBar() {
  return (
  <nav className="py-8 px-8 lg:px-0 border-b border-neutral-700">
    <Image src="/logo.svg" width={173} height={33} alt="Website logo consisting of the words Around The US"/>
  </nav> 
  );
}

export default NavegationBar;