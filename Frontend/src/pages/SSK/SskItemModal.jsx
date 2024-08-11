import React from "react";
import ReactMarkdown from "react-markdown";
import { Card, Image, Modal } from "../../components";

const ItemModal = ({ item, onClose, readme }) => {
    return (
      <Modal isOpen onClose={onClose}>
        <div className="w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl space-y-4">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-200">
            {item.name}
          </h2>
          <Image src={item.imgURL} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
           <ReactMarkdown className="prose max-w-none text-textSecondary">
            {readme}
          </ReactMarkdown>
           <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
            Recommendations
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {item.details.recommendations.map((recommendation, index) => (
              <Card key={index} className="cursor-pointer p-2" variant="border">
                <Image src={recommendation.imgURL} alt={recommendation.name} className="h-32 w-full object-cover rounded-lg" />
                <div className="p-1 pt-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 truncate">
                    {recommendation.name}
                  </h4>
                  <a
                    href={recommendation.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Buy Now
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Modal>
    );
  };
  