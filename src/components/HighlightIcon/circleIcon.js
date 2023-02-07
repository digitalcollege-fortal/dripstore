import { useEffect, useState } from "react";
import React from "react";
import "./styles.scss";

export default function CircleIcon() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/highlight-icons')
            .then(res => res.json())
            .then(res => setCategories(res));
    }, []);

  return (
    <section className="container-highlight-icon">
      <h3 className="title-highlight-icon">Coleções em destaque</h3>
      <article className="content-highlight-icon">
        <div className="content-icons">
        {categories.map(cat => {
            return (
                <div className="container-rounded-icons">
                    <div className="rounded-icons">
                        <img src={cat.icon} width={64} className="icon-focus img-icon" />
                    </div>
                    <span className="span-icons">{cat.text}</span>
                </div>
            )
        })}
        </div>
      </article>
    </section>
  );
}
