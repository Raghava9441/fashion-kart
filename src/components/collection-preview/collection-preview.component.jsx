import React from "react";
import Collectionitem from "../collection-item/collection-item.component";
import "./collection-preview.style.scss";
const Collectionpreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otheritemprops }) => (
            <Collectionitem key={id} {...otheritemprops} />
          ))}
      </div>
    </div>
  );
};

export default Collectionpreview;
