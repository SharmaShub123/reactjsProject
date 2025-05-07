import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()
  const userId = localStorage.getItem('userId')
  const [userData, setuserData] = useState({});

  useEffect(() => {
    if(!localStorage.getItem('userId')){
      navigate('login')
    }
  }, []);
  
    useEffect(() => {
      fetch(`https://dummyjson.com/users/${userId}`)
  .then(res => res.json())
  .then((k)=>setuserData(k));
    }, []);

    const logout = () => {
      localStorage.removeItem('userId')
      navigate('/login')
        }
      
  return (
    <>
    <div class="container mt-3  ">
    <div class="row">
  <div class="col-3">
    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a class="nav-link active text-dark" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Profile</a>
      <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Orders</a>
      <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Address</a>
      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">My account</a>
      <a onClick={logout} class="nav-link" id="v-pills-logout-tab" data-toggle="pill" href="#v-pills-logout" role="tab" aria-controls="v-pills-logout" aria-selected="false">Log-out</a>

      {/* <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">log out</a> */}
    </div>
  </div>
  <div class="col-9">
    <div class="tab-content" id="v-pills-tabContent">
      <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
      <div className="container">
  {/* Profile Card */}
  <div className="card mx-auto w-100">
    <div className="card-body text-center">
      {/* Profile Picture */}
      <img src={userData.image} className="rounded-circle mb-3" alt="Profile Picture" style={{width: 150, height: 150}} />
      {/* Customer Name and Info */}
      <h4 className="card-title">{userData.firstName}</h4>
      <p className="text-muted">{userData.email}</p>
      <p className="text-muted">Phone: {userData.phone}</p>
      {/* Divider */}
      <hr />
      {/* Address Information */}
      <div className="text-start">
        <h6 className="fw-bold">Shipping Address</h6>
        <p>123 Main St,<br /> Cityville, CA 12345<br /> United States</p>
      </div>
      {/* Account Actions */}
      <div className="d-flex justify-content-around mt-4">
        <a href><button className="btn btn-primary" >Edit Profile</button></a>
      </div>
    </div>
  </div>
</div>


      </div>
      <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
      <table className="table my-5 ">
  <thead className="tab-head bg-dark">
    <tr>
      <th scope="col">No</th>
      <th scope="col">product</th>
      <th scope="col">Date</th>
      <th scope="col">Price</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Product Name</td>
      <td>01 jan 2024</td>
      <td>2,200</td>
      <td>Approved</td>
      <td><button className="btn btn-danger" type="submit">View</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Product Name</td>
      <td>01 jan 2024</td>
      <td>2,200</td>
      <td>Approved</td>
      <td><button className="btn btn-danger" type="submit">View</button></td>
    </tr><tr>
      <th scope="row">3</th>
      <td>Product Name</td>
      <td>01 jan 2024</td>
      <td>2,200</td>
      <td>Approved</td>
      <td><button className="btn btn-danger" type="submit">View</button></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Product Name</td>
      <td>01 jan 2024</td>
      <td>2,200</td>
      <td>Approved</td>
      <td><button className="btn btn-danger" type="submit">View</button></td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Product Name</td>
      <td>01 jan 2024</td>
      <td>2,200</td>
      <td>Approved</td>
      <td><button className="btn btn-danger" type="submit">View</button></td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Product Name</td>
      <td>01 jan 2024</td>
      <td>2,200</td>
      <td>Approved</td>
      <td><button className="btn btn-danger" type="submit">View</button></td>
    </tr>
  </tbody>
</table>

      </div>
      <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
      <div className="row  ">
  <div className="col-sm-6">
    <div className="card bg-light">
      <div className="card-body">
        <h5 className="card-title">Address</h5>
        <p className="card-text"> Payment Address <br />121 Payment Street,los Angelies,CA<br />Mobile:012-345-6789
        </p>
        <a href="#" className="btn btn-danger mb-3">Edit Address</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card bg-light">
      <div className="card-body">
        <h5 className="card-title">Address</h5>
        <p className="card-text">shipping Address <br />121 Payment Street,los Angelies,CA<br />Mobile:012-345-6789
        </p>
        <a href="#" className="btn btn-danger mb-3">Edit Address</a>
      </div>
    </div>
  </div>
</div>

      </div>
      <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
      <form>
  <div className="row  w-100 m-2 col-12 col-lg-12 bg-light justify-content-center">
    <h4 className='col-12'>Account Details</h4>
    <div className="col-md-6 mb-3">
      {/* <label for="name" class="form-label">*First Name</label> */}
      <input type="text" className="form-control" id="firstName" placeholder="*First Name" />
    </div>
    <div className="col-md-6 mb-3">
      <input type="text" className="form-control" id="lastName" placeholder="*Last Name" />
    </div>
    <div className="col-md-6 mb-3">
      <input type="email" className="form-control" id="email" placeholder="*Email" />
    </div>
    <div className="col-md-6 mb-3">
      <input type="tel" className="form-control" id="phone" placeholder="*Phone" />
    </div>
    <div className="col-md-12 mb-3">
      <input type="text" className="form-control" id="school" placeholder="Address" />
    </div>
    <div className="d-grid-1">
      <button type="submit" className="btn submit-btn bg-primary text-dark mb-3">Update Account</button>
    </div>
    {/* <div class="row bg-white"> */}
    
    <h4 className='col-12'>Password change</h4>
    <div className="col-md-12 mb-3">
      {/* <label for="name" class="form-label">*First Name</label> */}
      <input type="text" className="form-control" id="firstName" placeholder="*current Password" />
    </div>
    <div className="col-md-6 mb-3">
      <input type="text" className="form-control" id="lastName" placeholder="*New Password" />
    </div>
    <div className="col-md-6 mb-3">
      <input type="email" className="form-control" id="email" placeholder="*Confirm Password" />
    </div>
    <div className="d-grid-1">
      <button type="submit" className="btn submit-btn bg-primary text-dark mb-3">Save Change</button>
    </div>
  </div>
  

</form>

      </div>
      <div class="tab-pane fade" id="v-pills-logout" role="tabpanel" aria-labelledby="v-pills-logout-tab"></div>
  
  

    </div>
  </div>
</div>

</div>
    </>
  )
}

export default Dashboard