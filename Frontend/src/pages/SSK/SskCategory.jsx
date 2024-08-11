import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Divider } from "@nextui-org/react";
import { ArrowRight2, SearchNormal1 } from "iconsax-react";
import { useClickAway } from "@uidotdev/usehooks";
import { Card, Image, Input } from "../../components";
import PageParent from "../../layout/PageParent";
import Sidebar from "./SskSidebar";

const AcademicEssentials = [
  {
    id: 1,
    name: "Laptop",
    description:
      "A reliable laptop is crucial for note-taking, assignments, and research.",
    details: {
      // A readable description of the item's usage with a list of specifications, types, recommendations, pros, cons, and other details.
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
          name: "MacBook Air M1",
          imgURL: "https://example.com/macbook-air.jpg",
          link: "https://example.com/macbook-air",
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
      ],
    },
  },
  {
    id: 2,
    name: "Notebooks",
    description:
      "Notebooks are essential for jotting down lecture notes and ideas.",
    imgURL: "https://via.placeholder.com/300",
    details: {
      readme: `
        ### Use
        Notebooks are used for taking notes, planning, and brainstorming.
  
        ### Specifications
        - Size: A4 or A5
        - Pages: 100 or more
        - Ruling: Ruled or blank
        
        ### Types
        - Spiral Notebook
        - Hardcover Notebook
        - Softcover Notebook
  
        ### Pros
        - Portable
        - Easy to use
        - Variety of designs
  
        ### Cons
        - Limited pages
        - Not eco-friendly
        - Can get damaged easily
  
        ### Tips
        - Choose a durable cover
        - Opt for recycled or eco-friendly paper
        - Use dividers or sticky notes for organization
        - Keep a backup of digital notes
        - Label notebooks for easy identification
        - Use different colors for different subjects
        `,
      recommendations: [
        {
          name: "Moleskine Classic Notebook",
          imgURL: "https://example.com/moleskine-notebook.jpg",
          link: "https://example.com/moleskine-notebook",
        },
        {
          name: "Leuchtturm1917 Hardcover Notebook",
          imgURL: "https://example.com/leuchtturm-notebook.jpg",
          link: "https://example.com/leuchtturm-notebook",
        },
        {
          name: "Rhodia Softcover Notebook",
          imgURL: "https://example.com/rhodia-notebook.jpg",
          link: "https://example.com/rhodia-notebook",
        },
      ],
    },
  },
  {
    id: 3,
    name: "Stationery",
    description: "Pens, pencils, highlighters, and other stationery items.",
    imgURL: "https://example.com/stationery-image.jpg",
    details: {
      readme: `
        ### Use
        Stationery items are used for writing, drawing, and organizing.
  
        ### Specifications
        - Variety of pens, pencils, markers, and highlighters.
        
        ### Types
        - Pens
        - Pencils
        - Markers
        - Highlighters
  
        ### Pros
        - Enhances creativity
        - Helps in organizing
        - Variety of colors and styles
  
        ### Cons
        - Can be lost easily
        - May dry out
        - Limited lifespan
  
        ### Tips
        - Use a pencil case for storage
        - Keep pens and markers capped when not in use
        - Store in a cool, dry place
        - Use different colors for color-coding
        - Invest in quality stationery
        - Keep a spare set of essentials
        `,
      recommendations: [
        {
          name: "Pilot G2 Gel Pen",
          imgURL: "https://example.com/pilot-g2-pen.jpg",
          link: "https://example.com/pilot-g2-pen",
        },
        {
          name: "Tombow Dual Brush Pens",
          imgURL: "https://example.com/tombow-pens.jpg",
          link: "https://example.com/tombow-pens",
        },
        {
          name: "Sharpie Highlighters",
          imgURL: "https://example.com/sharpie-highlighters.jpg",
          link: "https://example.com/sharpie-highlighters",
        },
      ],
    },
  },
  {
    id: 4,
    name: "Backpack",
    description:
      "A sturdy backpack to carry books, laptop, and other essentials.",
    imgURL: "https://example.com/backpack-image.jpg",
    details: {
      readme: `
        ### Use
        Backpacks are used to carry personal items, books, and electronics.
  
        ### Specifications
        - Water-resistant
        - 20L capacity
        - Padded compartments
        
        ### Types
        - Daypack
        - Laptop Backpack
        - Travel Backpack
  
        ### Pros
        - Comfortable to carry
        - Distributes weight evenly
        - Protects belongings
  
        ### Cons
        - Can be bulky
        - Limited space
        - May cause back strain
  
        ### Tips
        - Choose a backpack with multiple compartments
        - Look for padded shoulder straps
        - Check the weight distribution
        - Opt for water-resistant material
        - Keep heavy items close to the back
        - Use compression straps for stability
        `,
      recommendations: [
        {
          name: "The North Face Borealis Backpack",
          imgURL: "https://example.com/north-face-backpack.jpg",
          link: "https://example.com/north-face-backpack",
        },
        {
          name: "Herschel Little America Backpack",
          imgURL: "https://example.com/herschel-backpack.jpg",
          link: "https://example.com/herschel-backpack",
        },
        {
          name: "JanSport Right Pack Backpack",
          imgURL: "https://example.com/jansport-backpack.jpg",
          link: "https://example.com/jansport-backpack",
        },
      ],
    },
  },
  {
    id: 5,
    name: "Water Bottle",
    description:
      "Stay hydrated throughout the day with a reusable water bottle.",
    imgURL: "https://example.com/water-bottle-image.jpg",
    details: {
      readme: `
        ### Use
        Water bottles are used to stay hydrated throughout the day.
  
        ### Specifications
        - Capacity: 500ml or more
        - Material: Stainless steel, BPA-free plastic, glass
        
        ### Types
        - Stainless Steel Water Bottle
        - Glass Water Bottle
        - Collapsible Water Bottle
  
        ### Pros
        - Eco-friendly
        - Hygienic
        - Saves money
  
        ### Cons
        - Can be heavy
        - May leak
        - Requires cleaning
  
        ### Tips
        - Choose a leak-proof bottle
        - Clean regularly with warm, soapy water
        - Opt for BPA-free materials
        - Use a bottle brush for thorough cleaning
        - Carry a spare bottle for emergencies
        - Stay hydrated throughout the day
        `,
      recommendations: [
        {
          name: "Hydro Flask Water Bottle",
          imgURL: "https://example.com/hydro-flask.jpg",
          link: "https://example.com/hydro-flask",
        },
        {
          name: "S'well Stainless Steel Bottle",
          imgURL: "https://example.com/swell-bottle.jpg",
          link: "https://example.com/swell-bottle",
        },
        {
          name: "Contigo Autoseal Water Bottle",
          imgURL: "https://example.com/contigo-bottle.jpg",
          link: "https://example.com/contigo-bottle",
        },
      ],
    },
  },
];

const AccommodationEssentials = [
  {
    id: 2,
    name: "Bedding Set",
    description: "A comfortable bedding set for a good night's sleep.",
    imgURL: "https://example.com/bedding-set-image.jpg",
    details: {
      readme: `
        ### Use
        Bedding sets are used for a comfortable and restful sleep.
  
        ### Specifications
        - Includes: Bedsheet, pillowcases, comforter
        - Material: Cotton, microfiber, linen
        
        ### Types
        - Solid Color
        - Printed Design
        - Reversible Set
  
        ### Pros
        - Soft and comfortable
        - Easy to wash
        - Enhances bedroom decor
  
        ### Cons
        - May wrinkle easily
        - Color may fade
        - Requires regular washing
  
        ### Tips
        - Choose a material based on preference
        - Wash before first use
        - Use color-safe detergent
        - Rotate and fluff pillows regularly
        - Air out comforter occasionally
        - Store bedding in a cool, dry place
        `,
      recommendations: [
        {
          name: "Brooklinen Luxe Core Sheet Set",
          imgURL: "https://example.com/brooklinen-sheet.jpg",
          link: "https://example.com/brooklinen-sheet",
        },
        {
          name: "AmazonBasics Microfiber Sheet Set",
          imgURL: "https://example.com/amazonbasics-sheet.jpg",
          link: "https://example.com/amazonbasics-sheet",
        },
        {
          name: "Utopia Bedding Comforter Set",
          imgURL: "https://example.com/utopia-comforter.jpg",
          link: "https://example.com/utopia-comforter",
        },
      ],
    },
  },
  {
    id: 3,
    name: "Laundry Hamper",
    description: "A laundry hamper to keep dirty clothes organized.",
    imgURL: "https://example.com/laundry-hamper-image.jpg",
    details: {
      readme: `
        ### Use
        Laundry hampers are used to store dirty clothes until laundry day.
  
        ### Specifications
        - Material: Plastic, fabric, bamboo
        - Capacity: 50L or more
        
        ### Types
        - Foldable Hamper
        - Divided Hamper
        - Rolling Hamper
  
        ### Pros
        - Keeps room organized
        - Easy to transport
        - Ventilated for airflow
  
        ### Cons
        - May take up space
        - Requires regular cleaning
        - Can get musty
  
        ### Tips
        - Sort clothes by color or fabric
        - Use a liner for easy cleaning
        - Wash hamper regularly
        - Keep in a well-ventilated area
        - Empty regularly to avoid odors
        - Use a hamper with handles for transport
        `,
      recommendations: [
        {
          name: "Simple Houseware Foldable Hamper",
          imgURL: "https://example.com/simple-houseware-hamper.jpg",
          link: "https://example.com/simple-houseware-hamper",
        },
        {
          name: "BirdRock Home Double Laundry Hamper",
          imgURL: "https://example.com/birdrock-hamper.jpg",
          link: "https://example.com/birdrock-hamper",
        },
        {
          name: "Seville Classics Handwoven Hamper",
          imgURL: "https://example.com/seville-hamper.jpg",
          link: "https://example.com/seville-hamper",
        },
      ],
    },
  },
];

const PersonalEssentials = [];
const HealthWellness = [];
const TechGadgets = [];
const TravelEssentials = [];
const ClothingAccessories = [];
const FoodSnacks = [];
const FitnessGear = [];
const Entertainment = [];
const Miscellaneous = [];

const essentialsList = {
  AcademicEssentials: AcademicEssentials,
  AccommodationEssentials: AccommodationEssentials,
  PersonalEssentials: PersonalEssentials,
  "Health&Wellness": HealthWellness,
  TechGadgets: TechGadgets,
  TravelEssentials: TravelEssentials,
  "Clothing&Accessories": ClothingAccessories,
  "Food&Snacks": FoodSnacks,
  FitnessGear: FitnessGear,
  Entertainment: Entertainment,
  Miscellaneous: Miscellaneous,
};

const UrlToText = (url) => {
  return url
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => {
      return char.toUpperCase();
    })
    .replace(/\s/g, "");
};

const TextToUrl = (text) => {
  return text.replace(/\s+/g, "-").toLowerCase();
};

const UrlToTextWithSpace = (url) => {
  return url.replace(/-/g, " ").replace(/\b\w/g, (char) => {
    return char.toUpperCase();
  });
};

const SskCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [selectedCategoryText, setSelectedCategoryText] = useState(
    UrlToText(category),
  );
  const [selectedCategoryTextWithSpace, setSelectedCategoryTextWithSpace] =
    useState(UrlToTextWithSpace(category));

  const [essentials, setEssentials] = useState(
    essentialsList[selectedCategoryText] || [],
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [readme, setReadme] = useState(null);

  useEffect(() => {
    setEssentials(essentialsList[UrlToText(category)] || []);
    setSelectedCategoryText(UrlToText(category));
    setSelectedCategoryTextWithSpace(UrlToTextWithSpace(category));
  }, [category]);

  const ref = useClickAway(() => {
    setShowCategory(false);
  });

  const handleCategoryChange = (category) => {
    navigate(`/ssk/${TextToUrl(category)}`);
    setSelectedCategoryText(category);
    setSelectedCategoryTextWithSpace(UrlToTextWithSpace(category));
    setShowCategory(false);
    setEssentials(essentialsList[UrlToText(category)] || []);
  };

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleShowCategory = () => {
    setShowCategory(!showCategory);
  };

  const handleItemClick = (item) => {
    navigate(`/ssk/${category}/${item.id}`);
    setSelectedItem(item);
    setReadme(item.details.readme);
  };

  return (
    <PageParent title="Student Starter Kit">
      <div className="flex gap-4">
        <div className="hidden md:block">
          <Sidebar
            selectedCategory={selectedCategoryTextWithSpace}
            handleCategoryChange={handleCategoryChange}
          />
        </div>

        <div className="relative">
          <Divider orientation="vertical" className="hidden md:block" />
          <motion.button
            className={`absolute -left-4 top-0 rounded-lg bg-bgSecondary p-2 md:hidden`}
            onClick={handleShowCategory}
          >
            <ArrowRight2
              className={`${showCategory ? "rotate-180" : ""} transition-transform duration-300`}
            />
          </motion.button>
          <AnimatePresence>
            {showCategory && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-120%" }}
                transition={{ duration: 0.5, type: "tween" }}
                className="absolute left-6 top-0 z-50 rounded-lg bg-bgSecondary p-4 md:hidden"
                ref={ref}
              >
                <Sidebar
                  selectedCategory={selectedCategoryTextWithSpace}
                  handleCategoryChange={handleCategoryChange}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex-1">
          <div className="w-full rounded-md px-4">
            <Input
              type="search"
              placeholder="Search essentials..."
              value={searchQuery}
              onChange={(e) => handleSearchQuery(e)}
              iconBefore={<SearchNormal1 />}
            />
          </div>
          <div className="mt-4 grid flex-1 grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {/* <div className="mt-4 flex flex-wrap gap-4 p-4"> */}
            {essentials.map((item, index) => (
              <Card
                key={index}
                onClick={() => handleItemClick(item)}
                className="cursor-pointer p-2"
                variant="border"
              >
                {/* <div className="h-48 rounded-md bg-green-400"></div> */}
                <Image
                  src={item.imgURL}
                  alt={item.name}
                  className="h-48 w-full rounded-md object-cover"
                />
                <div className="p-1 pt-4">
                  <h3 className="pb-2 text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </Card>
            ))}
            {essentials.length === 0 && (
              <div className="text-center">
                <p className="text-lg">No essentials found.</p>
              </div>
            )}
            {showModal && (
              <ItemModal
                onClose={() => setShowModal(false)}
                item={selectedItem}
                readme={readme}
              />
            )}
          </div>
        </div>
      </div>
    </PageParent>
  );
};

export default SskCategory;
