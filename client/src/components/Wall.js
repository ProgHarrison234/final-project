import React, { useEffect, useState} from 'react';
import CreateWall from "./CreateWall";
import PostWall from "./PostWall";
import SearchTopic from "./SearchTopic";
import API from '../utils/API';

const Wall = () => {
    return (
        <div className="container">
            <br/>
            <div className="columns">
                <div className="search column is-10">
                    <SearchTopic />
                </div>
                <div className="column">
                    <CreateWall handleFormSubmit={handleFormSubmit}/>
                </div>
            </div>
            <div className = "columns">
                <div className = "column is-12">
                    <PostWall />
                </div>
            </div>
        </div>
    )
}

export default Wall;