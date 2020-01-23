import React from 'react';
import higerOrderComponent from './HigherOrderComponent'
class ClickComponent extends React.Component{
    // constructor(){
    //     super()
    //     this.state = {
    //         count:0
    //     }
        
    // }
    // clickButton = () => {
    //     this.setState((previouState) =>{
    //        return  {count:previouState.count+1};
    //     })
    // }

    render(){
        const { count ,clickButton} = this.props;
        return(
            
            <button onClick= {clickButton}>Click Me {count}</button>

        )

           
        
    }
}
export default higerOrderComponent(ClickComponent);