import UserClass from "./UserClass";
import User from "./user";

const About = () => {
  return (
    <div className="about-body">
      <div className="about-box">
        <div className="inner-box">
            <img className="aboutimage" src="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=60" alt="" />
        <div className="card-hover">
            <h2>Make your <span>choice</span> right now!</h2>
            <p>Full Stack Biryani delivers authentic Bengali biryani to your doorstep, operating seamlessly across all locations. Enjoy the rich flavors of Bengal with our convenient food delivery service</p>
            <a href="https://www.linkedin.com/in/kuldeep-yadav-45b719259/" className="github" target="_blank" >My LinkedIn <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
