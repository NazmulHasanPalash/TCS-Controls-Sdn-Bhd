import React from 'react';
import './Header.css';
import { HashLink } from 'react-router-hash-link';
// import useAuth from '../../Components/Hooks/useAuth';

const Header = () => {
    // const { user, logOut } = useAuth();
    // console.log(user);

    return (
        <div>
            <div className="w-100 mx-auto">

                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark header-style">
                        <div className="container-fluid ">
                            <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                                <a className="navbar-brand mx-auto" href="/home"><span className="span-style text-primary"> <img className='second-icon' src="image/img/tcscontrols.svg" alt="" /></span> </a>
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 link-style d-flex align-item-center">
                                    <li className="nav-item">
                                        <HashLink className="nav-link active  header-text-style" aria-current="page" to="/home#home">Home</HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <div className="btn-group mx-auto w-100">
                                            <button type="button" className="btn header-text-style dropdown-toggle active" data-bs-toggle="dropdown" aria-expanded="false">
                                                Products
                                            </button>
                                            <ul className="dropdown-menu text-color w-100 ">
                                                <li className="nav-item">
                                                    <HashLink className="nav-link active dropdown-text-style" to="/products/cctv">CCTV <img className=' p-3 ms-4 dropdown-image' src="image/img/cctv/image/cctv.jpg" alt="" /></HashLink>
                                                </li>
                                                <li className="nav-item">
                                                    <HashLink className="nav-link active dropdown-text-style" to="/products/door_access">Door Access <img className=' p-3 dropdown-image' src="image/img/door-access/image/biostation2.jpg" alt="" /></HashLink>
                                                </li>
                                                <li className="nav-item">
                                                    <HashLink className="nav-link active dropdown-text-style" to="/products/barrier_gate">Barrier Gate <img className=' p-3 dropdown-image' src="image/img/barrier-gate/image/double-push-button.jpg" alt="" /></HashLink>
                                                </li>
                                                <li className="nav-item">
                                                    <HashLink className="nav-link active dropdown-text-style" to="/products/entrance_gate">Entrance Gate <img className=' p-3 dropdown-image' src="image/img/entrance-gate/image/circlelockcombi.jpg" alt="" /></HashLink>
                                                </li>
                                                <li className="nav-item">
                                                    <HashLink className="nav-link active dropdown-text-style" to="/products/security_bolder">Securiy bolder <img className=' p-3 dropdown-image' src="image/img/security-bollard/image/127-p-600a.jpg" alt="" /></HashLink>
                                                </li>
                                                <li className="nav-item">
                                                    <HashLink className="nav-link active dropdown-text-style" to="/products/intruder_alarm">Intruder Alarm <img className=' p-3 dropdown-image' src="image/img/alarm/image/alarm.jpg" alt="" /></HashLink>
                                                </li>


                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link active header-text-style" to="/leasing">Leasing</HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link active header-text-style" to="/referances">Referances</HashLink>
                                    </li>

                                    <li className="nav-item">
                                        <HashLink className="nav-link active header-text-style" to="/about">About us</HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link active header-text-style" to="/contact">Contacts us</HashLink>
                                    </li>












                                    {/* {user?.email ? <ul className="navbar-nav ">

                                        <li className="nav-item">
                                            <HashLink className="nav-link active" to="/myOrders">my Order</HashLink>
                                        </li>
                                        <li className="nav-item">
                                            <HashLink className="nav-link active" to="/manageOrders">Manage all Order</HashLink>
                                        </li>
                                        <li className="nav-item">
                                            <HashLink className="nav-link active" to="/reviews">Add Reviews</HashLink>
                                        </li>
                                        <li className="nav-item">
                                            <HashLink className="nav-link active" to="/addServices">Add A new Service</HashLink>
                                        </li>
                                        <li className="nav-item ">
                                            <button onClick={logOut} type="button" className="btn btn-light mx-5">Log out</button>

                                        </li>
                                    </ul> :
                                        <li className="nav-item">
                                            <HashLink className="nav-link active" aria-current="page" to="/login">Login</HashLink>

                                        </li>}
                                    <li className="nav-item ms-5">
                                        <a className="nav-link" href="#login"> Sign in as {user?.displayName}</a>
                                    </li>
                                    <li className="nav-item nav-img">
                                        <a className="nav-link photo-style" href="#login"> <img src={user?.photoURL} alt="" /></a>
                                    </li> */}

                                </ul>

                            </div>
                        </div>
                    </nav>

                </div>



            </div >
        </div >
    );
};

export default Header;