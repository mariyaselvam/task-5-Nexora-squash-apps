
import LogoOne from "../../assets/HomeOne/BrandLogoSec/Logo-1.svg"
import Star from "../../assets/HomeOne/BrandLogoSec/Star.svg"

import { BrandLogosSecData } from "../../content/data";

const GreenBrandLogosSec = () => {
  return (
    <>
     <section className="green-brand-logo-sec">
     <ul className="brand-Logo-ul-list">
          {BrandLogosSecData.map((items, index) => (
            <>
              <li>
                <img src={items.logo} alt="" />
              </li>
              <li>
                <img src={items.star} alt="" />
              </li>
            </>
          ))}
        </ul>
    </section>
    </>
  )
}

export default GreenBrandLogosSec