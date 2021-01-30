import React from 'react';
import KataClick from './KataClick';


function KataMapper(props) {
    return (
        <> 
            {
                props.data.kataList.map((kata) => {
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