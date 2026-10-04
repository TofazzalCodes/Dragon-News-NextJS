import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        "id": "1",
        "title": " Breakthrough in Fusion Energy Reaches Commercial Milestone"
    },
    {
        "id": "2",
        "title": " Global Ocean Cleanup Initiative Removes 10 Million Tons of Plastic"
    },
    {
        "id": "3",
        "title": "Tech Stocks Rally Following Breakthrough AI Hardware Announcements"
    },
    {
        "id": "4",
        "title": "NASA Unveils Detailed Geological Maps of Mars Southern Hemisphere"
    }
]

const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 container rounded-xl p-4 mx-auto'>
            <button className='btn bg-pink-600 text-white rounded-2xl'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                {
                    news.map((n) => (
                        <span key={n.id} className="mx-4">
                             <span className="mr-2 font-bold ">Breaking News :</span>
                            {n.title}
                        </span>
                    ))
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;