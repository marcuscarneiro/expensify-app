import React from 'react';

const EditExpansePage = (props) => {
    console.log(props);
    return (
        <div>
            Editing expanse number {props.match.params.id}
        </div>
    );
};

export default EditExpansePage;