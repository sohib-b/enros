

import React from "react";

function BlogItem(props) {
    return (
        
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card" >
                        <img src="https://placehold.co/600x400" className="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{props.title}</h5>
                                <p class="card-text">{props.desc}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                </div>


          
     



    )

}
export default BlogItem;
