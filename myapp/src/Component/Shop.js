import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Shop = () => {
  const [products, setproducts] = useState([])
  const [skip, setskip] = useState([]);

  const [url, seturl] = useState(`https://dummyjson.com/products?limit=12&skip=${skip}`);

  useEffect(() => {
    fetch("http://localhost:9991/crosAllProduct")
      .then(res => res.json())
      .then((ry) => { setproducts(ry) 
        console.log(ry);
        
      });
  }, [url, skip]);

  console.log(products);

  const handleChange = (order) => {
    if (order == "asc") {
      seturl('https://dummyjson.com/products?sortBy=price&order=asc')
    }
    else if (order == "desc") {
      seturl('https://dummyjson.com/products?sortBy=price&order=desc')
    }
  }

 const handlePagination = (check) => {
  if(check =="next"){
    setskip(skip+5)
    seturl(`https://dummyjson.com/products?limit=12&skip=${skip}`)
  }
  else if(check =="prev"){
    if(skip != 0){
      setskip(skip-5)
      seturl(`https://dummyjson.com/products?limit=12&skip=${skip}`)
    }
  }
 }


  return (
    <>
      <div>
        {/* Breadcrumb Start */}
        <div className="container-fluid">
          <div className="row px-xl-5">
            <div className="col-12">
              <nav className="breadcrumb bg-light mb-30">
                <a className="breadcrumb-item text-dark" href="#">Home</a>
                <a className="breadcrumb-item text-dark" href="#">Shop</a>
                <span className="breadcrumb-item active">Shop List</span>
              </nav>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}
        {/* Shop Start */}
        <div className="container-fluid">
          <div className="row px-xl-5">
            {/* Shop Sidebar Start */}
            <div className="col-lg-3 col-md-4">
              {/* Price Start */}
              <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by price</span></h5>
              <div className="bg-light p-4 mb-30">
                <form>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
                    <label className="custom-control-label" htmlFor="price-all">All Price</label>
                    <span className="badge border font-weight-normal">1000</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" className="custom-control-input" id="price-1" />
                    <label className="custom-control-label" htmlFor="price-1">$0 - $100</label>
                    <span className="badge border font-weight-normal">150</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" className="custom-control-input" id="price-2" />
                    <label className="custom-control-label" htmlFor="price-2">$100 - $200</label>
                    <span className="badge border font-weight-normal">295</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" className="custom-control-input" id="price-3" />
                    <label className="custom-control-label" htmlFor="price-3">$200 - $300</label>
                    <span className="badge border font-weight-normal">246</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" className="custom-control-input" id="price-4" />
                    <label className="custom-control-label" htmlFor="price-4">$300 - $400</label>
                    <span className="badge border font-weight-normal">145</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                    <input type="checkbox" className="custom-control-input" id="price-5" />
                    <label className="custom-control-label" htmlFor="price-5">$400 - $500</label>
                    <span className="badge border font-weight-normal">168</span>
                  </div>
                </form>
              </div>
              {/* Price End */}
              {/* Color Start */}
              <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by color</span></h5>
              <div className="bg-light p-4 mb-30">
                <form>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" className="custom-control-input" defaultChecked id="color-all" />
                    <label className="custom-control-label" htmlFor="price-all">All Color</label>
                    <span className="badge border font-weight-normal">1000</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" className="custom-control-input" id="color-1" />
                    <label className="custom-control-label" htmlFor="color-1">Black</label>
                    <span className="badge border font-weight-normal">150</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" className="custom-control-input" id="color-2" />
                    <label className="custom-control-label" htmlFor="color-2">White</label>
                    <span className="badge border font-weight-normal">295</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" className="custom-control-input" id="color-3" />
                    <label className="custom-control-label" htmlFor="color-3">Red</label>
                    <span className="badge border font-weight-normal">246</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" className="custom-control-input" id="color-4" />
                    <label className="custom-control-label" htmlFor="color-4">Blue</label>
                    <span className="badge border font-weight-normal">145</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                    <input type="checkbox" className="custom-control-input" id="color-5" />
                    <label className="custom-control-label" htmlFor="color-5">Green</label>
                    <span className="badge border font-weight-normal">168</span>
                  </div>
                </form>
              </div>
              {/* Color End */}
              {/* Size Start */}
              <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by size</span></h5>
              <div className="bg-light p-4 mb-30">
                <form>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" className="custom-control-input" defaultChecked id="size-all" />
                    <label className="custom-control-label" htmlFor="size-all">All Size</label>
                    <span className="badge border font-weight-normal">1000</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" className="custom-control-input" id="size-1" />
                    <label className="custom-control-label" htmlFor="size-1">XS</label>
                    <span className="badge border font-weight-normal">150</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" className="custom-control-input" id="size-2" />
                    <label className="custom-control-label" htmlFor="size-2">S</label>
                    <span className="badge border font-weight-normal">295</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" className="custom-control-input" id="size-3" />
                    <label className="custom-control-label" htmlFor="size-3">M</label>
                    <span className="badge border font-weight-normal">246</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" className="custom-control-input" id="size-4" />
                    <label className="custom-control-label" htmlFor="size-4">L</label>
                    <span className="badge border font-weight-normal">145</span>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                    <input type="checkbox" className="custom-control-input" id="size-5" />
                    <label className="custom-control-label" htmlFor="size-5">XL</label>
                    <span className="badge border font-weight-normal">168</span>
                  </div>
                </form>
              </div>
              {/* Size End */}
            </div>
            {/* Shop Sidebar End */}
            {/* Shop Product Start */}
            <div className="col-lg-9 col-md-8">
              <div className="row pb-3">
                <div class="col-12 pb-1">
                  <div class="d-flex align-items-center justify-content-between mb-4">
                    <div>
                      <button class="btn btn-sm btn-light"><i class="fa fa-th-large"></i></button>
                      <button class="btn btn-sm btn-light ml-2"><i class="fa fa-bars"></i></button>
                    </div>
                    <div class="ml-2">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Sorting</button>
                        <div class="dropdown-menu dropdown-menu-right">
                          <button onClick={() => { handleChange("asc") }} class="dropdown-item" href="">low-to-high</button>
                          <button onClick={() => { handleChange("desc") }} class="dropdown-item" href="#">high-to-low</button>
                          <a class="dropdown-item" href="#">Best Rating</a>
                        </div>
                      </div>
                      <div class="btn-group ml-2">
                        <button type="button" class="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Showing</button>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="#">10</a>
                          <a class="dropdown-item" href="#">20</a>
                          <a class="dropdown-item" href="#">30</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                {products.map((k) => (
                  <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                    <div className="product-item bg-light mb-4">
                      <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={"http://localhost:9991/uploads/"+k.image} style={{height:'300px',objectFit:'scale-down'}} alt />
                        <div className="product-action">
                          <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
                          <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
                          <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
                          <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
                        </div>
                      </div>
                      <div className="text-center py-4">
                        <Link className="h6 text-decoration-none text-truncate" to={`/Detail/${k._id}`}>{k.title}</Link>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                          <h5>${k.price}</h5><h6 className="text-muted ml-2"><del>{k.price}</del></h6>
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
                ))}


                <div className="col-12">
                  <nav>
                    <ul className="pagination justify-content-center">
                      <li className="page-item "><button className="page-link" onClick={() => { handlePagination("prev") }}>Previous</button></li>
                      <li className="page-item "><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><button className="page-link" onClick={() => { handlePagination("next") }}>Next</button></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* Shop Product End */}
          </div>
        </div>
        {/* Shop End */}
      </div>
    </>
  )
}

export default Shop