import React from "react";
import image from "../fullstack.jpg";
import image2 from "../cyber.jpg";
import image3 from "../iot.jpg";
import image4 from "../aws.jpg";
import image5 from "../uiux.webp";
import image6 from "../exp.jpg";
import image7 from "../mentor.jpg";
import image8 from "../tech.jpg";
function Home() {
  return (
    <div>
      <div className="head">
        <p>MEASI INSTITUTE OF INFORMATION TECHNOLOGY</p>
      </div>
      <div className="title">
        <h3>
          The difference between who you are and who you
          <br />
          want to be…….. is where you learn
        </h3>
        <p>
          Our program is designed to equip you with advanced skills and
          practical. You’ll engage with real-world projects and collaborative
          learning environments,
          <br /> guided by experts. Tailored to meet the demands of today’s
          tech-driven world,
          <br /> ensuring you’re not just ready for the future, but also
          instrumental in shaping it.
        </p>
      </div>
      <div className="contain">
        <div class="card" style={{ width: "18rem" }}>
          <img src={image} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Full Stack Development</p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={image2} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Cyber Security</p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={image3} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">IOT</p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={image4} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Salesforce & AWS</p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={image5} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">UI/UX designing</p>
          </div>
        </div>
      </div>
      <div className="context">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src={image6} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Experiential Learning</h5>
                <p class="card-text">
                  Does learning have to be only theoretical? Not anymore. Here
                  you engage yourself to a hands-on learning experience.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={image7} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Corporate Mentoring</h5>
                <p class="card-text">
                  Why wait until graduation? At MEASI, you can work along with
                  corporates and gain real life practical insights while you
                  study.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={image8} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Technology In Action</h5>
                <p class="card-text">
                  How do coporates find solutions for their problems? Work with
                  highly skilled industry experts & work out technology
                  solutions for our corporate partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot">
        <h3>Contact Us</h3>
        <p>
          MEASI INSTITUTE OF INFORMATION TECHNOLOGY
          <br />
          147 Peters Road, Royapettah
          <br /> Chennai 600 014
          <br /> Mobile: +91 81229 85395 /+91 98403 61602
          <br /> Landline: 044 2835 2374
          <br /> E-Mail: info@measiit.edu.in
        </p>
        <footer>
          <p>Copyright &copy; Abdul Rasheed</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
