import React, {  useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ProductSorting = () => {
    const [products, setproducts] = useState([]);
    let paramsId =useParams();
    useEffect(()=>{
        fetch(`https://dummyjson.com/products?sortBy=title&order=asc${paramsId.price}`)
        .then(res => res.json())
        .then((n)=>{setproducts(n.products)});
    },[])

    console.log(products);
  return (
    <>
    <div className="container-fluid mb-3">
    <div className="row px-xl-5">
      <div className="col-lg-8">
        <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#header-carousel" data-slide-to={0} className="active" />
            <li data-target="#header-carousel" data-slide-to={1} />
            <li data-target="#header-carousel" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item position-relative active" style={{height: 430}}>
              <img className="position-absolute w-100 h-100" src="assets/img/carousel-1.jpg" style={{objectFit: 'cover'}} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: 700}}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Men Fashion</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                  <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="carousel-item position-relative" style={{height: 430}}>
              <img className="position-absolute w-100 h-100" src="assets/img/carousel-2.jpg" style={{objectFit: 'cover'}} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: 700}}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Women Fashion</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                  <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="carousel-item position-relative" style={{height: 430}}>
              <img className="position-absolute w-100 h-100" src="assets/img/carousel-3.jpg" style={{objectFit: 'cover'}} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: 700}}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Kids Fashion</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                  <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="product-offer mb-30" style={{height: 200}}>
          <img className="img-fluid" src="assets/img/offer-1.jpg" alt />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Special Offer</h3>
            <a href className="btn btn-primary">Shop Now</a>
          </div>
        </div>
        <div className="product-offer mb-30" style={{height: 200}}>
          <img className="img-fluid" src="assets/img/offer-2.jpg" alt />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Special Offer</h3>
            <a href className="btn btn-primary">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Carousel End */}
  {/* Featured Start */}
  <div className="container-fluid pt-5">
    <div className="row px-xl-5 pb-3">
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="d-flex align-items-center bg-light mb-4" style={{padding: 30}}>
          <h1 className="fa fa-check text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="d-flex align-items-center bg-light mb-4" style={{padding: 30}}>
          <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
          <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="d-flex align-items-center bg-light mb-4" style={{padding: 30}}>
          <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="d-flex align-items-center bg-light mb-4" style={{padding: 30}}>
          <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
        </div>
      </div>
    </div>
  </div>
  {/* Featured End */}
  {/* Categories Start */}
  <div className="container-fluid  pt-5">
  <h2 className="section-title  position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
  <div className="row px-xl-5 pb-3 d-flex">


  {products.map((k)=>(
  
   <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
     <Link className="text-decoration-none " to={`/products/${k.id}`}>
       <div className="cat-item  d-flex align-items-center mb-4">
         <div className="overflow-hidden" style={{width: 100, height: 100}}>
           <img className="img-fluid" src={k.thumbnail} alt />
           {/* <i  class='bx bxs-shopping-bags'></i> */}
         </div>
         <div className="flex-fill pl-3">
           <h6>{k.name}</h6>
           <small className="text-body">{k.brand}</small>
         </div>
       </div>
     </Link>
   </div>
   
//    <div className="row">
//    {products.map((k) => (
//      <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={k.id}>
//        <Link className="text-decoration-none" to={`/products/${k.id}`}>
//          <div className="cat-item d-flex align-items-center mb-4">
//            <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
//              <img className="img-fluid" src={k.thumbnail} alt={k.title} />
//            </div>
//            <div className="flex-fill pl-3">
//              <h6>{k.title}</h6>
//              <small className="text-body">{k.brand}</small>
//            </div>
//          </div>
//        </Link>
//      </div>
//    ))}
//  </div>
// );
   
  
  ))};


  </div>
  </div>
 
  {/* Categories End */}
  {/* Products Start */}
  <div className="container-fluid pt-5 pb-3">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Featured Products</span></h2>
    <div className="row px-xl-5">
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/product-1.jpg" alt />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
            </div>
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/product-2.jpg" alt />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
            </div>
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/product-3.jpg" alt />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
            </div>
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/product-4.jpg" alt />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
            </div>
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/product-5.jpg" alt />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
            </div>
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/product-6.jpg" alt />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
            </div>
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/product-7.jpg" alt />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
            </div>
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/product-8.jpg" alt />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
            </div>
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Products End */}
  {/* Offer Start */}
  <div className="container-fluid pt-5 pb-3">
    <div className="row px-xl-5">
      <div className="col-md-6">
        <div className="product-offer mb-30" style={{height: 300}}>
          <img className="img-fluid" src="assets/img/offer-1.jpg" alt />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Special Offer</h3>
            <a href className="btn btn-primary">Shop Now</a>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="product-offer mb-30" style={{height: 300}}>
          <img className="img-fluid" src="assets/img/offer-2.jpg" alt />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Special Offer</h3>
            <a href className="btn btn-primary">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Offer End */}
  {/* Products Start */}
  <div className="container-fluid pt-5 pb-3">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Recent Products</span></h2>
    <div className="row px-xl-5">
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/product-1.jpg" alt />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
            </div>
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/product-2.jpg" alt />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
            </div>
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/product-3.jpg" alt />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
            </div>
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/product-4.jpg" alt />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
            </div>
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/product-5.jpg" alt />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
            </div>
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/product-6.jpg" alt />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
            </div>
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/product-7.jpg" alt />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
            </div>
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="assets/img/product-8.jpg" alt />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
            </div>
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Products End */}
  {/* Vendor Start */}
  <div className="container-fluid py-5">
    <div className="row px-xl-5">
      <div className="col">
        <div className="owl-carousel vendor-carousel">
          <div className="bg-light p-4">
            <img src="assets/img/vendor-1.jpg" alt />
          </div>
          <div className="bg-light p-4">
            <img src="assets/img/vendor-2.jpg" alt />
          </div>
          <div className="bg-light p-4">
            <img src="assets/img/vendor-3.jpg" alt />
          </div>
          <div className="bg-light p-4">
            <img src="assets/img/vendor-4.jpg" alt />
          </div>
          <div className="bg-light p-4">
            <img src="assets/img/vendor-5.jpg" alt />
          </div>
          <div className="bg-light p-4">
            <img src="assets/img/vendor-6.jpg" alt />
          </div>
          <div className="bg-light p-4">
            <img src="assets/img/vendor-7.jpg" alt />
          </div>
          <div className="bg-light p-4">
            <img src="assets/img/vendor-8.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>


    </>
  )
}

export default ProductSorting