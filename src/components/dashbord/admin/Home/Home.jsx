import "./home.css";
import { SiCodesandbox } from "react-icons/si";
import { MdOutlineInfo } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { GiMoneyStack } from "react-icons/gi";
import { BsCalendarCheck } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <section id="homeContainer">
        <div className="performance">
          <div className="card">
              <div className="card_details">
                <SiCodesandbox className="icon" />
                <div className="info_details">
                  <h6>Total Revenue</h6>
                  <h4>$10, 000</h4>
                </div>
              </div>
              <div className="card_info">
                <MdOutlineInfo className="icon" />
                <div>Revenue growth of 10% this month</div>
              </div>
          </div>

          <div className="card">
              <div className="card_details">
                <ImUsers className="icon" />
                
                <div className="info_details">
                  <h6>Number of Active Users</h6>
                  <h4>20 users</h4>
                </div>
              </div>
              <div className="card_info">
                <MdOutlineInfo className="icon" />
                <div>Total Number of Users with Active Packages</div>
              </div>
          </div>

          <div className="card">
              <div className="card_details">
                <GiMoneyStack className="icon" />
                
                <div className="info_details">
                  <h6>Total Sales</h6>
                  <h4>400 Sales</h4>
                </div>
              </div>
              <div className="card_info">
                <BsCalendarCheck className="icon" />
                <div>Monthly sales</div>
              </div>
          </div>

        </div>

        <div className="users">
          <div className="users-list">
              <h5>List of all Users using the Platform</h5>
              <div className="table-responsive">
                <table className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                      <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Position</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                className="rounded-circle"
                                />
                            <div className="ms-3">
                              <p className="fw-bold mb-1">John Doe</p>
                              <p className="text-muted mb-0">john.doe@gmail.com</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="fw-normal mb-1">Software engineer</p>
                          <p className="text-muted mb-0">IT department</p>
                        </td>
                        <td>
                          <span className="badge badge-success rounded-pill d-inline">Active</span>
                        </td>
                        <td>Senior</td>
                        <td>
                          <button type="button" className="btn btn-link btn-sm btn-rounded">
                            Edit
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                                className="rounded-circle"
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                />
                            <div className="ms-3">
                              <p className="fw-bold mb-1">Alex Ray</p>
                              <p className="text-muted mb-0">alex.ray@gmail.com</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="fw-normal mb-1">Consultant</p>
                          <p className="text-muted mb-0">Finance</p>
                        </td>
                        <td>
                          <span className="badge badge-primary rounded-pill d-inline"
                                >Onboarding</span
                            >
                        </td>
                        <td>Junior</td>
                        <td>
                          <button
                                  type="button"
                                  className="btn btn-link btn-rounded btn-sm fw-bold"
                                  data-mdb-ripple-color="dark"
                                  >
                            Edit
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                className="rounded-circle"
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                />
                            <div className="ms-3">
                              <p className="fw-bold mb-1">Kate Hunington</p>
                              <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="fw-normal mb-1">Designer</p>
                          <p className="text-muted mb-0">UI/UX</p>
                        </td>
                        <td>
                          <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
                        </td>
                        <td>Senior</td>
                        <td>
                          <button
                                  type="button"
                                  className="btn btn-link btn-rounded btn-sm fw-bold"
                                  data-mdb-ripple-color="dark"
                                  >
                            Edit
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
              </div>
          </div>

          <div className="users-list">
              <h5>Package list and their performance</h5>
              <div className="table-responsive">
                <table className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                      <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Position</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                className="rounded-circle"
                                />
                            <div className="ms-3">
                              <p className="fw-bold mb-1">John Doe</p>
                              <p className="text-muted mb-0">john.doe@gmail.com</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="fw-normal mb-1">Software engineer</p>
                          <p className="text-muted mb-0">IT department</p>
                        </td>
                        <td>
                          <span className="badge badge-success rounded-pill d-inline">Active</span>
                        </td>
                        <td>Senior</td>
                        <td>
                          <button type="button" className="btn btn-link btn-sm btn-rounded">
                            Edit
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                                className="rounded-circle"
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                />
                            <div className="ms-3">
                              <p className="fw-bold mb-1">Alex Ray</p>
                              <p className="text-muted mb-0">alex.ray@gmail.com</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="fw-normal mb-1">Consultant</p>
                          <p className="text-muted mb-0">Finance</p>
                        </td>
                        <td>
                          <span className="badge badge-primary rounded-pill d-inline"
                                >Onboarding</span
                            >
                        </td>
                        <td>Junior</td>
                        <td>
                          <button
                                  type="button"
                                  className="btn btn-link btn-rounded btn-sm fw-bold"
                                  data-mdb-ripple-color="dark"
                                  >
                            Edit
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                className="rounded-circle"
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                />
                            <div className="ms-3">
                              <p className="fw-bold mb-1">Kate Hunington</p>
                              <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="fw-normal mb-1">Designer</p>
                          <p className="text-muted mb-0">UI/UX</p>
                        </td>
                        <td>
                          <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
                        </td>
                        <td>Senior</td>
                        <td>
                          <button
                                  type="button"
                                  className="btn btn-link btn-rounded btn-sm fw-bold"
                                  data-mdb-ripple-color="dark"
                                  >
                            Edit
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                className="rounded-circle"
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                />
                            <div className="ms-3">
                              <p className="fw-bold mb-1">Kate Hunington</p>
                              <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="fw-normal mb-1">Designer</p>
                          <p className="text-muted mb-0">UI/UX</p>
                        </td>
                        <td>
                          <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
                        </td>
                        <td>Senior</td>
                        <td>
                          <button
                                  type="button"
                                  className="btn btn-link btn-rounded btn-sm fw-bold"
                                  data-mdb-ripple-color="dark"
                                  >
                            Edit
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                className="rounded-circle"
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                />
                            <div className="ms-3">
                              <p className="fw-bold mb-1">Kate Hunington</p>
                              <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="fw-normal mb-1">Designer</p>
                          <p className="text-muted mb-0">UI/UX</p>
                        </td>
                        <td>
                          <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
                        </td>
                        <td>Senior</td>
                        <td>
                          <button
                                  type="button"
                                  className="btn btn-link btn-rounded btn-sm fw-bold"
                                  data-mdb-ripple-color="dark"
                                  >
                            Edit
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
              </div>
            
          </div>

        </div>

      </section>
    </>
  )
}

export default Home