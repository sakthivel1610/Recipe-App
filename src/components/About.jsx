import React from 'react';
import './About.css';
import Developer from '../assets/New folder/sakthi.png'
import Head from '../assets/New folder/Head.jpg'
import Chef from '../assets/New folder/Cheff.jpg'


function About(){
  return (
    <div className="about-us">
      <div className="about-us-container">
        <h1>About Us</h1>
        <p className="intro-text">
          Welcome to Recipe App! We are a passionate team of food enthusiasts committed to bringing you the best recipes from around the world. Whether you're a beginner in the kitchen or a seasoned chef, our goal is to inspire you with easy-to-follow recipes that will help you create delicious meals.
        </p>
        
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple – to make cooking fun and accessible to everyone! We believe that everyone deserves to enjoy tasty, healthy meals, no matter their skill level or time constraints. Our collection of recipes is curated to offer something for every palate and lifestyle.
          </p>
        </div>

        <div className="team">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={Developer} alt="Team Member 1" />
              <h3>Sakthi</h3>
              <p>Founder & Chief Recipe Developer</p>
            </div>
            <div className="team-member">
              <img src={Head} alt="Team Member 2" />
              <h3>Daniel</h3>
              <p>Master Chef</p>
            </div>
            <div className="team-member">
              <img src={Chef} alt="Team Member 3" />
              <h3>Chandru</h3>
              <p>Head Chef & Recipe Tester</p>
            </div>
          </div>
        </div>

        <div className="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions or feedback, feel free to reach out to us!</p>
          <p>Email: <a href="mailto:support@recipeapp.com">support@recipeapp.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default About;
