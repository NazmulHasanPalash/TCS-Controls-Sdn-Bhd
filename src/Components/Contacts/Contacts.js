import React from 'react';
import './Contacts.css'

const Contacts = () => {
    return (
        <div>
            <div className="card  w-75 mx-auto  form-style container-fluid registration-style m-5 shadow-lg">
                <div className="row g-0 d-flex align-items-center  my-auto">
                    <div className="col-md-6 mx-auto">
                        <div className="card-body  info-style  border-1 rounded-3 container-fluid">
                            <div className="mx-5 text-center">
                                <h1 className="card-title">Keep In <span className="span-style">Touch</span></h1>
                                <p><i className="far fa-envelope m-3"></i> Email:  firozkobir097514@gmail.com</p>
                                <p><i class="fas fa-phone-square-alt"></i> Mobile: +601121158348</p>
                                <p><i class="fas fa-phone-square-alt"></i> Mobile: +60102505816</p>
                                <p><i class="fab fa-linkedin"></i> LinkedIn: <a className="" target="blank" href="https://www.linkedin.com/in/graphic-designer-firoz/">Firoz Kobir</a></p>

                            </div>


                        </div>
                    </div>
                    <div className="col-md-5 ">
                        <form className="text-center mx-auto w-100 text-center  border-3 border-white rounded-3" action="mailto:firozkobir097514@gmail.com" method="post" enctype="text/plain">
                            <h1 className="logo-style">Contact</h1>
                            <input className="w-75 m-3 border-warning border-2 rounded-pill" type="text" name="name" placeholder="Name" />

                            <input className="w-75 m-3 border-warning border-2 rounded-pill" type="text" name="mail" placeholder="Email" />
                            <div className="input-group mx-auto overflow-scroll w-75 comment-style  mt-3 mx-auto ">
                                <textarea className="form-control " placeholder="Text" aria-label="With textarea"></textarea>
                            </div>
                            <input className="btn btn-primary m-3" type="submit" value="Send" />
                            <input className="btn btn-danger  m-3" type="reset" value="Reset" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contacts;