import React from 'react';
import { Surface } from 'gl-react-expo';
import  Valencia  from '../FilterName/Valencia';
import  Brannan  from '../FilterName/Brannan';
import  GLImage  from "./GLImage"


const Filter = ({ uri, aspectRatio, filterName, onDraw }) => {


    return (
        <Surface style={{ width: 100, height: 100 }}>
            {filterName === 'brannan' ? (
                <Brannan>
                    <GLImage {...{ source: { uri }, aspectRatio, onDraw }} />
                </Brannan>
            ) : filterName === 'valencia' ? (
                <Valencia>
                    <GLImage {...{ source: { uri }, aspectRatio, onDraw }} />
                </Valencia>
            ) : (
                <GLImage {...{ source: { uri }, aspectRatio, onDraw }} />
            )}
        </Surface>
    );
}

export default Filter;


