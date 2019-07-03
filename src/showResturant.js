import React, {Fragment} from 'react';
import Header from "./header.js";
import Rest from "./Resturants.js";
import Footer from "./footer.js";
function ShowResturant() {
  return (
    <Fragment>
      <Header></Header>
      <Rest></Rest>
      <Footer></Footer>
    </Fragment>
    );
}

export default ShowResturant;