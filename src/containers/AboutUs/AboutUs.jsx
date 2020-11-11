import React, { Component } from 'react';
import './../../styles/main.css';
import AboutUsSVG from './../../images/About Us.svg';

import LinkedInIcon from './../../images/social/icon-linkedin.svg';
import GitHubIcon from './../../images/social/icon-github.svg';
import Website from './../../images/icons/icon-website.svg';

const AboutUs = (props) => {
  return (
    <div>
      <div className="bg-gray-100 p-12 lg:flex lg:justify-center">
        <div className="lg:w-1/2">
          <div className="h-auto bg-cover m-auto lg:m-0 lg:rounded-lg lg:h-full max-w-sm">
            <img
              className="lg:w-5/12 w-full h-auto lg:fixed"
              src={AboutUsSVG}
            ></img>
          </div>
        </div>
        <div className="m-auto py-12 lg:p-0 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
          <h2 className="text-3xl text-black font-bold">About Find Me ©</h2>
          <p className="mt-4 text-black">
            Find Me© is a website to help find the lost people. Weather you are
            looking for your family or find a lost person. You came to the right
            place.
          </p>
          <br></br>
          <br></br>
          <h2 className="text-3xl text-black font-bold">Our Story</h2>
          <p className="mt-4 text-black">
            We are a group of students with a passion for coding and developing.
            Find Me© is one of our projects that is categorized under UN's
            sustainable development. Which will help our country on the long
            run.
          </p>
          <p className="flex mt-4">
            <span className="block text-left w-2/3 box-border">
              Abdulateef Al-radaee
            </span>
            <span className="block text-right w-1/3 box-border">
              <a target="_blank" href="https://github.com/Abdulateef-Muhammad">
                <img src={GitHubIcon} className="inline ml-2 h-5"></img>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/abdulateef-al-radaee-8101171a1/"
              >
                <img src={LinkedInIcon} className="inline ml-2 h-5"></img>
              </a>
            </span>
          </p>
          <p className="flex mt-4">
            <span className="block text-left w-2/3 box-border">
              Ahmed Al-Majidi
            </span>
            <span className="block text-right w-1/3 box-border">
              <a target="_blank" href="https://github.com/AhmedAl-Majidi">
                <img src={GitHubIcon} className="inline ml-2 h-5"></img>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ahmed-al-majidi-0b90901ba/"
              >
                <img src={LinkedInIcon} className="inline ml-2 h-5"></img>
              </a>
            </span>
          </p>
          <p className="flex mt-4">
            <span className="block text-left w-2/3 box-border">
              Asma Kolaib
            </span>
            <span className="block text-right w-1/3 box-border">
              <a target="_blank" href="https://github.com/as-kolaib">
                <img src={GitHubIcon} className="inline ml-2 h-5"></img>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/asma-kolaib-31514a199/"
              >
                <img src={LinkedInIcon} className="inline ml-2 h-5"></img>
              </a>
            </span>
          </p>
          <p className="flex mt-4">
            <span className="block text-left w-2/3 box-border">
              Basil Homadi
            </span>
            <span className="block text-right w-1/3 box-border">
              <a target="_blank" href="https://github.com/BasilHomadi">
                <img src={GitHubIcon} className="inline ml-2 h-5"></img>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/basil-homadi-4471a0198/"
              >
                <img src={LinkedInIcon} className="inline ml-2 h-5"></img>
              </a>
            </span>
          </p>
          <p className="flex mt-4">
            <span className="block text-left w-2/3 box-border">
              Sondos Ahmed
            </span>
            <span className="block text-right w-1/3 box-border">
              <a target="_blank" href="https://github.com/SondosAhmed">
                <img src={GitHubIcon} className="inline ml-2 h-5"></img>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/sondos-alshami/"
              >
                <img src={LinkedInIcon} className="inline ml-2 h-5"></img>
              </a>
            </span>
          </p>
          <p className="flex mt-4">
            <span className="block text-left w-2/3 box-border">
              Watheq Alshowaiter
            </span>
            <span className="block text-right w-1/3 box-border">
              <a target="_blank" href="http://watheq.xyz/">
                <img src={Website} className="inline ml-2 h-5"></img>
              </a>
              <a target="_blank" href="https://github.com/WatheqAlshowaiter">
                <img src={GitHubIcon} className="inline ml-2 h-5"></img>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/watheq-show/"
              >
                <img src={LinkedInIcon} className="inline ml-2 h-5"></img>
              </a>
            </span>
          </p>
          <br />
          <br />
          <h2 className="text-3xl text-black font-bold">A Big Thanks for</h2>
          <p className="mt-4 text-black">
            During our long journey of problem solving, programing and learning
            how to code, There are some special names that shine like stars, to
            guide us to safe lands. We are really grateful for them for holding
            our hands in the utter darkness.
          </p>
          <p className="flex mt-4">
            <span className="block text-left w-2/3 box-border">
              Maher Alaqil
            </span>
            <span className="block text-right w-1/3 box-border">
              <a target="_blank" href="https://github.com/maqalaqil">
                <img src={GitHubIcon} className="inline ml-2 h-5"></img>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/maher-al-aqil-56895894/"
              >
                <img src={LinkedInIcon} className="inline ml-2 h-5"></img>
              </a>
            </span>
          </p>
          <p className="flex mt-4">
            <span className="block text-left w-2/3 box-border">
              Salah Al-Dhaferi
            </span>
            <span className="block text-right w-1/3 box-border">
              <a target="_blank" href="https://github.com/tech-chieftain">
                <img src={GitHubIcon} className="inline ml-2 h-5"></img>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/salah-aldhaferi/"
              >
                <img src={LinkedInIcon} className="inline ml-2 h-5"></img>
              </a>
            </span>
          </p>
          <p className="flex mt-4">
            <span className="block text-left w-2/3 box-border">
              Muhanned Noman
            </span>
            <span className="block text-right w-1/3 box-border">
              <a target="_blank" href="https://github.com/MuhannedNoman">
                <img src={GitHubIcon} className="inline ml-2 h-5"></img>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/muhannednoman/"
              >
                <img src={LinkedInIcon} className="inline ml-2 h-5"></img>
              </a>
            </span>
          </p>
          <p className="flex mt-4">
            <span className="block text-left w-2/3 box-border">
              Mohamed Alaoudi
            </span>
            <span className="block text-right w-1/3 box-border">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mohamedalaoudi/"
              >
                <img src={LinkedInIcon} className="inline ml-2 h-5"></img>
              </a>
            </span>
          </p>
          <p className="mt-4 text-black">
            And all Re:Coded family, which without them, we could not be here
            today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
