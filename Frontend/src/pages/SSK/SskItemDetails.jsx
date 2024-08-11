import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { BreadCrumb, Card, Image } from "../../components";
import PageParent from "../../layout/PageParent";

const essentialDetails = {
  id: 1,
  name: "Laptop",
  imgURL: "https://example.com/laptop.jpg",
  readme: `
      ### Use
      Laptops are used for research, assignments, coding, and online classes.

      ### Specifications
      - Display: 14-inch or above
      - RAM: 8GB or above
      - Storage: 256GB SSD or above
      - Processor: Intel Core i5 / AMD Ryzen 5 or above
      - Operating System: Windows 10 / macOS Big Sur or above
      
      ### Types
      - Ultrabooks
      - Gaming Laptops
      - 2-in-1 Laptops
      
      ### Recommendations
      - For general use: Dell XPS 13
      - For gaming: ASUS ROG Strix
      - For portability: MacBook Air

      ### Pros
      - Portable
      - Versatile
      - High performance

      ### Cons
      - Can be expensive
      - Battery life varies
      - Can be bulky

      ### Tips
      - Ensure it has a good warranty
      - Consider battery life based on usage
      - Check for necessary ports and connectivity options
      - Install essential software like Microsoft Office, Google Chrome, and Zoom.
      - Use a laptop sleeve or case for protection.
      - Keep the laptop clean and dust-free.
      - Regularly update the operating system and software.
      - Backup important files and data regularly.
      - Use a cooling pad for extended usage.

      `,
  recommendations: [
    {
      name: "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey",
      imgURL: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg",
      link: "https://amzn.to/4d8xkOx",
    },
    {
      name: "Dell XPS 13",
      imgURL: "https://example.com/dell-xps-13.jpg",
      link: "https://example.com/dell-xps-13",
    },
    {
      name: "HP Spectre x360",
      imgURL: "https://example.com/hp-spectre.jpg",
      link: "https://example.com/hp-spectre",
    },
    {
      name: "ASUS ROG Strix",
      imgURL: "https://example.com/asus-rog.jpg",
      link: "https://example.com/asus-rog",
    },
    {
      name: "Microsoft Surface Laptop 4",
      imgURL: "https://example.com/microsoft-surface.jpg",
      link: "https://example.com/microsoft-surface",
    },
    {
      name: "Lenovo ThinkPad X1 Carbon",
      imgURL: "https://example.com/lenovo-thinkpad.jpg",
      link: "https://example.com/lenovo-thinkpad",
    }
  ],
};

const SskItemDetails = () => {
  const { id } = useParams();
  const item = essentialDetails.id === parseInt(id) ? essentialDetails : null;

  if (!item) {
    return (
      <PageParent title="Item Not Found">
        <nav className="mb-4">
          <BreadCrumb start={1} />
        </nav>
        <div className="flex items-center justify-center h-96">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Item not found
          </h2>
        </div>
      </PageParent>
    );
  }

  return (
    <PageParent title={item.name}>
      <nav className="mb-4">
        <BreadCrumb start={1} />
      </nav>
      <div className="w-full space-y-4 sm:px-4 md:px-8 lg:px-16">
        <Image
          src={item.imgURL}
          alt={item.name}
          className="mb-4 h-48 w-full rounded-lg object-cover sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto"
        />
        <ReactMarkdown className="prose max-w-none text-textSecondary">
          {item.readme}
        </ReactMarkdown>
        <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
          Recommendations
        </h3>
        <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {item.recommendations.map((recommendation, index) => (
            <Card 
            key={index} 
            className="cursor-pointer p-2" 
            variant="border" 
            onClick={() => window.open(recommendation.link, "_blank")}
            >
              <Image
                src={recommendation.imgURL}
                alt={recommendation.name}
                className=" w-full rounded-lg object-cover"
              />
              <div className="p-1 pt-4">
                <h4 className="truncate text-lg font-semibold text-gray-800 dark:text-gray-200">
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
    </PageParent>
  );
};

export default SskItemDetails;
