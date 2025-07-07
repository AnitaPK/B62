import React from "react";

const ContactPage = () => {
  return (
    <>
      <div className="contactHeaderClass">Contact Page</div>
      <div className="d-flex justify-content-around">
        <div>
          We’re Happy to Discuss Your<br></br> Requirements and Answer any
          Question<br></br>
          Address 406, White Square, <br></br>Wakad-Hinjawadi Road, Wakad,
          <br></br> Pune. 411057<br></br>
          Email helpdesk@wisdomsprouts.in <br></br>Contact Number +91-7770043825
        </div>
        <div>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Message
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        
      </div>
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.6240991074305!2d73.75057237496478!3d18.590978282516293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2beb5315379ab%3A0x7745e38574812a65!2sWisdom%20Sprouts%20IT%20Training%20Hub%20%7C%20Java%2C%20Python%2C%20MERN%20Full%20Stack%20IT%20Courses!5e0!3m2!1sen!2sin!4v1751534644705!5m2!1sen!2sin"
          height="450"
          style={{ border: "0", "width":"100%" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </>
  );
};

export default ContactPage;
