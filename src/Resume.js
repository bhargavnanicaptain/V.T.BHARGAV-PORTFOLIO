import React from 'react';

const Resume = () => {
    // Function to handle download
    const handleDownload = () => {

        // Replace 'resume.pdf' with the actual file name and extension of your resume
        const resumeUrl = 'E:\NODEJS\favoport\public\THIRUMALA BHARGAV VALLAMKONDA_RESUME.pdf';

        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'THIRUMALA BHARGAV VALLAMKONDA_RESUME.pdf'; // Specify the file name users will see when downloading

        // Programmatically click the link to trigger the download
        document.body.appendChild(link);
        link.click();

        // Cleanup
        document.body.removeChild(link);
    };

    return (
        <>
            <style>{`
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f2f2f2;
                    padding: 20px;
                }
                .p{
                    color : black;
                }
                
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    background-color: #fff;
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .a2{
                    text-decoration: none;
                    color:blue;
                }
                .a2:hover{
                    color:skyblue;
                }

                h1 {
                    font-size: 32px;
                    color: #333;
                    margin-bottom: 20px;
                    text-align: center;
                }

                h2 {
                    font-size: 24px;
                    color: #007bff;
                    margin-bottom: 15px;
                }

                p {
                    font-size: 16px;
                    color: #555;
                    margin-bottom: 10px;
                }

                a {
                    color: #007bff;
                    text-decoration: none;
                }

                a:hover {
                    text-decoration: underline;
                }

                .section {
                    margin-bottom: 30px;
                }

                .skills {
                    list-style-type: none;
                    margin-left: 20px;
                }

                .skills li {
                    margin-bottom: 5px;
                }

                .projects div {
                    margin-bottom: 20px;
                }

                .projects div strong {
                    font-weight: bold;
                }

                ul {
                    margin-top: 0;
                    padding-left: 20px;
                }

                .declaration p {
                    margin-bottom: 5px;
                }

                .download-button {
                    text-align: center;
                }

                .download-button button {
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    padding: 10px 20px;
                    font-size: 16px;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }

                .download-button button:hover {
                    background-color: #0056b3;
                }
                .disc{
                    text-align:center;
                }
                /* Styles for mobile devices (up to 600px) */
@media only screen and (max-width: 600px) {
    .container {
        padding: 20px;
    }

    h1 {
        font-size: 24px;
    }

    h2 {
        font-size: 20px;
    }

    p {
        font-size: 14px;
    }

    .download-button button {
        padding: 8px 16px;
        font-size: 14px;
    }
}

/* Styles for tablets (601px to 768px) */
@media only screen and (min-width: 601px) and (max-width: 768px) {
    .container {
        padding: 25px;
    }

    h1 {
        font-size: 28px;
    }

    h2 {
        font-size: 22px;
    }

    p {
        font-size: 15px;
    }

    .download-button button {
        padding: 9px 18px;
        font-size: 15px;
    }
}

/* Styles for laptops (769px to 1200px) */
@media only screen and (min-width: 769px) and (max-width: 1200px) {
    .container {
        padding: 30px;
    }

    h1 {
        font-size: 32px;
    }

    h2 {
        font-size: 24px;
    }

    p {
        font-size: 16px;
    }

    .download-button button {
        padding: 10px 20px;
        font-size: 16px;
    }
}

/* Styles for extra large devices (above 1200px) */
@media only screen and (min-width: 1201px) {
    .container {
        padding: 30px;
    }

    h1 {
        font-size: 32px;
    }

    h2 {
        font-size: 24px;
    }

    p {
        font-size: 16px;
    }

    .download-button button {
        padding: 10px 20px;
        font-size: 16px;
    }
}
            `}</style>

            <div className="container">
                <h1>VALLAMKONDA THIRUMALA BHARGAV</h1>
                <p className='disc'>Khammam, Telangana, 507002. | (+91) 8074588232 | <a href="mailto:vallamkondabhargav@gmail.com">vallamkondabhargav@gmail.com</a></p>
                <p className='disc'><a href="https://github.com/bhargavnanicaptain">GitHub</a> | <a href="https://www.linkedin.com/in/v-t-bhargav-64bb51214">LinkedIn</a></p>

                <div className="objective section">
                    <h2>Objective:</h2>
                    <p>Eager Java Full Stack Developer with a solid grasp of Java, JDBC, HTML, CSS, JavaScript,
                        Bootstrap, React JS, Advanced Java with Hibernate and Spring and MySQL. Proficient in crafting
                        dynamic web applications and ensuring seamless database management. I bring a foundation in
                        Java development and database administration, along with an aptitude for front-end design and
                        development. Ready to contribute effectively to a collaborative team environment, eager to learn
                        and grow alongside seasoned professionals.
                    </p>
                </div>

                <div className="technical-skills section">
                    <h2>Technical Skills:</h2>
                    <p><strong>Programming Languages:</strong> Java, JDBC, C# Programming, Basics of Python.</p>
                    <p><strong>Web Technologies:</strong> HTML, CSS, JavaScript</p>
                    <p><strong>Frameworks:</strong> Bootstrap, Spring boot, Hibernate</p>
                    <p><strong>Libraries:</strong> React JS</p>
                    <p><strong>Databases:</strong> MySQL</p>
                    <p><strong>Tools & IDEs:</strong> Visual Studio Code, Eclipse, IntelliJ, MS Office, Version Control</p>
                    <p><strong>Operating Systems:</strong> Windows, Linux</p>
                </div>

                <div className="soft-skills section">
                    <h2>Soft Skills:</h2>
                    <ul className="skills">
                        <li>Communication</li>
                        <li>Leadership</li>
                        <li>Problem Solving</li>
                        <li>Adaptability</li>
                        <li>Teamwork and Collaboration</li>
                        <li>Team Management</li>
                        <li>Professionalism</li>
                        <li>Creativity and Innovation</li>
                        <li>Emotional Intelligence</li>
                    </ul>
                </div>

                <div className="education section">
                    <h2>Education:</h2>
                    <p><strong>B.Tech in Electronics and Communication Engineering</strong></p>
                    <p>Siddhartha Institute of Engineering and Technology, Hyderabad, Telangana.<br />
                        Duration: 2019 to 2023</p>
                    <p><strong>Intermediate in Mathematics Physics & Chemistry</strong></p>
                    <p>Resonance Jr. College, Khammam, Telangana.<br />
                        Duration: 2017 to 2019</p>
                    <p><strong>SSC</strong></p>
                    <p>Resonance Info School, Khammam, Telangana.<br />
                        Duration: 2016 to 2017</p>
                </div>

                <div className="projects section">
                    <h2>Projects:</h2>
                    <div>
                        <p><strong>Project Title: HOSPITAL MANAGEMENT SYSTEM using JDBC</strong></p>
                        <p><strong>Description:</strong> Developed using Java and JDBC, this system efficiently manages patient records, doctor appointments, and inventory control within healthcare facilities. As the sole developer, I utilized IntelliJ and MySQL for database connectivity.</p>
                    </div>

                    <div>
                        <p><strong>Project Title: HOSTEL MANAGEMENT SYSTEM</strong></p>
                        <p><strong>Description:</strong> Developed using Java and JDBC, this system automates student accommodation management in educational institutions. It efficiently handles student records, room allocations, fee payments, and facility maintenance. As the sole developer, I utilized IntelliJ and MySQL for database connectivity.</p>
                    </div>

                    <div>
                        <p><strong>Project Title: SMART RAILWAY PLATFORM WITH PASSENGER SAFETY GATES TO PREVENT LEVEL CROSSING USING IOT</strong></p>
                        <p><strong>Description:</strong> Enhanced Safety and Efficiency: This project utilizes IoT-based safety gates at railway platforms to prevent unauthorized access to tracks. The gates automatically close when a train approaches, ensuring passenger safety and enhancing overall efficiency. Real-time monitoring tracks gate status and alerts authorities in case of safety breaches or anomalies. As a team leader, I monitored my group and utilized the technologies too.</p>
                    </div>

                    <div>
                        <p><strong>Project Title: GARBAGE MONITORING AND AUTO ALERTING SYSTEM TO MUNICIPALITY USING IOT</strong></p>
                        <p><strong>Description:</strong> Efficient Waste Management: Leveraging IoT technology, this project deploys sensors in urban garbage bins to monitor real-time fill levels. When a bin reaches a predefined threshold, an automatic alert notifies municipal authorities for timely waste collection. The system also includes a centralized monitoring platform for optimizing collection routes and resource allocation. As the team leader, I utilized technologies such as Internet of Things (IoT), Sensor Technologies, Embedded Systems, Wireless Communication, Security Measures, Location Tracking, and the Blynk IoT application.</p>
                    </div>

                    <div>
                        <p><strong>Project Title: Radar Detector</strong></p>
                        <p><strong>Description:</strong> This project involves an Arduino-based object detection system that uses radar Sensor technology to measure radio wave bounce-back time and detect objects within a specified range for applications like security systems, traffic monitoring, and robotics.</p>
                    </div>

                    <div>
                        <p><strong>Project Title: Obstacles Avoiding Robot</strong></p>
                        <p><strong>Description:</strong> The Obstacle Avoiding Robot project involves an Arduino Uno microcontroller, ultrasonic sensor technology, and motors to create a mobile robot that navigates while avoiding obstacles, demonstrating the application of robotics and embedded systems for autonomous navigation.</p>
                    </div>
                </div>
                <div className='projects section'>
                    <h2>REACT-BASED PROJECTS</h2>
                    <div>
                        <p><strong>Project Title: </strong> HOSPITAL MANAGEMENT SYSTEM USING REACT</p>
                        <p><strong>Description: </strong> Crafted a robust Hospital Management System with React, seamlessly integrating APIs for data handling, and employing JavaScript (ES6+), HTML5, and CSS3 for dynamic user interfaces. Leveraged React Router for efficient navigation and Git for version control, ensuring collaborative development.</p>
                    </div>
                    <div>
                        <p><strong>Project Title: </strong>PERSONAL FINANCE TRACKER USING REACT</p>
                        <p><strong>Description: </strong> Developed a sleek Personal Finance Tracker with React, harnessing JavaScript (ES6+), HTML5, and CSS3 for intuitive interfaces. Integrated React Router for smooth navigation and incorporated Chart.js for dynamic data visualization. Utilized Git for version control, ensuring seamless collaboration.</p>
                    </div>
                </div>

                <div className="extracurricular-activities section">
                    <h2>Extracurricular Activities:</h2>
                    <ul>
                        <li>Participated in National Service Scheme (NSS) from my B.Tech College.</li>
                        <li>Participated in E-Clubs.</li>
                        <li>Participated in Sports Clubs and Sports meets.</li>
                        <li>Participated in Hackathons.</li>
                        <li>Participated in Cricket tournaments from my engineering college.</li>
                    </ul>
                </div>

                <div className="certifications section">
                    <h2>Certifications:</h2>
                    <ul>
                        <li>SQL BASIC - <a href='https://www.hackerrank.com/certificates/33d59ca3dbea' className='a2'>HackerRank</a></li>
                        <li>CSS BASIC - <a href='https://www.hackerrank.com/certificates/a7f22e0723b0' className='a2'>HackerRank</a></li>
                        <li>RESPONSIVE WEB DESIGN - <a href='https://freecodecamp.org/certification/fccda73044b-f7ea-45e9-ad84-c27de4fd4dfe/responsive-web-design' className='a2'>FREECODE CAMP</a></li>
                        <li>JAVA SCRIPT for beginners - <a href='https://simpli-web.app.link/e/sjcBA6xf3Jb' className='a2'>SkillUp by SimplyLearn</a></li>


                    </ul>
                </div>

                <div className="awards section">
                    <h2>Awards:</h2>
                    <ul>
                        <li><p>Completed 4 stars in JAVA HackerRank and 3 stars in SQL HackerRank</p></li>
                        <li> <p>Awarded by 1500 cash price and with a certificate in my college for 3rd place in Hackathon</p></li>
                    </ul>
                </div>

                <div className="hobbies section">
                    <h2>Hobbies:</h2>
                    <ul>
                        <li>Collecting Currencies</li>
                        <li>Listening story audio books</li>
                        <li>Enthusiastic follower of Tollywood, Kollywood, and Bollywood music, fostering cultural appreciation and a discerning ear for diverse melodies.</li>
                        <li>Learning new Things</li>
                        <li>Updating myself according to Technologies.</li>
                    </ul>
                </div>

                <div className="languages section">
                    <h2>Languages:</h2>
                    <p>Telugu (Native Language), English (Professional Language), Hindi (Secondary Language).</p>
                </div>

                <div className="declaration section">
                    <h2>DECLARATION:</h2>
                    <p>"I, V.T.BHARGAV, hereby declare that all information provided in this resume is true and complete to the best of my knowledge. I understand that any false information or omissions may lead to rejection of my application or termination of employment if discovered at a later date."</p>
                    <p>                                                                             DIGITAL SIGNATURE: V.T.BHARGAV</p>
                </div>

                <div className="download-button section">
                    <button onClick={handleDownload}>Download Resume</button>
                </div>
            </div>
        </>
    );
};

export default Resume;
