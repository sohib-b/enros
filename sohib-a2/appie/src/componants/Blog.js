import React from 'react'
import blog from './imges/blog-1.635113ba.jpg'
import blog2 from './imges/blog-2.e59d5757.jpg'
import blog3 from './imges/blog-3.e4e1c4e0.jpg'


export default function Blog() {
    return (
        <section className='blog'>
            <div className="container">
                <div className="text-center">
                    <h2>Latest blog posts</h2>
                    <p>Different layouts and styles for team sections.</p>

                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <img src={blog} alt="" />
                        <p>March 10, 2022Saas & App</p>
                        <h5>Introducing New Apps Design for<br /> our iOS App</h5>
                        <button type="button" class="btn">Learn More <i class="fa-solid fa-arrow-right"></i></button>

                    </div>



                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <img src={blog2} alt="" />
                        <p>March 10, 2022Saas & App</p>
                        <h5>Introducing New Apps Design for<br /> our iOS App</h5>
                        <button type="button" class="btn ">Learn More <i class="fa-solid fa-arrow-right"></i></button>
                    </div>




                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <img src={blog3} alt="" />
                        <p>March 10, 2022Saas & App</p>
                        <h5>Introducing New Apps Design for<br /> our iOS App</h5>
                        <button type="button" class="btn">Learn More <i class="fa-solid fa-arrow-right"></i></button>
                    </div>




                </div>
            </div>
        </section>
    )
}
