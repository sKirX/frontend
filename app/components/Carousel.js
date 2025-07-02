'use client'
import { useEffect } from "react";

import Image from "next/image";

export default function carousel () {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  },[]);
  
  return (

   <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/sliders/sliders-04.png "alt="sliders 1" width={1920} height={799}/>
    </div>
    <div className="carousel-item">
        <img src="/images/sliders/sliders-02.png " alt="slider 2 "width={1920} height={799}/>
    </div>
    <div className="carousel-item">
         <img src="/images/sliders/sliders-03.png " alt="slider 3 "width={1920} height={799}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

  );
}
