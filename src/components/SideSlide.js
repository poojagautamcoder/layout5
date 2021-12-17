import React from "react";
import styles from '../styles/SideSlide.css'
import Searchlens from "../Icons/Searchlens";
const  SideSlide = () =>{
    return(


<div className = "SideSlide">
    {/* ////////SIDESLIDE - CONTENT - START///////// */}
    <div className = "SideSlide-content">

        {/* ////////SERCH - BAR - STARTS////////// */}
    <div className="Blog-Serch">
    <p>Blog Search</p>
    <div className = "Search-Area">
    <input className = "typehere"></input>
    <div className = "searchlens">
    <Searchlens/>
    </div>

    </div>
</div>

{/* //////SEARCH - BAR - ENDS */}



{/* ///////BLOG - CATAGORY - STARTS//////// */}
<div className = "Categories">
<div className = "Blog-Categories">
<p>Blog Categories</p>
</div>
<div className = "Category-Name">
    <div className = "left-Name">
        Category Name
        Category Name
        Category Name
        Category Name
    </div>

<div className = "Right-Name">
    Category Name
    Category Name
    Category Name
    Category Name
</div>
</div>
</div>


{/* ///////////////////////////////Blog - Catagery - Ends /////////////////// */}


{/* ///////////////////////////////////Side- well - Starts /////////////////////////// */}
<div className= "Side-well">
    <p className = "widget">Side Widget Well</p>
    <p>Lorem Ipsum is simply dummyled it tve cen essentially unchanged. It was popheets containingsions of Lorem Ipsum</p>
</div>

{/* ///////////////////////////////////Side - Well  Ends ////////////////////////////// */}
</div>


    </div>
    

    );

}

export default SideSlide