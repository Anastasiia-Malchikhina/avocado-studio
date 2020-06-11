import React from 'react';
import Slideshow from './Hero/Hero';
import About from '../../components/About/About';
import VideoText from '../../components/Video-With-Text/Video-With-Text';
import Services from '../../components/Services/Services';
import Testimonials from '../../components/Testimonials/Testimonials';
import Projects from '../../components/Projects/Projects';
import Form from '../../components/Form/Form';
import Navigation from '../../components/Projects/Navigation/Navigation';

const Home = () => {
  return (
    <>
    <Slideshow />
    <About/>
    <VideoText/>\
    <Services/>
    <Testimonials />
    <Navigation />
    <Form />
    </>
  );
};

export { Home };
