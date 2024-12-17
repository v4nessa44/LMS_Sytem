"use client";

import { useState, useEffect } from "react";
import {
  BookOpen,
  CheckCircle,
  GraduationCap,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

export default function LandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: "Alex Johnson",
      image: "assets/course-testimonial-one.jpg",
      text: "This course has been incredibly valuable. I've learned so much and it has already helped me in my career.",
    },
    {
      name: "Samantha Lee",
      image: "assets/course-testimonial-four.jpg",
      text: "The interactive learning experience is unparalleled. I feel like I'm part of a supportive community.",
    },
    {
      name: "Michael Chen",
      image: "assets/course-testimonial-three.jpg",
      text: "Earning a certificate has opened up new opportunities for me. Highly recommend these courses!",
    },
  ];

  const courseFeatures = [
    {
      title: "HTLM",
      image: "assets/course-feature-one.jpg",
      description:
        "This course has been incredibly valuable. I've learned so much and it has already helped me in my career.",
    },
    {
      title: "CSS",
      image: "assets/course-feature-two.jpg",
      description:
        "This course has been incredibly valuable. I've learned so much and it has already helped me in my career.",
    },
    {
      title: "Javascript",
      image: "assets/course-feature-three.jpg",
      description:
        "This course has been incredibly valuable. I've learned so much and it has already helped me in my career.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <div className="nav-container">
      <Link to= "/">
        <div className="logo">
          <img src="/assets/Codelogo.png" />
        </div>
      </Link>

      <div className="menu-container">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About Us</Link>
        
        <Link to="/login" className="loginBtn">
          Log In
        </Link>
      </div>
    </div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-18 lg:py-24 xl:py-32 bg-gradient-to-b from-white to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                  Unlock Your Potential with EduCourses
                </h1>
                <p className=" text-gray-600 md:text-xl">
                  Discover a world of knowledge with our expert-led online
                  courses. Learn at your own pace and advance your career.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-x-4"
              >
                <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                >
                  Browse Courses
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <BookOpen className="h-10 w-10 text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Diverse Course Catalog
                </h2>
                <p className="text-gray-600">
                  Explore a wide range of subjects taught by industry experts.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <Users className="h-10 w-10 text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Interactive Learning
                </h2>
                <p className="text-gray-600">
                  Engage with peers and instructors through forums and live
                  sessions.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <CheckCircle className="h-10 w-10 text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Certified Completion
                </h2>
                <p className="text-gray-600">
                  Earn recognized certificates upon successful course
                  completion.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-gray-900">
              Popular Courses
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courseFeatures.map((course, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center space-y-2 border border-gray-200 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-full aspect-video overflow-hidden rounded-lg">
                    <img
                      alt="Course thumbnail"
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                      height="200"
                      src={course.image}
                      width="300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {course.description}
                  </p>
                  <Button
                    variant="outline"
                    className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                  >
                    Learn More
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-gray-900">
              What Our Students Say
            </h2>
            <div className="relative">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <img
                  alt={testimonials[currentTestimonial].name}
                  className="rounded-full"
                  height="100"
                  src={testimonials[currentTestimonial].image}
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                </div>
              </motion.div>
              <button
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-indigo-600 hover:text-indigo-700"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) => (prev + 1) % testimonials.length
                  )
                }
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-indigo-600 hover:text-indigo-700"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-white to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Start Learning Today
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of learners already advancing their careers
                  with EduCourses.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    type="submit"
                    className="bg-indigo-600 text-white hover:bg-indigo-700"
                  >
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our Terms & Conditions and
                  Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          © 2024 EduCourses. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-700"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-700"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
