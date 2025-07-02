import Accordion from "./Accordion"

import { FaDollarSign } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { FaEraser } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import Features from "./features";
import Topics from "./Topics";
import Header from "./Header";
import Section from "./Section";
import Quote from "./Quote";
import Footer from "./Footer";
const Home = () => {
    const accordionData = [
        {
            title: "Is this app really free?",
            text: "Absolutely! It's free forever. No credit card. No sign-up. No strings attached"
        },
        {
            title: "Do I need to sign up to use this?",
            text: "Nope. just open the app, type your topic, and boom - your roadmap is ready."
        },
        {
            title: "Can I customize the learning pace or days?",
            text: "Currently, we automatically set a realistic learning pace based in the topic. Manual day selection is not requrired."
        },
        {
            title: "Do I need to understand JSON?",
            text: "No at all! We use JSON behind the scenes to power your roadmap, but you'll only interact with a clean, friendly UI."
        },
        {
            title: "Can I tracy my progress?",
            text: "Yes! You can mark topics as 'learned' and even export your full progress as a CSV file."
        },
        {
            title: "Will I lose my data if I refresh?",
            text: "Nope. Your progress is saved locally in your browser automatically."
        }
    ]

    const featuresData = [
        {
            img: <FaTerminal />,
            title: "No Sign-Up Needed",
            para: "Just straight in - no account required"
        },
        {
            img: <FaDollarSign />,
            title: "Forever Free",
            para: "Completely free to use. No feed. No paywalls. Ever."
        },
        {
            img: <FaRoute />,
            title: "Peronalized Daily Steps",
            para: "Your topic is brokeen down into ckear,  focused steps for each day"
        },
        {
            img: <FaHeartbeat />,
            title: "Progress Tracking",
            para: "Mark topics as 'learned mark tpics as 'learned' and watch your progress grow over time." 
        },
        {
            img: <FaDownload />,
            title: "Export to CSV",
            para: "Download your entir roadmap and progress as a CSV life anytime."
        },
        {
            img: <FaRobot />,
            title: "AI-Powered Breakdown",
            para: "Smart topic segmentation - creafted with the help of AI."
        },
        {
            img: <FaEraser />,
            title: "Clear, Minimal UI",
            para: "No clutter. No distractions. Just focused learning."
        },
        {
            img: <FaCloud />,
            title: "Offline Access",
            para: "Use your roadmap anytime - even without the internet."
        }
    ]

    const topicsData = [
        {
            name: "Web Development"
        },
        {
            name: "Data Structures and Algorithms"
        },
        {
            name: "Machine Learning"
        },
        {
            name: "Artificial Intelligence"
        },
        {
            name: "Python Programming"
        },
        {
            name: "C++ Programming"
        },
        {
            name: "System Design"
        },
        {
            name: "Operating Systems"
        },
        {
            name: "Computer Networks"
        },
        {
            name: "Database Management Systems"
        },
        {
            name: "Clous Computing"
        },
        {
            name: "DevOps"
        },
        {
            name: "Cybersecurity"
        },
        {
            name: "Mobile App Development"
        },
        {
            name: "Blockchain Development"
        },
        {
            name: "Game Development"
        },
        {
            name: "Computer Architecture"
        },
        {
            name: "Linux and Shell Scripting"
        },
        {
            name: "Frontend Development (HTML, CSS, JS, React)"
        },
        {
            name: "Backend Development (Node.js, Django, Spring Boot)"
        },
        {
            name: "Software Engnineering Principles"
        },
        {
            name: "Git and Version Control"
        },
        {
            name: "Data Science"
        },
        {
            name: "Natural Language Processing (NLP)"
        },
        {
            name: "Quantum Computing (Beginner Level)"
        },
    ]
  return (
    <div className="bg-black text-white">
        <Header /> 
        <Section />
        <div className="flex flex-wrap justify-center items-center gap-3 p-4 mt-12"> 
            {
                topicsData.map((data, index) => (
                    <Topics key={index} data={data}/>
                ))
            }
        </div>
        {/* Quote section */}
            <Quote />

        <div className="flex flex-wrap justify-center items-center">
            {
                featuresData.map((data, index) => (
                    <Features key={index} data={data} />
                ))
            }
        </div>
       <div className="max-w-3xl mx-auto px-4 py-10 text-white">
      <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <p className="text-center text-gray-400 mt-2 mb-6">
        Answers to the most common questions about the Roadmint app, learning pace, and features.
      </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        {
        accordionData.map((data, index) => (
            <Accordion key={index} data={data} />
        ))
        }
        </div>
        <Footer/>
    </div> 
  )
}

export default Home