import React, { useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa';


const Button = ({icon,alignIcon,width,textSize,textColor, height,backgroundColor,children }) => {
    const [currentState, setState] = useState({icon:icon.default,state:'able'});
    const [stateStyle, setButtonStyle] = useState({
        width:`${width}`,
        height:`${height}`,
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        fontSize:`${textSize}`,
        backgroundColor:`${backgroundColor.default}` ,
        color: `${textColor.default}`,
        border:'1px solid #ccc',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s',
      });

    const eventTrigger=(event)=>
    {
    
       let state=event.type
       if(state==='mouseenter')
       {
            if(currentState.state!=='disable')
            {
                setButtonStyle({...stateStyle,
                    backgroundColor: backgroundColor.MouseEnter,
                    color:textColor.MouseEnter
                });
            }
        }
        if(state==='mousedown')
        {  
            if(currentState.state!=='disable')
            {
             setButtonStyle({...stateStyle,
                 backgroundColor: backgroundColor.MouseDown,
                 color:textColor.MouseDown
             });
            
            }
        }
        if(state==='dblclick')
        {
            console.log('correct')
            if (currentState.state === 'disable') {
                setState({...currentState, state: 'able',icon:icon.default});
                setButtonStyle({...stateStyle,
                    backgroundColor: backgroundColor.default,
                    color:textColor.default
                });
            }
        }
        if(state==='mouseup')
        {
            
           if (currentState.state === 'able') {
                setState({...currentState, state: 'disable'});
                setButtonStyle({...stateStyle,
                    backgroundColor: backgroundColor.MouseUp
                    ,color:textColor.MouseUp
                });
                
            }
    
        }
        if(state==='mouseleave')
        {
            if(currentState.state!=='disable')
            {
                setButtonStyle({...stateStyle,
                    backgroundColor: backgroundColor.MouseLeave
                    ,color:'#666'
                });
            }
        }    
        if(state==='blur' && currentState.state==='disable')
        {

            setState({...currentState,icon:icon.loading})     
        } 
       
    }   
  return (
    <button
        onMouseEnter={eventTrigger}
        onMouseDown={eventTrigger}
        onMouseUp={eventTrigger}
        onMouseLeave={eventTrigger}
       
        onDoubleClick={eventTrigger}
        onBlur={eventTrigger}
    
        style={stateStyle}
        className="btn"
    >
        {alignIcon === 'left' ? (
            <>
                {currentState.icon}
                {children}
            </>
        ) : (
            <>
                {children}
                {currentState.icon}
            </>
        )}
    </button>
    
  );
};

export default Button;