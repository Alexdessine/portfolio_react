import React from "react";

function AboutBlock({title, image, paragraphs}) {
    return (
        <div className="about-skills-block">
            <h3>{title}</h3>
            <img src={image} alt={title} className="mb-4"/>
            {paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
            ))}
        </div>
    )
}

export default AboutBlock;

function SkillBar({ label, value, color }) {
    return (
        <div className="skill-bar mb-4">
            <span className="skill-bar-label">{label} {value}%</span>
            <div className="skill-bar-track">
                <div 
                className="progress" 
                role="progressbar" 
                aria-label={`${color} striped example`} 
                aria-valuenow={value} 
                aria-valuemin="0" 
                aria-valuemax="100">
                    <div 
                    className={`progress-bar progress-bar-striped bg-${color.toLowerCase()}`} 
                    style={{ width: value + '%' }}
                    ></div>
                </div>

            </div>
        </div>
    )
}

export { SkillBar };

function SkillsBlock ({title, skills}){
    return (
        <div className="about-skills-block">
            <h3>{title}</h3>
                {skills.map((skill, index) => (
                    <SkillBar 
                        key={index} 
                        label={skill.label}
                        value={skill.value}
                        color={skill.color}>
                    </SkillBar>
                ))}
        </div>
    )
}

export {SkillsBlock};

