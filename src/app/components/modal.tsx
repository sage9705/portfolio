import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv/Edem_Kumahor_CV.pdf';
    link.download = 'Edem_Godwin_Kumahor_CV';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-700 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">My CV</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {isLoading && (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#4ce6de]"></div>
                </div>
              )}
              <iframe
                src="/cv/Edem_Kumahor_CV.pdf"
                className="w-full h-[70vh]"
                onLoad={() => setIsLoading(false)}
                style={{ display: isLoading ? 'none' : 'block' }}
              ></iframe>
            </div>
            <div className="p-6 border-t border-gray-700 flex justify-end">
              <button
                onClick={handleDownload}
                className="px-6 py-2 bg-gradient-to-r from-[#4ce6de] to-[#00ffc3] text-gray-900 font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#00ffc3]/50 transform hover:scale-105"
              >
                Download CV
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CVModal;