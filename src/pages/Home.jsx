import React, { useEffect, useState} from "react";
// Composant de la page d'accueil
import AboutBlock, {SkillsBlock} from "../components/home/AboutSkillsSection";
import GithubModal from "../components/home/GithubModal";
import HeroBlock from "../components/home/Hero";

// assets images
import aboutImage from "../assets/images/john-doe-about.jpg";
import heroImage from "../assets/images/hero-bg.jpg";


/**
 * Page d'accueil du site
 * - Affiche le hero
 * - Présente le profil et les compétences
 * - Gère l'ouverture de la modal Github
 * - Récupère les données Github une seule fois au chargement
 */
function Home() {
    // Etat controlant l'affichage de la modale Github
    const [showModal, setShowModal] = useState(false);

    // Etat stockant les données récupérées depuis l'API Github
    const [githubData, setGithubData] = useState(null);

    // Chargement des infos Github une seule fois
    useEffect(() => {
        fetch("https://api.github.com/users/Alexdessine")
            .then(response => response.json())
            .then(data => setGithubData(data))
            .catch(error => console.error(error));
    }, []);

    // Données du Hero (titre, image de fond, sous-titre)
    const heroData = {
        title: "Bonjour je suis John Doe !",
        image: heroImage,
        subtitle: "Développeur Web Full Stack",
    };

    // Contenu de la section "A propos"
    const aboutData = {
        title: "A propos",
        image: aboutImage,
        paragraphs: [
            " Amoureux de technologie et curieux de tout j'aime découvrir de nouvelles technologies, le DIY à une grande place dans ma vie",
            "C'est grâce à cette curiosité que je me suis intéressé au développement web, me formant principalement en autodidacte et par mon travail au sein de mon entreprise.",
        ],
    };

    // Liste des compétences affichées sous forme de barres de progression
    const skillsData = [
        {label: "Illustrator", value:90, color:"Danger"},
        {label: "Photoshop", value:90, color:"Primary"},
        {label: "HTML / CSS", value:70, color:"Warning"},
        {label: "MySQL", value:60, color:"Info"},
        {label: "PHP", value:50, color:"Success"},
    ];

    return (
        <main>
            {/* HERO : titre, sous-titre et bouton ouvrant la modale */}
            <section>
                <HeroBlock 
                    title={heroData.title}
                    image={heroData.image}
                    subtitle={heroData.subtitle}
                    onOpenModal={() => setShowModal(true)}
                />

                {/* Modale Github : affichée uniquement si showModal === true */}
                <GithubModal
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    data={githubData}
                />
            </section>

            {/* Section A propos + Compétences */}
            <section class="row mb-4 mt-4">
                <div class="col-sm-12 col-md-8 m-auto mb-3 mb-sm-0">
                    <div class="card about-skills-card">
                        {/* Bloc à propos */}
                        <div class="card-body col-md-6">
                            <AboutBlock 
                                title={aboutData.title}
                                image={aboutData.image}
                                paragraphs={aboutData.paragraphs}
                                />
                        </div>
                        {/* Blocs compétences */}
                        <div class="card-body col-md-6">
                            <SkillsBlock title="Mes compétences" skills={skillsData} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;