import React from 'react'
import fasion_pic from '../assets/fasion_pic.jpg';
import avatar from '../assets/avatar.jpg';
import '../App.css';

export default function About() {
  return (
    <div>
        <div className="row justify-content-evenly">
            <div className="col-md-4 m-4 ">
                <img src={fasion_pic} className="img-rounded" height={400} alt="" />
            </div>
            <div className="col-md-6 pt-5 ms-3 me-3 text-start">
                <article>
                    <p>Welcome to fasion Store, your number one source for all things product, ie: shoes, bags,fasion products,electronic items. We're dedicated to giving you the very best of product, with a focus on three characteristics, ie: dependability, customer service and uniqueness.</p>
                     <p>Fasion Store founded in 2022 by Vinod Jarare, Fasion Store has come a long way from its beginnings in a Aurangabad, Maharashtra. When Mr.Jarare first started out, his passion for helping other Peoples be more eco-friendly, providing the best equipment for his fellow Customers drove him to action and gave him the impetus to turn hard work and inspiration into to a booming online store. We now serve customers all over India, and are thrilled to be a part of the  quirky, eco-friendly, fair trade wing of the fashion, baked goods, watches industry.</p>

                    <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                                                 <p className="text-end"><strong>
                                                           Sincerely,<br />
                                                            Mr. Vinod Jarare,<br />
                                                            CEO,Fasion Store. <br />
                                                             </strong>
                                                             </p>
                </article>
            </div>
        </div>
       <div className="container">
       <div className="row justify-content-evenly text-center">
            <div className="col-md-4  border">
                <div className="row justify-content-around">
                    <div className="col-5">
                        <img src={avatar} height={100} alt="" />
                        <p>Mr. Tom cruise <br />
                        <strong>CEO</strong>
                        </p>
                    </div>
                    <div className="col-7">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem temporibus sequi, ipsam ab eos.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4  border">
                <div className="row justify-content-around">
                    <div className="col-5">
                        <img src={avatar} height={100} alt="" />
                        <p>Mr. Cris Evanse <br />
                        <strong>CTO</strong>
                        </p>
                    </div>
                    <div className="col-7">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem temporibus sequi, ipsam ab eos.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 border">
            <div className="row justify-content-around">
                    <div className="col-5">
                        <img src={avatar} height={100} alt="" />
                        <p>Mr. Henry cavel <br />
                        <strong>CMO</strong>
                        </p>
                    </div>
                    <div className="col-7">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem temporibus sequi, ipsam ab eos.</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
    
  )
}
