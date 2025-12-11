import React from "react";
import AboutBlock, {SkillsBlock} from "../components/home/AboutSkillsSection";
import HeroBlock from "../components/home/Hero";
import aboutImage from "../assets/images/john-doe-about.jpg";
import heroImage from "../assets/images/hero-bg.jpg";

function Home() {

    const heroData = {
        title: "Bonjour je suis John Doe !",
        image: heroImage,
        subtitle: "Développeur Web Full Stack",
    };

    const aboutData = {
        title: "A propos",
        image: aboutImage,
        paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ],
    };

    const skillsData = [
        {label: "HTML", value:90, color:"Danger"},
        {label: "CSS", value:80, color:"Primary"},
        {label: "JavaScript", value:70, color:"Warning"},
        {label: "PHP", value:60, color:"Info"},
        {label: "React", value:50, color:"Success"},
    ];

    return (
        <main>
            <div>
                <HeroBlock 
                    title={heroData.title}
                    image={heroData.image}
                    subtitle={heroData.subtitle}
                />
            </div>
            <div class="row mb-4 mt-4">
                <div class="col-sm-12 col-md-8 m-auto mb-3 mb-sm-0">
                    <div class="card">
                        <div class="card-body col-md-6">
                            <AboutBlock 
                                title={aboutData.title}
                                image={aboutData.image}
                                paragraphs={aboutData.paragraphs}
                                />
                        </div>
                        <div class="card-body col-md-6">
                            <SkillsBlock title="Mes compétences" skills={skillsData} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;