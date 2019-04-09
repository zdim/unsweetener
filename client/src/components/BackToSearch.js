import React from 'react';

const BackToSearch = ( {history} ) => {

    return (
        <div>
            <button className="backButton"
                onClick={history.goBack}>
                Back to Search Results
            </button>
        </div>
    )
}

export default BackToSearch;