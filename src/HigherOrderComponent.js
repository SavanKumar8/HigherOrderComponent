import React from 'react';
const higerOrderComponent = changeComponent =>{
    class newComponent extends React.Component{
        constructor(props){
            super(props);
                this.state ={
                    count:0
                } 
        }
        hoverHere = () =>{
            this.setState((previouSatae)=>{
             return   {count:previouSatae.count+1}; 
            })
        }
        clickButton = () => {
                this.setState((previouState) =>{
                   return  {count:previouState.count+1};
                })
            }
        render(){
            return <changeComponent 
            count = {this.state.count} 
            hoverHere = {this.hoverHere}
            clickButton = {this.clickButton} />
        }
    }
    return newComponent;

}
export default higerOrderComponent;