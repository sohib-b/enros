import React from "react";
import BlogItem from "./BlogItem";

function Blogs() {
    return (
        <div className="container">
            <div className="row">
                <BlogItem title="Mobile" desc="lorem mobile" />
                <BlogItem title="computer" desc="lorem computer" />
                <BlogItem title="tablet" desc="lorem tablet" />
            </div>
        </div>
    )
}
export default Blogs;