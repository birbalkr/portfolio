import React, { useState, useEffect } from "react";

export default function RotatingText({ texts, typingSpeed = 120, pause = 800 }) {
    const [index, setIndex] = useState(0);      // which word
    const [subIndex, setSubIndex] = useState(0); // letter position
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (index === texts.length) return;

        // Typing forward
        if (!deleting && subIndex < texts[index].length) {
            setTimeout(() => {
                setSubIndex(subIndex + 1);
            }, typingSpeed);

        // Pause before deleting
        } else if (!deleting && subIndex === texts[index].length) {
            setTimeout(() => {
                setDeleting(true);
            }, pause);

        // Deleting letters
        } else if (deleting && subIndex > 0) {
            setTimeout(() => {
                setSubIndex(subIndex - 1);
            }, typingSpeed / 2);

        // Move to next word
        } else if (deleting && subIndex === 0) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % texts.length);
        }

    }, [subIndex, deleting, index, texts, typingSpeed, pause]);

    return (
        <span className="bg-cyan-300 px-3 py-1 rounded-lg font-medium text-black">
            {texts[index].substring(0, subIndex)}
        </span>
    );
}
