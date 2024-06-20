import { useState } from "react";
import { CloseCircle } from "iconsax-react";
import proptypes from "prop-types";

const AnnouncementCard = ({ title, children }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="rounded-lg bg-bgSecondary p-3">
      <div className="flex flex-col gap-1">
        <div className="flex flex-row-reverse items-center justify-between text-textPrimary">
          <button
            className="text-sm text-textTertiary"
            onClick={() => setIsVisible(false)}
          >
            <CloseCircle size={20} />
          </button>
          {title && (
            <h1 className="truncate text-base font-semibold">{title}</h1>
          )}
        </div>

        <div className="flex flex-col gap-4 text-textTertiary">{children}</div>
      </div>
    </div>
  );
};

AnnouncementCard.propTypes = {
  title: proptypes.string,
  children: proptypes.node,
};

export default AnnouncementCard;
