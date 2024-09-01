import Image from "./assets/investment-calculator-logo.png"


export default function Header(){

    return(
     <header id="header">
        <img src={Image} alt="Image showing a money bag"></img>
        <h1>React Investment Calculator</h1>
     </header>

    );

}