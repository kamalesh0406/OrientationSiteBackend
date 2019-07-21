import React, { Component } from 'react';
import './Contacts.css';
import { FadeIn } from "animate-components";
import LazyLoad from 'react-lazyload';
import Admin from './admin-contacts';
import SC from './student-council-contacts';
import EC from './extended-council-contacts';
class Contacts extends Component {
    render() {
        return (
            <FadeIn duration="0.3s" timingFunction="ease-in" as="div">
                <div className="header">
                    <p>CONTACTS</p>
                </div>
                <div className="sub-header">
                    <p>The Team</p>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card text-center mx-auto">
                                <figure className="snip1104">
                                    <LazyLoad height='100%' once>
                                        <img src="/images/core-profile/sahil.webp" className="card-img-top" alt="Sahil - OC" />
                                    </LazyLoad>
                                    <figcaption>
                                        <h2>Sahil <br />
                                            <span> 7973703540</span>
                                        </h2>
                                    </figcaption>
                                </figure>
                                <div className="card-header position-header">
                                    <h5 className="align-middle">OVERALL COORDINATOR</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-center mx-auto">
                                <figure className="snip1104">
                                <LazyLoad height='100%' once>
                                    <img src="/images/core-profile/diksha.webp" className="card-img-top" alt="Diksha - EXCOM" />
                                </LazyLoad>
                                    <figcaption>
                                        <h2>Diksha <br />
                                            <span> 7008087140</span>
                                        </h2>
                                    </figcaption>
                                </figure>
                                <div className="card-header position-header">
                                    <h5 className="align-middle">EXCOM MEMBER</h5>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <div className="col-md-3">
                            <div className="card text-center mx-auto">
                                <figure className="snip1104">
                                <LazyLoad height='100%' once>
                                    <img src="/images/core-profile/neel.webp" className="card-img-top" alt="Neel - OH" />
                                </LazyLoad>
                                    <figcaption>
                                        <h2>Neel <br />
                                            <span> 7558722946</span>
                                        </h2>
                                    </figcaption>
                                </figure>
                                <div className="card-header position-header">
                                    <h5 className="align-middle">Head, OC</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-center mx-auto">
                                <figure className="snip1104">
                                <LazyLoad height='100%' once>
                                    <img src="/images/core-profile/nilesh.webp" className="card-img-top" alt="Nilesh - HEAD, GL AND ENTERTAINMENT" />
                                </LazyLoad>
                                    <figcaption>
                                        <h2>Nilesh <br />
                                            <span> 8602520816</span>
                                        </h2>
                                    </figcaption>
                                </figure>
                                <div className="card-header position-header">
                                    <h5 className="align-middle">HEAD, GL AND ENTERTAINMENT</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="sub-header">
                                Admin
                            </div>
                        </div>
                        <div className="row justify-content-center director">
                            <div className="col-md-3">
                                    <div className="card text-center mx-auto">
                                        <figure className="snip1104">
                                            <LazyLoad height='100%' once>
                                                <img src="/images/admin/mini-thomas.jpg" className="card-img-top" alt="Mini Shaji Thomas- DIRECTOR" />
                                            </LazyLoad>
                                            <figcaption>
                                                <h2>Dr. Mini Shaji Thomas<br />
                                                    <span>director@nitt.edu</span>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                        <div className="card-header position-header">
                                            <h5 className="align-middle">Director, NIT Trichy</h5>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                Admin.map((members) => 
                                <div className="col-md-3" key={members.id}>
                                    <div className="card text-center mx-auto">
                                        <figure className="snip1104">
                                            <LazyLoad height='100%' once>
                                                <img src={members.image} className="card-img-top" alt="" />
                                            </LazyLoad>
                                            <figcaption>
                                                <h2>{members.name}<br />
                                                    <span>{members.contact}</span>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                        <div className="card-header position-header">
                                            <h5 className="align-middle">{members.position}</h5>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                        </div>

                        <div className="row">
                            <div className="sub-header">
                                Student Council
                            </div>
                        </div>
                        <div className="row">
                            {
                                SC.map((members) => 
                                    <div className="col-md-3" key={members.id}>
                                        <div className="card text-center mx-auto">
                                            <figure className="snip1104">
                                                <LazyLoad height='100%' once>
                                                    <img src={members.image} className="card-img-top" alt="" />
                                                </LazyLoad>
                                                <figcaption>
                                                    <h2>{members.name}<br />
                                                        <span>{members.contact}</span>
                                                    </h2>
                                                </figcaption>
                                            </figure>
                                            <div className="card-header position-header">
                                                <h5 className="align-middle">{members.position}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className="row">
                            <div className="sub-header">
                                Extended Council
                            </div>
                        </div>
                        <div className="row">
                            {
                                EC.map((members) => 
                                    <div className="col-md-3" key={members.id}>
                                        <div className="card text-center mx-auto">
                                            <figure className="snip1104">
                                                <LazyLoad height='100%' once>
                                                    <img src={members.image} className="card-img-top" alt="" />
                                                </LazyLoad>
                                                <figcaption>
                                                    <h2>{members.name}<br />
                                                        <span>{members.contact}</span>
                                                    </h2>
                                                </figcaption>
                                            </figure>
                                            <div className="card-header position-header">
                                                <h5 className="align-middle">{members.position}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <br />
            </FadeIn>
        )
    }
}

export default Contacts;


