import { Skeleton } from '@nextui-org/react'

const ProjectDetailsSkeleton = () => {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row mt-4">
                <div className="md:w-1/2 p-4">
                    <Skeleton className='w-2/3 h-6 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                    <div className="flex flex-col gap-4 mt-6">
                        <Skeleton className='w-1/2 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-5/6 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-7/12 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-full h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-5/12 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                    </div>
                    <div className="flex flex-col gap-4 mt-10">
                        <Skeleton className='w-5/12 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-11/12 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-1/5 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-3/5 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-4/6 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                    </div>
                    <div className="flex flex-col gap-4 mt-10">
                        <Skeleton className='w-3/6 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-7/12 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-9/12 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-2/5 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-4/6 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                    </div>

                </div>
                <div className="md:w-1/2 p-4">
                    <Skeleton className='w-2/4 h-6 rounded-lg mb-2 bg-bgSecondary dark:bg-bgSecondary' />
                    <div className="flex flex-wrap items-center mt-4 gap-2 text-sm mb-4">
                        <Skeleton className='w-20 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-20 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-20 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-20 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-20 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                    </div>
                    <div className="flex flex-col gap-2 mt-6-6 text-sm mb-4">
                        <Skeleton className='w-3/4 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-5/6 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-7/12 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-full h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                    </div>

                    <div className='mt-6'>
                        <Skeleton className='w-2/5 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                    </div>

                    <div className='flex flex-wrap gap-2 mt-6'>
                        <Skeleton className='w-28 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-24 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-28 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-16 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-20 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-24 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-16 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-20 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='w-24 h-4 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                    </div>
                    <div className='my-8 flex justify-center items-center'>
                        <Skeleton className='w-40 h-10 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                    </div>

                    <div className='mt-6 grid grid-cols-3 gap-2 '>
                        <Skeleton className='h-40 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='h-40 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                        <Skeleton className='h-40 rounded-lg bg-bgSecondary dark:bg-bgSecondary' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDetailsSkeleton