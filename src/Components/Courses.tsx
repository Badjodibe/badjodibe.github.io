import React from 'react';

type CourseCardProps = {
  title: string;
  description: string;
  domain: string;
  image: string;
  level: string;
  link: string;
};

const CourseCard: React.FC<CourseCardProps> = ({ title, description, domain, image, level, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#023E73]">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>

        {/* Domain and Level */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-medium text-white bg-[#026C61] px-3 py-1 rounded-md">
            {domain}
          </span>
          <span className="text-sm font-medium text-[#FF6F3C] bg-gray-100 px-3 py-1 rounded-md">
            {level}
          </span>
        </div>

        {/* Link to the course */}
        <div className="mt-4 text-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF6F3C] text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-500 transition-colors"
          >
            Voir la Formation
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
