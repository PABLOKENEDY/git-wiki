import React from 'react';


import { InputContainer } from "./style";


const Input = ({value, onChange}) => {
    return(
    
        <InputContainer>
          <input value={value} onChange={onChange} />
        </InputContainer>
        
    
    )
}

export  default Input