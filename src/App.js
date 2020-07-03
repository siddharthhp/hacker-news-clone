import React from "react";
import BulletinHeader from "./containers/BulletinHeader";
import BulletinContainer from "./containers/Bulletin";

export const App = () => {
  return (
      <div>
        <BulletinHeader />
        <BulletinContainer />
      </div>
    );
};
