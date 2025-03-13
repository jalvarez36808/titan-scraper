import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface NewsItem {
  date: string;
  username: string;
  name: string;
  vehicle: string;
  location: string;
  experience: string;
  url: string;
}

interface RecentNewsProps {
  newsItems: NewsItem[];
}

const RecentNews: React.FC<RecentNewsProps> = ({ newsItems }) => {
  // Take only the most recent 3 news items
  const recentNews = newsItems.slice(0, 3);

  return (
    <motion.div 
      className="bg-titan-black-light border border-titan-gray-light rounded-lg p-4 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold text-titan-orange mb-4 flex items-center">
        <span className="mr-2">Recent Accident Reports</span>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="w-2 h-2 bg-titan-red rounded-full"
        />
      </h2>
      
      <div className="space-y-3">
        {recentNews.map((item, index) => (
          <motion.div 
            key={index}
            className="bg-titan-black p-3 rounded border border-titan-gray-light hover:border-titan-orange transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-white">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.username}</p>
              </div>
              <span className="text-xs text-titan-orange bg-titan-black-light px-2 py-1 rounded">
                {item.date}
              </span>
            </div>
            
            <p className="text-sm text-gray-300 mt-2 line-clamp-2">
              {item.experience}
            </p>
            
            <div className="mt-2 flex justify-end">
              <Link 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-titan-orange hover:text-titan-red flex items-center transition-colors"
              >
                View Original <ExternalLink size={12} className="ml-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button className="text-sm text-titan-orange hover:text-titan-red transition-colors">
          View All Reports
        </button>
      </motion.div>
    </motion.div>
  );
};

export default RecentNews;