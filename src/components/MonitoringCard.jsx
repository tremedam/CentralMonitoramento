import React from 'react';
import { ExternalLink } from 'lucide-react';

const MonitoringCard = ({ title, description, url, icon: Icon, color, category }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl bg-white p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 hover:border-primary-400 h-full flex flex-col"
        >
            {/* Background gradient effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
                {/* Icon and External Link */}
                <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${color} text-white shadow-sm`}>
                        <Icon className="w-6 h-6" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                </div>

                {/* Category Badge */}
                <div className="mb-2">
                    <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-primary-700 bg-primary-50 rounded-full">
                        {category}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {description}
                </p>

                {/* Hover indicator */}
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center text-primary-600 font-medium text-xs group-hover:translate-x-1 transition-transform">
                    Acessar sistema
                    <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

            {/* Animated border */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </a>
    );
};

export default MonitoringCard;
