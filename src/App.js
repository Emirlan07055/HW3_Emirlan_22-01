import React, { useState } from 'react';

function Button(props) {
    const [text, setText] = useState(props.initialText);

    function handleClick() {
        setText(props.updatedText);
    }

    return (
        <button onClick={handleClick}>
            {text}
        </button>
    );
}

function Click() {
    return (
        <div>
            <Button initialText="Я тут нажми!" updatedText="Ооо ты нажал спасибо!" />
            <Button initialText="Ну кликай кликай!" updatedText="Урааааааа, ты кликнул!" />
        </div>
    );
}
export default Click