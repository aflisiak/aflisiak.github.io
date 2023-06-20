// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Define your React components
function App() {
    return (
        <div>
            <section className="hero">
                <div className="hero-content">
                    <h1>Alexander Flisiak</h1>
                    <h2>Stuttgart Area, Germany</h2>
                    <p>Welcome to my personal website. I'm passionate about creating beautiful and functional web experiences.</p>
                    <a href="/cv" className="btn">View CV</a>
                </div>
            </section>
        
            <section className="about">
                <div className="container">
                    <h2>About Me</h2>
                    <p>Write a brief introduction about yourself, your skills, and your experience as a web designer.</p>
                </div>
            </section>
        
            <section className="portfolio">
                <div className="container">
                    <h2>Portfolio</h2>
                    {/* Showcase your portfolio projects here with React components */}
                </div>
            </section>
        
            <section className="contact">
                <div className="container">
                    <h2>Contact Me</h2>
                    <p>Include your contact information, such as email address and social media profiles.</p>
                </div>
            </section>
        </div>
    );
}

// Render the React app
ReactDOM.render(<App />, document.getElementById('root'));
