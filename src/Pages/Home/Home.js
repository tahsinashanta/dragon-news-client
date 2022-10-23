import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {

    const allNews = useLoaderData();

    return (
        <div>
            <h3>This is home with {allNews.length} news</h3>
            {
                allNews.map(news => <NewsSummaryCard 
                    key = {news._id} 
                    news = {news}>
                    </NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;