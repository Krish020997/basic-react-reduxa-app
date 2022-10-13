import React from 'react';
import { useState } from 'react';
import {connect} from 'react-redux';
import {Addname} from './Action';
import { Delname } from './Action';

const Card = ({products,Addname,Delname}) => {
    const [item,setItem] = useState("");
    const submitHandler = async e =>{
        e.preventDefault();
        if(item !== ""){
            await Addname({name:item});
            setItem("");
        }
        setItem("");
    }
    return (
        <center>
            <div class="card" style={{"width": "18rem"}}>
                <div class="card-body">
                    <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Add Person" value={item} onChange={e => setItem(e.target.value)}/> <br /><br/>
                        <button type="submit" class="btn btn-success">
                        Add Person 
                        </button> 
                    </form>
                    <br />
                    {products.map(product => {
                        return(
                            <div className="item"  >{product.name} 
                            <span onClick={()=> Delname(product.name)} class="badge square-pill bg-danger" style={{"float": "right","padding":"6px 10px 6px 10px"}}>
                            X</span></div>
                        )
                    })}
                </div>
            </div>
        </center>
    )
}

const mapStateToProps = (state) =>({
    products: state
})

export default connect(mapStateToProps,{Addname,Delname})(Card);