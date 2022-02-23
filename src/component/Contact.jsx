import React from 'react'

function Contact() {
  return (
    <div>
        <div className="container">
            <h1 className="text-center pt-5">Contact Form</h1>
            <form action="" method="POST" className="">
                <label htmlFor="reasonofcontact">Reason of Contact</label>
                <select name="reason" className="form-select" id="">
                    <option value="" >    </option>
                    <option value="complain">Complain</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="feedback">Feedback</option>
                    <option value="enquiry">Enquiry</option>
                    <option value="delay_order">Delay Order</option>
                    <option value="other">Other</option>
                </select>
                <label htmlFor="fullname" className="form-label mt-2">Full Name</label>
                <input type="text" className="form-control mt-1" name="fname" required placeholder ="Enter full name" />
                <label htmlFor="mobile" className="form-label mt-2">Mobile</label>
                <input type="text" className="form-control mt-1" name="mobile" required maxLength={10} placeholder ="enter mobile no." />
                <label htmlFor="email" className="form-label mt-2">Email</label>
                <input type="email" className="form-control mt-1" name="fname" required placeholder ="Enter email" />
                <label htmlFor="floatingTextarea" className='form-label mt-2'>Comments</label>
                <textarea class="form-control mt-1" placeholder="Leave a comment here" id="floatingTextarea" required></textarea>
               <input type="submit" className="btn btn-outline-dark m-4"/>   
            </form>
        </div>
    </div>
  )
}

export default Contact