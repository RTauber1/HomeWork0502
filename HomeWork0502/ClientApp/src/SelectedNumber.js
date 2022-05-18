import React from 'react'




class SelectedNumber extends React.Component {
    
    witchButton=()=>{
        
    }

    render() {
        const { number, removeFromLock, addToLock, lockedAlready} = this.props;
            return(
                <div>
                    {number}
                    <div className='col-md-4'>
                    {!lockedAlready ? <button onClick={addToLock} className='btn btn-success btn-block'>lock</button> :<button onClick={removeFromLock} className='btn btn-light btn-block'>unlock</button>}
                    </div>
                
                </div>
            )
                
            
            }   
        
    
}

export default SelectedNumber