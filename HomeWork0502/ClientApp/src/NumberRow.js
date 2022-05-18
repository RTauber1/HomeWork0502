import React from 'react'




class NumberRow extends React.Component {
    
    

    render() {
        const { number, addToSelected, key, selectedAlready, removeFromSelect, locked} = this.props;
            return(
                <tr key={key}>
                    <td>{number}</td>
                    <td>
                        <div className='col-md-4'>
                            {!selectedAlready ? <button onClick={addToSelected} className='btn btn-info btn-block'>Add to select</button> :<button disabled={!!locked} onClick={removeFromSelect} className='btn btn-warning btn-block'>deselect</button>}
                        </div>
                    </td>
                </tr>
            )
        }
        
    
}

export default NumberRow