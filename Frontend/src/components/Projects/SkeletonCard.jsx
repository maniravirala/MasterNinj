// Summary: This file contains the skeleton card component which is used to show the skeleton of the card while the data is being fetched.

import { Skeleton } from '@nextui-org/react';

const SkeletonCard = () => {
    return (
        <div className="flex gap-2 flex-col sm:flex-row justify-evenly p-3 w-full">
            <Skeleton className="flex-shrink-0 w-full sm:w-24 h-24 rounded-lg bg-bgSecondary dark:bg-bgSecondary" />
            <div className="flex-grow flex flex-col gap-2 justify-evenly w-full">
                <Skeleton className="h-3 w-1/4 rounded-lg bg-bgSecondary dark:bg-bgSecondary"/>
                <Skeleton className="h-3 w-full rounded-lg bg-bgSecondary dark:bg-bgSecondary"/>
                <Skeleton className="h-3 w-4/5 rounded-lg bg-bgSecondary dark:bg-bgSecondary"/>
            </div>
        </div>
    );
}


export default SkeletonCard;