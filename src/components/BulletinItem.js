import React, { useContext } from "react";
//import StoriesContext from "../context/stories";

const BulletinItem = ({ story }) => (
    <li>
        <span>{ story.author }</span>
        <span>{ story.points }</span>
        <span>{ story.objectID }</span>
    </li>
);

export default BulletinItem;
