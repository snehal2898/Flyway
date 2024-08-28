import error_404 from '../assets/images/pagenotfound/error_404.png'

const PageNotFound = ()=>{

    return (
        <div className='container text-center' style={{paddingTop:'250px'}}>

            <img src={error_404} alt="Error" style={{width:'18rem',height:'18rem'}} />

            <h2 style={{color:'red'}} >Sorry! requested page is not found...</h2>



        </div>
    )
    
    


}

export default PageNotFound;