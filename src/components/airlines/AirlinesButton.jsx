const AirlinesButton = ({airline})=>{

    return (
        <div>
            <div className="col-md-4">
                <button className="btn btn-primary rounded-3 p-2 m-3" style={{fontSize:'20px',fontWeight:'bold'}}> 
                    {airline.name}
                </button>
            </div>
        </div>
    )

}

export default AirlinesButton;