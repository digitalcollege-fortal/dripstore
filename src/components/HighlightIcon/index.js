import React from "react";
import "./styles.scss";

export default function HighlightIcon() {
  const Links = [
    {
      text: "Camisetas",
      icon: "/images/T-Shirts.svg",
    },
    {
      text: "Calça",
      icon: "/images/Pants.svg",
    },
    {
      text: "HeadFones",
      icon: "/images/HeadFones.svg",
    },
    {
      text: "Bonés",
      icon: "/images/Pants.svg",
    },
  ];
  
  return (
    <section className="container-highlight-icon">
      <h3 className="title-highlight-icon">Coleções em destaque</h3>
      <article className="content-highlight-icon">
        <div className="content-icons">
        {Links.map((Links) => (
          <div className="container-rounded-icons">
            <div className="rounded-icons">
              <img src={Links.icon} width={64} className="icon-focus img-icon" />
            </div>
            <span className="span-icons">{Links.text}</span>
          </div>
        ))}
        </div>
      </article>
    </section>
  );
}
