import parse from 'html-react-parser'
import React from 'react';
import type { Item } from '../types';
import { rarityColor } from '../utils/optimizer';

interface ItemCardProps {
  title: string;
  rarity: Item['rarity'];
  subtitle?: string;
  iconUrl?: string;
  content: { iconUrl?: string; text: string }[];
  price: number | string;
}

export default function ItemCard({
  title,
  subtitle,
  iconUrl,
  content,
  price,
  rarity,
}: ItemCardProps) {
  return (
    <div
      className="flex flex-col font-noto font-bold opacity-90 rounded-[10px] overflow-hidden"
      style={{
        borderTop: `7px solid ${rarityColor(rarity)}`,
        borderBottom: `3px solid ${rarityColor(rarity)}`,
        background: '#0e1325', // Custom color, consider adding to Tailwind config
      }}
    >
      {/* Title Section */}
      <div className="flex items-center gap-4 px-5 py-4">
        {iconUrl && (
          <img
            src={iconUrl}
            alt=""
            width={60}
            height={60}
            className="rounded-lg object-cover"
          />
        )}
        <div>
          <div className="text-lg font-bold" style={{ color: '#fdfdfd' }}>
            {title}
          </div>
          {subtitle && (
            <div className="text-sm font-semibold" style={{ color: '#f67422' }}>
              {subtitle}
            </div>
          )}
        </div>
      </div>
      {/* Divider */}
      <div className="h-px mx-4" style={{ background: '#264268' }} />
      {/* Content Section */}
      <div className="flex flex-col gap-2 px-5 py-4">
        {content.map((row, idx) => (
          <div key={idx} className="flex items-center gap-3">
            {row.iconUrl && (
              <img
                src={row.iconUrl}
                alt=""
                width={30}
                height={30}
                className="rounded object-cover"
                style={{ borderRadius: 4 }} // Tailwind doesn't have rounded-[4px] by default
              />
            )}
            <span className="font-normal font-merriweather" style={{ color: '#fdfdfd' }}>
              {parse(row.text)}
            </span>
          </div>
        ))}
      </div>
      {/* Divider */}
      <div className="h-px mx-4" style={{ background: '#264268' }} />
      {/* Footer Section */}
      <div className="flex px-5 py-3">
        <span className="font-mono text-base font-bold" style={{ color: '#fdfdfd' }}>
          {price}
        </span>
      </div>
    </div>
  );
}