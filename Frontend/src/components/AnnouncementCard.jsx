import { useState } from "react";
import { CloseCircle } from "iconsax-react";
import proptypes from "prop-types";

const AnnouncementCard = ({ title, children }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="p-3 rounded-lg bg-bgSecondary">
      <div className="flex flex-col gap-1">
        <div className="flex flex-row-reverse justify-between items-center text-textPrimary">
          <button
            className="text-sm text-textTertiary"
            onClick={() => setIsVisible(false)}
          >
            <CloseCircle size={20} />
          </button>
          {title && (
            <h1 className="text-base font-semibold truncate">{title}</h1>
          )}
        </div>

        <div className="flex flex-col gap-4 text-textTertiary">{children}</div>
      </div>
    </div>
  );
}

AnnouncementCard.propTypes = {
  title: proptypes.string,
  children: proptypes.node,
};

export default AnnouncementCard;