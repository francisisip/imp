/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import AboutSlide from './aboutSlide';

export default function AboutSection() {
  const [slideState, setSlide] = useState(-1);
  const max = 3;

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (slideState === -1) {
      setSlide(0);
    }
  }, [slideState]);

  return (
    <section className="container mx-auto">
      <AboutSlide
        title="The Why"
        head="Collaborative AI Through Human Effort"
        img="theWhy.jpg"
        desc="Imprint was built to support scalable and voluntary crowdsourcing for machine learning development. 
              As ML models rely heavily on high-quality data, there is a growing need for platforms that make data 
              collection easier and more inclusive. Imprint encourages civic participation in annotation tasks that 
              contribute to real-world research, especially in areas like urban walkability and sidewalk obstruction detection."
        active={slideState === 0}
      />
      <AboutSlide
        title="The How"
        head="Human-in-the-Loop System for ML Models"
        img="theHow.jpg"
        desc="Imprint functions as a human-in-the-loop platform where users annotate images to support the creation of datasets 
              for training, validating, and testing machine learning models. The platform continuously integrates human input into 
              ML workflows, helping make AI systems more responsive and accurate."
        active={slideState === 1}
      />
      <AboutSlide
        title="The Who"
        head="Human-X Interactions Lab Research Center"
        img="theWho.jpg"
        desc={
              <>
            Imprint is currently being developed by Francis Bawa, a BSMS Computer Science student from De La Salle University with 
            interests in human-computer interaction and human centered mobility. The platform invites volunteers, students, and everyday 
            users to participate in meaningful data annotation. By contributing to Imprint, users help improve AI models while supporting 
            research that addresses real social and urban challenges. If you are interested in learning more about the research, please read our{' '}
            <Link href="/terms-of-use" className="text-primary hover:underline">
              Terms of Use
            </Link>.
          </>
        }
        active={slideState === 2}
      />
      <div className="z-10 flex justify-end max-w-5xl mx-auto mt-10 relative mb-12">
        <button type="button" className="outline-none focus:outline-none border-black border px-4 text-gray-800 text-5xl transition-colors duration-300 ease-in-out hover:text-white hover:bg-gray-800" onClick={() => { setSlide((slideState - 1 + max) % max); scrollTop(); }}> 🠐</button>
        <button type="button" className="mr-5 md:mr-0 outline-none focus:outline-none border-black border px-4 text-gray-800 text-5xl transition-colors duration-300 ease-in-out hover:text-white hover:bg-gray-800" onClick={() => { setSlide((slideState + 1) % max); scrollTop(); }}> 🠒 </button>
      </div>
    </section>
  );
}
