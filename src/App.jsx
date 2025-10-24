import React, { useState } from 'react';
import { Code, Brain, Rocket, CheckCircle, Clock, Target, BookOpen, Layers } from 'lucide-react';

const PythonWorkflow = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      title: "Python Foundations",
      duration: "3.5 Months",
      color: "from-blue-500 to-cyan-500",
      icon: Code,
      topics: [
        "Introduction to Python",
        "Data Types (integers, floats, strings, booleans)",
        "Operators & Keywords",
        "Variables & Strings",
        "Control Flow, Loops",
        "Tuples, Lists, Sets, Dictionaries",
      ]
    },
    {
      title: "Collections & Logic",
      duration: "Part of Month 2-3",
      color: "from-purple-500 to-pink-500",
      icon: Layers,
      topics: [
        "Control Flow Deep Dive",
        "Lists, Tuples, Sets, Frozen Sets",
        "Dictionary Operations",
        "Function Definitions and Scope",
        "Problem-Solving Assignments",
        "Advanced String Formatting",
      ]
    },
    {
      title: "Functions & Mastery",
      duration: "Part of Month 3-3.5",
      color: "from-orange-500 to-red-500",
      icon: Brain,
      topics: [
        "Functions: Default & Keyword Arguments",
        "Lambda Functions",
        "Recursive Functions",
        "Module Imports and Packages",
        "Final Python Assignments",
        "Preparation for Application Phase",
      ]
    },
    {
      title: "Streamlit Web Apps",
      duration: "1 Month",
      color: "from-green-500 to-emerald-500",
      icon: Rocket,
      topics: [
        "Streamlit Setup and Basics",
        "Building Interactive UI Components",
        "Integrating Python Logic (Functions)",
        "Handling Data Input and Output",
        "Data Visualization with Streamlit",
        "Deployment Strategy",
      ]
    }
  ];

  const outcomes = [
    { icon: CheckCircle, text: "Strong Python syntax mastery" },
    { icon: Target, text: "Confident problem-solving skills" },
    { icon: Rocket, text: "Build interactive web applications" },
    { icon: BookOpen, text: "Real-world project experience" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              <h1 className="text-4xl sm:text-5xl font-bold mb-2">Module 1</h1>
            </div>
          </div>
          <h2 className="text-xl sm:text-3xl font-semibold text-white mb-3">
            Python Foundations & Web Development
          </h2>
          <div className="flex items-center justify-center gap-2 text-cyan-300 text-base sm:text-xl">
            <Clock className="w-5 h-5" />
            <span>Total Duration: 4.5 Months</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mb-12 sm:mb-16">
          {/* Horizontal Line (Hidden on small mobile to avoid clutter) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2"></div>
          
          {/* Phases Grid: 2 columns on mobile, 4 on medium/desktop */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`cursor-pointer transition-all duration-300 ${
                    activePhase === index ? 'scale-105 md:scale-110' : 'scale-100 opacity-70'
                  }`}
                >
                  <div className={`bg-gradient-to-br ${phase.color} rounded-2xl p-4 sm:p-6 shadow-2xl border-4 ${
                    activePhase === index ? 'border-white' : 'border-transparent'
                  }`}>
                    <div className="flex flex-col items-center text-white">
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3" />
                      <h3 className="font-bold text-sm sm:text-lg text-center mb-1 sm:mb-2">{phase.title}</h3>
                      <p className="text-xs sm:text-sm opacity-90">{phase.duration}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Phase Details */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 mb-12 border border-white/20 shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            {React.createElement(phases[activePhase].icon, {
              className: "w-8 h-8 sm:w-10 sm:h-10 text-cyan-300"
            })}
            <div>
              <h3 className="text-xl sm:text-3xl font-bold text-white">{phases[activePhase].title}</h3>
              <p className="text-sm sm:text-base text-cyan-300">{phases[activePhase].duration}</p>
            </div>
          </div>
          
          {/* Topics List: 1 column on mobile, 2 on medium/desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {phases[activePhase].topics.map((topic, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br ${phases[activePhase].color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {index + 1}
                  </div>
                  <p className="text-white text-base sm:text-lg pt-1">{topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-purple-400/30">
          <h3 className="text-xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
            Learning Outcomes
          </h3>
          
          {/* Outcomes Grid: 2 columns on mobile, 4 on medium/desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {outcomes.map((outcome, index) => {
              const Icon = outcome.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-2 sm:mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-shadow">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <p className="text-white text-sm sm:text-base font-semibold">{outcome.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Highlights */}
        {/* Highlights Grid: 1 column on mobile, 3 on small screen up */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-blue-500/20 backdrop-blur rounded-2xl p-6 border border-blue-400/30 text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-300 mb-2">3.5</div>
            <div className="text-white text-sm sm:text-base">Months Python Core</div>
          </div>
          <div className="bg-green-500/20 backdrop-blur rounded-2xl p-6 border border-green-400/30 text-center">
            <div className="text-3xl sm:text-4xl font-bold text-green-300 mb-2">1</div>
            <div className="text-white text-sm sm:text-base">Month Streamlit</div>
          </div>
          <div className="bg-purple-500/20 backdrop-blur rounded-2xl p-6 border border-purple-400/30 text-center">
            <div className="text-3xl sm:text-4xl font-bold text-purple-300 mb-2">∞</div>
            <div className="text-white text-sm sm:text-base">Assignments & Practice</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonWorkflow;
