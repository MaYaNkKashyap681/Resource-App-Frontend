import React from 'react';
import { Img } from 'react-image';

const ResourceCard = ({ title, resource, username, description, resourceType, category, grade, createdAt, gridSpan }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
        return `${day}-${month}-${year}`;
    };

    const renderResourceContent = () => {
        switch (resourceType) {
            case 'pdf':
                return (
                    <embed src={resource} type="application/pdf" className="w-full h-auto mb-4" />
                );
            case 'link':
                return (
                    <a href={resource} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mb-4">{resource}</a>
                );
            case 'text':
                return (
                    <pre className="text-gray-800 mb-4">{resource}</pre>
                );
            case 'image':
                return (
                    <Img
                        src={resource}
                        alt="Thumbnail"
                        loader={<div>Loading...</div>}
                        unloader={<div>No thumbnail available</div>}
                        className="w-full h-auto mb-4"
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className={`bg-white shadow-lg rounded-lg p-6 col-span-${gridSpan} card`}>
            {renderResourceContent()}
            <h2 className="text-3xl font-bold mb-2 font-dark font-poppins">{title}</h2>
            <p className="text-gray-600 text-sm">{formatDate(createdAt)}</p>
            {/* <p className="text-gray-600 mb-2">Uploaded by: {username}</p> */}
            <p className="text-gray-800 mb-2 text-lg font-poppins">{description}</p>
            <div className='flex items-center flex-wrap gap-1'>
                <p className=" mb-2 bg-green2 rounded-4xl py-1 px-8 text-md text-white font-semibold inline-block">{resourceType}</p>
                <p className="mb-2 bg-brownish rounded-4xl text-white py-1 px-8 text-md font-semibold inline-block">{category}</p>
                <p className=" mb-2 bg-green1 rounded-4xl py-1 px-8 text-md text-white font-semibold inline-block">{grade}</p>
            </div>
            <div className='h-full mt-4'>
                <a href={resource} download className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 hover:bg-blue-600 mb-2 mt-4 ">
                    Get
                </a>
            </div>
        </div>
    );
};

const ResourceLists = ({ resourceList }) => {
    // Function to generate a random grid span for each card
    const generateGridSpan = () => {
        const spans = [1, 2, 3];
        const randomIndex = Math.floor(Math.random() * spans.length);
        return spans[randomIndex];
    };

    return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3 mt-20">
            {resourceList?.length === 0 ? (
                <div>No Content to Show...</div>
            ) : (
                resourceList?.map((resource, index) => (
                    <ResourceCard
                        key={index}
                        {...resource}
                        gridSpan={generateGridSpan()}
                    />
                ))
            )}
        </div>
    );
};

export default ResourceLists;
