import React from "react";
import SectionCard from "../ui/SectionCard";

function InfoBlock({ title, paragraphs }) {
    return (
        <SectionCard title={title}>
            {paragraphs.map((block, index) => (block) )}
        </SectionCard>

    )
}

export default InfoBlock;