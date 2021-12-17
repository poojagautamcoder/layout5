import React from "react";
import styles from "../styles/SideSlide.css";
import Searchlens from "../Icons/Searchlens";
const SideSlide = () => {
  return (
    <div className="SideSlide">
      
        <div className="Blog-Serch">
          <p>Blog Search</p>
          <div className="Search-Area">
            <input className="typehere"></input>
            <div className="searchlens">
              <Searchlens />
            </div>
          </div>
        </div>
       
        <div className="Categories">
          <div className="Blog-Categories">
            <p>Blog Categories</p>
          </div>
          <div className="Category-Name">
            <div className="left-Name">
              <p>Category Name</p>
              <p>Category Name</p>
              <p>Category Name</p>
              <p>Category Name</p>
            </div>

            <div className="Right-Name">
            <p>Category Name</p>
            <p>Category Name</p>
            <p>Category Name</p>
            <p>Category Name</p>
            </div>
          </div>
        </div>
        {/*Blog - Catagery - End*/}

        {/*Side- well - Starts*/}
        <div className="Side-well">
          <p className="widget">Side Widget Well</p>
          <p>
            Lorem Ipsum is simply dummyled it tve cen essentially unchanged. It
            was popheets containingsions of Lorem Ipsumis simply dummyled it tve cen essentially unchanged.
          </p>
        </div>
        {/*Side - Well  End/*/}
      </div>
    // </div>
  );
};

export default SideSlide;
