import React from 'react';

const BackToSearch = ( {history} ) => {

    return (
        <div>
            <button className="backButton"
                onClick={history.goBack}>
                &lt; back to search results &lt;
            </button>
        </div>
    )
}

export default BackToSearch;