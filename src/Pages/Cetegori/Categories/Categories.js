import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Sheare/NewsSummaryCard/NewsSummaryCard';

const Categories = () => {
    const categoryNews = useLoaderData()
    return (
        <div>
            <h3>This category has {categoryNews.length} data</h3>
            {
                categoryNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Categories;