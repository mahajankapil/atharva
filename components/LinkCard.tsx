
import React from 'react';
import { LinkItem } from '../types';
import { ICONS } from '../constants';

interface LinkCardProps {
  item: LinkItem;
}

export const LinkCard: React.FC<LinkCardProps> = ({ item }) => {
  return (
    <a 
      href={item.url}
      target={item.url.endsWith('.pdf') ? '_blank' : undefined}
      rel={item.url.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
      className="group flex items-center justify-between w-full p-4 mb-4 bg-white border border-gray-100 rounded-2xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-blue-200 transition-all duration-300"
    >
      <div className="flex items-center space-x-5">
        <div className={`w-12 h-12 rounded-xl ${item.bgClass} ${item.colorClass} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
          {ICONS[item.iconType]}
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-gray-800 leading-tight">
            {item.title}
          </span>
          {item.subtitle && (
            <span className="text-xs text-gray-400 mt-0.5">{item.subtitle}</span>
          )}
        </div>
      </div>
      <div className="p-2 rounded-full hover:bg-gray-50 transition-colors">
        {ICONS.more}
      </div>
    </a>
  );
};
