function Btn(bag){

const {jeep,touch,i}=bag;

    return(
        <button onClick={()=>{touch(i)}} ><img src={jeep} alt="wel"></img></button>
    )
}


export default Btn;