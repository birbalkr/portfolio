import React from 'react'
import { skills } from '../../utils/skills'
import { CodeBracketIcon, GlobeAltIcon, ServerStackIcon, WrenchScrewdriverIcon } from '@heroicons/react/16/solid'

function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-title mb-16 text-bright-sun-600 underline decoration-bright-sun-600 underline-offset-22"
                >
                    Skills
                </h2>
                <h3 className="text-xl text-center text-text mb-14">
                    Here are some of the key skills I bring to the table
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    <div className="max-w-md mx-auto">
                        <div className="flex items-center mb-4 space-x-2">
                            <CodeBracketIcon className="h-6 w-6 text-blue-600" />
                            <h3 className="text-xl font-semibold text-blue-600">Languages</h3>
                        </div>
                        <ul className="relative border-l-2 border-blue-600 pl-6 space-y-3">
                            {skills.languages.map((lang, index) => (
                                <li key={`${lang}-${index}`} className="text-text font-medium">
                                    {lang.name}
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className="max-w-md mx-auto">
                        <div className="flex items-center mb-4 space-x-2">
                            <ServerStackIcon className="h-6 w-6 text-green-600" />
                            <h3 className="text-xl font-semibold text-green-600">
                                Frameworks & Libraries
                            </h3>
                        </div>
                        <ul className="relative border-l-2 border-green-600 pl-6 space-y-3">
                            {skills.Frameworks.map((fw, index) => (
                                <li key={`${fw}-${index}`} className="text-text font-medium">
                                    {fw.name}
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className="max-w-md mx-auto">
                        <div className="flex items-center mb-4 space-x-2">
                            <WrenchScrewdriverIcon className="h-6 w-6 text-purple-600" />
                            <h3 className="text-xl font-semibold text-purple-600">
                                Tools & Platforms
                            </h3>
                        </div>
                        <ul className="relative border-l-2 border-purple-600 pl-6 space-y-3">
                            {[
                                "IntelliJ",
                                "Eclipse",
                                "PyCharm",
                                "Android Studio",
                                "Git",
                                "AWS",
                                "Docker",
                                "Railway.app",
                            ].map((tool, index) => (
                                <li key={`${tool}-${index}`} className="text-text font-medium">
                                    {tool}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="max-w-md mx-auto">
                        <div className="flex items-center mb-4 space-x-2">
                            <GlobeAltIcon className="h-6 w-6 text-yellow-600" />
                            <h3 className="text-xl font-semibold text-yellow-600">Other</h3>
                        </div>
                        <ul className="relative border-l-2 border-yellow-600 pl-6 space-y-3">
                            {["RESTful APIs", "RapidAPI", "API Integration & Testing"].map(
                                (other, index) => (
                                    <li key={`${other}-${index}`} className="text-text font-medium">
                                        {other}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
