import React,{useState} from 'react'

function First() {

    const[fill,setFill]=useState({
        name:'',
        dep:'',
        rating:''

    })
    const[data,setData]=useState([]);
    const change=(e)=>{
        setFill({...fill,[e.target.name]:e.target.value})

    }
    const move=(e)=>{
        e.preventDefault();
        console.log(fill);
        const newdata={...fill,id:new Date().getTime().toString()};

        setData([...data,newdata]);



    }
    return (
        <div>
            <h1>EMPLOYEE FEED BACK FORM</h1>
                <form action=''>
                <label className='first'> Name</label>
                <input  className='second' onChange={change} type='text' id='name' name='name' value={fill.value}/>                      
                <br></br>
                <label className='third'> Department</label>
                <input className='four' onChange={change} type='text' id='dep' name='dep' value={fill.value}/> <br></br>
                <label className='five'>Rating</label>
                <input className='six' onChange={change} type='number' id='rating' name='rating' value={fill.value} />
                 <br></br> <br></br>
                </form>
                 <button onClick={move} className='submit' >Submit</button> <br></br>

                 <div className='divv'>
                     {
                        data.map((value)=> {
                            const {name,dep,rating,id}=value;
                            return(
                                <div className='magic' key={id}>
                                    <p>Name:{name}  |  Department:{dep}  | Ratings:{rating}</p>
                                </div>
                            )
                        } )
                     }





                 </div>
               

            
        </div>
    )

}

export default First;