import React from 'react';

const timelineData = {
    education: [
        {
            year: '2009',
            title: 'UI Design',
            subtitle: 'University of Studies',
            description:
                'Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.',
        },
        {
            year: '2008',
            title: 'Graphic Design',
            subtitle: 'University of Studies',
            description:
                'Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.',
        },
        {
            year: '2007',
            title: 'Frontend Development',
            subtitle: 'University of Studies',
            description:
                'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.',
        },
    ],
    experience: [
        {
            year: '2016 - Current',
            title: 'Lead UI/UX Designer',
            subtitle: 'Rolling Thunder',
            description:
                'Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna.',
        },
        {
            year: '2013 - 2016',
            title: 'Senior UI/UX Designer',
            subtitle: 'Locost Accessories',
            description:
                'Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam.',
        },
        {
            year: '2011 - 2013',
            title: 'Junior UI/UX Designer',
            subtitle: 'Sagebrush',
            description:
                'Duis mollis nunc quis quam viverra venenatis. Nulla nulla arcu, congue vitae nunc ac, sodales ultricies diam. Nullam justo justo leo, tincidunt sit amet.',
        },
    ],
};

export default function Resume() {
    return (
        <div className="bg-[#1f1f1f] text-white min-h-screen py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-start mb-12">
                    <h1 className="text-4xl font-bold">Resume</h1>
                    <p className="text-gray-400">8 Years of Experience</p>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Education Section */}
                    <div>
                        <h2 className="text-xl font-semibold mb-6 border-l-4 border-blue-500 pl-3">Education</h2>
                        <div className="space-y-10 border-l border-gray-600 pl-6 relative">
                            {timelineData.education.map((item, idx) => (
                                <div key={idx} className="relative">
                                    <div className="absolute -left-6 top-1 text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
                                        {item.year}
                                    </div>
                                    <p className="text-sm text-gray-400 mb-1">{item.subtitle}</p>
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-sm text-gray-300">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div>
                        <h2 className="text-xl font-semibold mb-6 border-l-4 border-blue-500 pl-3">Experience</h2>
                        <div className="space-y-10 border-l border-gray-600 pl-6 relative">
                            {timelineData.experience.map((item, idx) => (
                                <div key={idx} className="relative">
                                    <div className="absolute -left-6 top-1 text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
                                        {item.year}
                                    </div>
                                    <p className="text-sm text-gray-400 mb-1">{item.subtitle}</p>
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-sm text-gray-300">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
