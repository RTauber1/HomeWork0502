import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import NumberRow from './NumberRow';
import SelectedNumber from './SelectedNumber';

class MainPage extends React.Component {

   
   state={
        randomNumber: {
            id: uuidv4(),
            number: Math.floor(Math.random() * 350)
        },
        numbers: [],
        selectedNumbers: [],
        locked: []
   } 

   onButtonClick=()=>{
       const {randomNumber, numbers} = this.state
       this.setState ({randomNumber: {
           id: uuidv4(),
           number: Math.floor(Math.random() * 350)
       }})
       const copy = [...numbers, randomNumber]
        this.setState({numbers: copy})
        // console.log({randomNumber})
        // console.log({numbers})
    };

    addToSelected=(randomNumber)=>{
        const {selectedNumbers} = this.state
        const {id, number} = randomNumber
        const theRandomNumber = ({
            number
        })
        const copy = [...selectedNumbers, theRandomNumber]
        this.setState({selectedNumbers: copy})
    }

    removeFromSelect=(number)=>{
        const {selectedNumbers} = this.state
        const newSelectedNumbers = selectedNumbers.filter(s => s.number !== number)
        console.log({newSelectedNumbers})
        this.setState({selectedNumbers: newSelectedNumbers})
    }

    addToLock=(randomNumber)=>{
        const {locked} = this.state
        const {id, number} = randomNumber
        const theRandomNumber = ({
            number
        })
        const copy = [...locked, theRandomNumber]
        this.setState({locked: copy})
    }

    removeFromLock=(number)=>{
        const {locked} = this.state
        const newLocked = locked.filter(n => n.number !== number)
        this.setState({locked: newLocked})
    }
    aNumberIsSelected=()=>{
        const {selectedNumbers, locked}= this.state
        if(selectedNumbers!==[]){
            {selectedNumbers.map((randomNumber, i) => {
                let { id, number } = randomNumber;
                let { lockedNumbers } = this.state;
                console.log({locked})
                return <SelectedNumber
                    key={i}
                    number={number}
                    addToLock={() => this.addToLock(randomNumber)}
                    lockedAlready={locked.map(n => n.number).includes(number)}
                    removeFromLock= {() => this.removeFromLock(number)}/>
                    
             }
            )}
        }
    }


    render() {
         const {numbers, selectedNumbers, locked}=this.state
         return <div>
                <div className='col-md-2'>
                    <button onClick={this.onButtonClick} className='btn btn-primary btn-block'>Add</button>
                </div>
                <table className='table table-hover table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Random Number</th>
                            <th>Add/Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                    {numbers.map((randomNumber, i) => {
                                let { id, number } = randomNumber;
                                let { lockedNumbers } = this.state;
                                return <NumberRow
                                    key={i}
                                    number={number}
                                    addToSelected={() => this.addToSelected(randomNumber)}
                                    selectedAlready={selectedNumbers.map(s => s.number).includes(number)}
                                    removeFromSelect= {() => this.removeFromSelect(number)}
                                    locked={locked.map(n => n.number).includes(number)}
                                    /*locked={lockedNumbers.includes(id)}
                                    isAdd={!selectedNumbers.map(s => s.id).includes(id)} 
                                    onRemoveClick={() => this.onRemoveFromSelectedClick(obj)}*/
                                />
                            }
                            )}
                        
                    </tbody>
                </table>
                <div class="row jumbotron">
                    <div class="col-md-6 col-md-offset-3">
                        {selectedNumbers.length !==0 ? <h3>Selected Numbers </h3> :''}
                            <ul class="list-group">
                            
                            {selectedNumbers.map((randomNumber, i) => {
                                let { id, number } = randomNumber;
                                let { lockedNumbers } = this.state;
                                console.log({locked})
                                return <SelectedNumber
                                    key={i}
                                    number={number}
                                    addToLock={() => this.addToLock(randomNumber)}
                                    lockedAlready={locked.map(n => n.number).includes(number)}
                                    removeFromLock= {() => this.removeFromLock(number)}/>
                                    
                             }
                            )}
                    
                            </ul>
                        </div>
                    </div>
                </div>
    }
}

export default MainPage;



