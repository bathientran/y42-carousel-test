import React from 'react';
import {SectionHeader} from './sectionComponents/sectionComponents'

// This is a component
const InteractiveSection = (props) => {
    return (
        <div>
            <SectionHeader text={props.text}/>
            {props.title}
        </div>
    )
}

export default InteractiveSection
