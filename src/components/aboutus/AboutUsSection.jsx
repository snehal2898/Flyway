import banner_plane from '../../assets/images/aboutus/banner_plane.jpg'
import list_1 from '../../assets/images/aboutus/list_1.png'
import list2 from '../../assets/images/aboutus/list2.png'
import list3 from '../../assets/images/aboutus/list3.png'
import list4 from '../../assets/images/aboutus/list4.png'
import './AboutUsSection.css'

const AboutUsSection = ()=>{

    return (
        <div className="container" style={{paddingTop:'200px'}}>
            <div className='container'>
                <h1 className="text-center" style={{color:'midnightblue'}}>Travel planning at your fingertips</h1>
                <div className='mb-5' style={{margin:'auto',textAlign:'center'}} >
                    <img src={banner_plane} width={1000} height={450} style={{paddingTop:'20px'}} />
                </div>
                <div>
                    <h2 style={{color:'midnightblue'}}>Why FLYWAY ?</h2>
                    <p className='para'>
                        We're on a mission to help people discover the real value of travel — to inspire, to give more reasons, 
                        to make it easy — for you to go. Our company was founded back in 2005, and since then, we've imagined and 
                        created some of the most well-loved products for travelers all around the world.
                    </p>
                    <p className='para'>
                        Today, FLYWAY is used by millions of people every month — people who travel for adventure, for work, for family 
                        and for many other reasons. That's why we work tirelessly to make your experience of planning & booking flights, 
                        as seamless as possible.
                    </p>
                    <p className='para'>
                        FLYWAY is more than just an app, a website or a company. FLYWAY is an idea and belief that everyone has an innate 
                        desire and yearning to travel — to experience, to live and to grow.
                    </p>
                    <p className='para'>
                        So ingrained is this idea of the human need to travel that we've woven this emotional and eternal question 
                        of “why we go?” into the name of our organisation — FLYWAY.
                    </p>
                </div>

                <div className='container row mt-4 mb-4'>
                    <div className='col-md-5 px-5'>
                        <h2 style={{color:'midnightblue'}}>Our Mission</h2>
                        <p className='para'>
                            We firmly believe that by helping people travel more, explore the world and experience diversity, 
                            we create a meaningful socio-economic impact.
                        </p>
                        <div className='rounded-3' style={{backgroundColor:'lightgray',padding:'50px'}}>
                            <p className='para'>"</p>
                            <p className='para'>
                                Travel is fatal to prejudice, bigotry, and narrow-mindedness, and many of our people need it 
                                sorely on these accounts. Broad, wholesome, charitable views of men and things cannot be acquired 
                                by vegetating in one little corner of the earth all one's lifetime.
                            </p>
                            <p className='para' style={{float:'inline-end'}}>
                                Mark Twain, 1869
                            </p>
                        </div>
                    </div>

                    <div className='col-md-7 ps-5'>
                        <h2 style={{color:'midnightblue'}}>FLYWAY's Core Values</h2>
                        <div className='mb-4 mt-4 row'>
                            <div className='col' style={{height:'80px'}} >
                                <img src={list_1} height={75} width={75} className='mb-4' />
                                <div className='row d-inline-block px-3  '>
                                    <div className='col'>
                                        <h5>Embrace diversity  </h5>
                                        <p >We are 30 nationalities (out of about 300 employees!)</p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div className='mb-4 row'>
                            <div className='col' style={{height:'80px'}}>
                                <img src={list2} height={75} width={75} className='mb-4'/>
                                <div className='row d-inline-block px-3'>
                                    <div className='col '>
                                        <h5>Love travel and technology</h5>
                                        <p>We pride ourselves on being both explorers and geeks</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-4 row'>
                            <div className='col' style={{height:'80px'}}>
                                <img src={list3} height={75} width={75} className='mb-4'/>
                                <div className='row d-inline-block px-3'>
                                    <div className='col'>
                                        <h5>Promote meritocracy </h5>
                                        <p>Advancement based on achievement and attitude not tenure or pedigree</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-4 row'>
                            <div className='col' style={{height:'80px'}}>
                                <img src={list4} height={75} width={75} className='mb-4'/>
                                <div className='row d-inline-block px-3'>
                                    <div className='col'>
                                        <h5>Use global benchmarks</h5>
                                        <p>We want to be the world's best at what we do, not just local champions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                    </div>

                </div>
               
            </div>
               
        </div>
    )

}
export default AboutUsSection;