import React from "react";

interface Props {
  imgURL: string;
  title: string;
  text: string;
  link: string;
  linkText: string;
}
const Card = ({ imgURL, title, text, link, linkText }: Props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imgURL} className="card-img-top" alt="..." />
      <div className="car-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default Card;
