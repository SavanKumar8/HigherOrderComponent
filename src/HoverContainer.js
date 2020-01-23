import React from 'react';
class HoverCounter extends React.Component{
constructor(){
    super();
        this.state ={
            count:0
        } 
}
hoverHere = () =>{
    this.setState((previouSatae)=>{
     return   {count:previouSatae.count+1}; 
    })
}

render(){
    const {count,hoverHere} = this.props;
    return(
        <div>
            <h1 onMouseOver= {hoverHere}>Hover Here{count}</h1>
        </div>
    )
}
}

export default HoverCounter;