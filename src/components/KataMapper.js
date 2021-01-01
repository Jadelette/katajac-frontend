import React from 'react';
import ReactDOM from 'react-dom';
import KataClick from './KataClick';
import katas from './data/kata-click.json'


function KataMapper() {
    return (
        <> 
            {
                katas.kataList.map((kata) => {
                    return <KataClick 
                        key={kata.key} 
                        title={kata.title} 
                        description={kata.description}
                        path={kata.path} 
                        />
            })
            }
        </>
    )
}

export default KataMapper;