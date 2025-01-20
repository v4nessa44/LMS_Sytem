import React from 'react';
import './CourseDetail.css';
import { FiClock, FiCalendar, FiUser, FiBook, FiAward, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

const CourseDetails = () => {
    const course = {
        title: "Complete Web Development Bootcamp",
        instructor: "John Smith",
        instructorTitle: "Senior Software Engineer at Google",
        rating: 4.8,
        reviews: 847,
        students: 12345,
        duration: "12 weeks",
        level: "Intermediate",
        lastUpdated: "September 2023",
        language: "English",
        price: 99.99,
        originalPrice: 199.99,
        description: "Master web development from scratch with this comprehensive bootcamp. This course is designed to take you from a complete beginner to a confident full-stack developer. You'll learn modern web development practices, industry-standard tools, and real-world project development.",
        longDescription: `This intensive bootcamp covers everything you need to become a professional web developer. Starting with the basics and progressing to advanced concepts, you'll gain hands-on experience through practical projects and real-world scenarios.

        By the end of this course, you'll be able to:
        • Build responsive websites using HTML5 and modern CSS3 techniques
        • Create interactive web applications using JavaScript
        • Develop full-stack applications with React and Node.js
        • Work with databases and implement authentication
        • Deploy your applications to the cloud
        • Understand web security best practices`,
        topics: [
            "HTML5 & CSS3 Fundamentals",
            "JavaScript ES6+ & Modern Features",
            "React.js & State Management",
            "Node.js & Express.js",
            "MongoDB & Database Design",
            "RESTful API Development",
            "Authentication & Authorization",
            "Cloud Deployment & DevOps Basics",
            "Web Security & Best Practices",
            "Responsive Design & CSS Frameworks"
        ],
        requirements: [
            "Basic computer knowledge",
            "No prior programming experience required",
            "A computer with internet connection",
            "Willingness to learn and practice"
        ],
        includes: [
            "40 hours of video content",
            "200+ coding exercises",
            "30 downloadable resources",
            "10 real-world projects",
            "Lifetime access",
            "Mobile and TV access",
            "Certificate of completion"
        ]
    };

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const staggerChildren = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const scaleIn = {
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.5 }
    };

    return (
        <motion.div 
            className="course-details-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Hero Section */}
            <motion.div 
                className="course-hero"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="course-hero-content">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {course.title}
                    </motion.h1>
                    <motion.div 
                        className="course-meta"
                        variants={staggerChildren}
                        initial="initial"
                        animate="animate"
                    >
                        <span><FiUser /> {course.instructor}</span>
                        <span><FiAward /> {course.rating} Rating ({course.reviews} reviews)</span>
                        <span><FiClock /> {course.duration}</span>
                        <span><FiCalendar /> Last updated {course.lastUpdated}</span>
                    </motion.div>
                </div>
            </motion.div>

            <div className="course-content">
                <div className="course-main">
                    {/* Course Overview */}
                    <motion.section 
                        className="course-section"
                        {...fadeIn}
                    >
                        <h2>Course Overview</h2>
                        <p>{course.description}</p>
                        <div className="course-highlights">
                            <div className="highlight-item">
                                <FiUser /> {course.students.toLocaleString()} Students
                            </div>
                            <div className="highlight-item">
                                <FiClock /> {course.duration}
                            </div>
                            <div className="highlight-item">
                                <FiAward /> {course.level}
                            </div>
                        </div>
                    </motion.section>

                    {/* Detailed Description */}
                    <motion.section 
                        className="course-section"
                        {...fadeIn}
                    >
                        <h2>Description</h2>
                        <div className="course-description">
                            {course.longDescription.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </motion.section>

                    {/* What You'll Learn */}
                    <motion.section 
                        className="course-section"
                        variants={staggerChildren}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.h2 {...fadeIn}>What You'll Learn</motion.h2>
                        <div className="topics-grid">
                            {course.topics.map((topic, index) => (
                                <motion.div 
                                    key={index} 
                                    className="topic-item"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <FiBook />
                                    <span>{topic}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Requirements */}
                    <motion.section 
                        className="course-section"
                        {...fadeIn}
                    >
                        <h2>Requirements</h2>
                        <motion.ul 
                            className="requirements-list"
                            variants={staggerChildren}
                            initial="initial"
                            animate="animate"
                        >
                            {course.requirements.map((req, index) => (
                                <motion.li 
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {req}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.section>

                    {/* Instructor */}
                    <motion.section 
                        className="course-section"
                        {...fadeIn}
                    >
                        <h2>Your Instructor</h2>
                        <div className="instructor-profile">
                            <div className="instructor-info">
                                <img src="https://via.placeholder.com/100" alt={course.instructor} className="instructor-image" />
                                <div>
                                    <h3>{course.instructor}</h3>
                                    <p>{course.instructorTitle}</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </div>

                {/* Sidebar */}
                <motion.div 
                    className="course-sidebar"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="course-card">
                        <motion.div 
                            className="price-container"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="current-price">${course.price}</div>
                            <div className="original-price">${course.originalPrice}</div>
                            <div className="discount">
                                {Math.round((1 - course.price/course.originalPrice) * 100)}% off
                            </div>
                        </motion.div>
                        <motion.button 
                            className="enroll-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Enroll Now
                        </motion.button>
                        <div className="money-back">30-Day Money-Back Guarantee</div>
                        <div className="course-includes">
                            <h3>This course includes:</h3>
                            {course.includes.map((item, index) => (
                                <div key={index} className="includes-item">
                                    <FiCheck />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default CourseDetails;