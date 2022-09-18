import React, { useEffect, useState } from 'react';
// import  {React, useEffect,ueState} from 'react';
import ReactDOM from 'react-dom';
import { BsYoutube,BsFacebook,BsInstagram, BsApple, BsFillFileEarmarkCodeFill, BsHeadphones } from 'react-icons/bs';
import { AiFillAndroid,AiOutlineCopyright, AiFillUnlock } from 'react-icons/ai';

import NavBar from 'common/NavBar';

import landing from 'images/Landing1.png'
import landing2 from 'images/landing2.png'
import landing3 from 'images/landing3.png'
import landing4 from 'images/landing4.png'
import landing5 from 'images/landing5.png'
import clients from 'images/clients.png'


import Footer from 'common/Footer';
import { Button, Typography } from '@mui/material'
import trustedBy1 from 'images/trustedBy-1.png'
import trustedBy2 from 'images/trustedBy-2.png'
import trustedBy3 from 'images/trustedBy-3.png'
import trustedBy4 from 'images/trustedBy-4.png'
import VectorCards from 'common/VectorCards';
import Section5Cards from 'common/Section5Cards';
import Section7Cards from 'common/Section7Cards';

import sectionFive1 from 'images/Popular1.png'
import sectionFive2 from 'images/Rectangle 7.png'
import sectionFive3 from 'images/Popular2.png'
import sectionFive4 from 'images/Popular3.png'

import sectionSeven1 from 'images/View Project 1.png'
import sectionSeven2 from 'images/View Project 2.png'
import sectionSeven3 from 'images/View Project 3.png'
import sectionSeven4 from 'images/View Project 4.png'

const Dashboard = (prop) => {
  let pictures = [landing, landing2, landing3, landing4, landing5]
  let picture = ''
  let colors = ['#000051', 'white', '#000051', '#000051', '#000051']
  let backgroundColors = ['white', '#370548', '#D1EBFF', '#BF41AB', '#D7C9C9']

  const [timer, setTimer] = useState(0)
  const [placeKeeper, setPlaceKeeper] = useState(0)

  const checkTi = () => {
    timer % 5 === 0 &&
      setPlaceKeeper(placeKeeper + 1)

  }

  useEffect(() => {
    checkTi()

  }, [timer])

  useEffect(() => {
    console.log(placeKeeper)
    if (placeKeeper > 4) {
      setPlaceKeeper(0)

    }
    else
      picture = pictures[placeKeeper]

  }, [placeKeeper])

  setInterval(() => {
    setTimer(Math.floor((new Date / 1000)))
  }, 1000

  )


  const fetchRequestLogs = async (querry) => {
    try {
      //   const payload = []

      //   const result = await RequestLogs();
      //   console.log(result)
      //   console.log(result.data.result.mdaCount)
      //   console.log(result.data.result.totalAmount)

      //   if (result?.data?.statusCode === "00") {
      // setRequestLogs(result.data.result.mdaDetails);
      // setMdaCount(result.data.result.mdaCount);
      // setTotalAmount(result.data.result.totalAmount);
      // let tot = result?.headers["x-pagination"];
      // let res = JSON.parse(tot);
      // setTotalElement(res?.TotalCount);
      // setCurrent(res?.CurrentPage);
      //   }
    } catch (ex) {
      //   console.log(ex.Response);
    }
  };

  return (
    <div className='w-full bg-white' >

      <div style={{ backgroundColor: backgroundColors[placeKeeper] }}>
        <NavBar history={prop.history} backgroundColor={colors[placeKeeper]} />
        {/* Section-One Dashboard */}
        <div className='general-padding ' style={{ backgroundColor: backgroundColors[placeKeeper], color: colors[placeKeeper] }}>
          <div className='section1 ' style={{ backgroundColor: backgroundColors[placeKeeper], color: colors[placeKeeper] }} >
            <div className='w-50 ' style={{ height: '500px' }}>
              <Typography variant='h3' style={{ color: colors[placeKeeper] }}>Hire the best Freelancer</Typography>
              <Typography variant='h3' style={{ color: colors[placeKeeper] }}>for your business</Typography>
              <div className='mt-10'>
                <Typography variant='h5'>
                  Everything can be that easy!
                </Typography>
                <Typography variant='h5'>
                  Join a community that works. Find great Talents
                </Typography>
              </div>
              <div className='w-50 text-white flex justify-between' style={{ marginTop: '110px' }}>

                <Button  color='tetiary' className='bold p-2 rounded-3xl w-28' >Find JOB</Button>
                <Button  color='tetiary' className='bold p-2 rounded-3xl w-28 border-purple-900'  style={{backgroundColor: 'transparent', borderColor: colors[placeKeeper], color: colors[placeKeeper] }}>Post JOB</Button>
              </div>
            </div>
            <div className={placeKeeper === 2 ? 'picture-place2' : 'picture-place'}>
              <img style={{ height: placeKeeper === 2 ? '520px' : "535px" }} src={pictures[placeKeeper]} />
            </div>
          </div>
        </div>
      </div>

    {/* Section-Two Dashboard */}
    <div className='general-padding bg-white align-center'>
            <div className='mt-40 mb-20'>
                <Typography variant='h3'>We are trusted by many companies like  yours</Typography>
                
                <div className='flex justify-center items-center'>
                    <div className='m-t-30  flex justify-between w-90' >
                        <img src = {trustedBy1}/>
                        <img src = {trustedBy2}/>
                        <img src = {trustedBy3}/>
                        <img src = {trustedBy4}/>
                    </div>
                </div>
            </div>
           
        </div>

    {/* Section-Three Dashboard */}

    <div className='general-padding left-align' style={{backgroundColor:"#FAFAFA", }} >
            <div class="m-t-40 m-b-20 flex-between ">
                <div className='left-align w-50 '>
                    <Typography variant='h3' style={{fontWeight:'bolder', fontSize:"43px"}}>Clients</Typography>
                        <Typography variant='h4' className='my-10'>Find Amazing Talents</Typography >
                        <Typography >Finding the best talent is that easy.</Typography>
                        <Typography >Work with the largest network of trustwoorthy </Typography>
                        <Typography >Typographyrofessionals and get things done.</Typography>
                
                    <div className='m-t-50 text-white'>
                    <Button  color='tetiary' className='bold py-3 rounded-3xl w-40'>Find Skill</Button>
                    </div>
                </div>
                <div className='w-50  flex m-b-50'>
                    <div className='div-background flex' style={{ alignSelf:'center', textAlign:'right', marginLeft:'auto',  }}><img style={{width:'400px'}} src = {clients}/></div>
                </div>
                        </div>
            </div>
    {/* Section-Four Dashboard */}
    <div className='bg-white' style={{paddingBottom:'100px', marginTop:"150px", backgroundColor:'#FAFAFA'}} >
            <div className='w-100 '>
                <Typography variant='h3' className='text-center py-10' >Why Choose Softwrk?</Typography>
                
                <div className='flex-align flex-center'>
                    <div className='flex-align w-80 flex-between m-t-50'>
                        <div class="m-r-20">
                            <VectorCards text = 'Proof of Quality'  image ={<BsFillFileEarmarkCodeFill style={{fontSize:"32px"}}/>}/>
                        </div>
                        <div class="m-r-20">
                            <VectorCards text = 'Protected Payment'  image ={<AiFillUnlock style={{fontSize:"32px"}}/>}/>
                        </div>
                        <div class="m-r-20">
                            <VectorCards text = 'Payment is released only when you certify work done'  image ={<AiFillUnlock style={{fontSize:"32px"}}/>}/>
                        </div>
                        <div class="m-r-20">
                            <VectorCards  text = '24/7 Customer Service' image ={<BsHeadphones style={{fontSize:"32px"}}/>}/>
                        </div>
                    
                    </div>
                </div>
            </div>
           
        </div>
    {/* Section-Five Dashboard */}
    <div className='m-t-50 m-b-50' >
            <div>
                <Typography variant='h3' className='text-center mt-10 mb-20'>Most Popular Services?</Typography>
                
                <div className='flex-between p-20'>
                    <Section5Cards type ='Web Design' images ={sectionFive1}/>
                    <Section5Cards type ='Mobile Development' images ={sectionFive2}/>
                    <Section5Cards type ='Accounting' images ={sectionFive3}/>
                    <Section5Cards type ='Data Entry' images ={sectionFive4}/>
                   
                    
                </div>
            </div>
           
      </div>
    {/* Section-Six Dashboard */}
    <div className='general-padding left-align' style={{backgroundColor:"#FAFAFA",  }} >
            <div class="m-t-40 m-b-20 flex-between items-center" style={{padding:'80px 0'}}>
                <div className='left-align w-50 '>
                    <Typography variant='h3'gutterBottom className='pb-8' >Freelancer</Typography>
                        <Typography variant='h5' gutterBottom className='pb-8'>Do what you love the most and earn while at it</Typography>
                        <Typography variant='h5' gutterBottom>
                        Experience the fulfilment that comes with 

                        </Typography>
                        <Typography variant='h5' gutterBottom>meeting needs while doing what you love.</Typography>
                
                    <div className='m-t-50 text-white'>
                    <Button color='tetiary' className='bold w-40 p-2'>
                             Find Job
                    </Button>
                    </div>
                </div>
                <div className='w-50  flex'>
                    <div className='div-background flex' style={{ alignSelf:'center', textAlign:'right', marginLeft:'auto',  }}><img style={{width:'400px'}} src = {clients}/></div>
                </div>
                        </div>
            </div>
    {/* Section-Seven Dashboard */}
    <div className='' style={{margin:'150px 0', backgroundColor:"#FAFAFA", padding:'40px 0px'}}>
            <div>
                <Typography variant='h3' className='text-center mb-20'>View projects made by our Freelancers</Typography>
                
                <div className='flex justify-between p-20'>
                    <Section7Cards images={sectionSeven1}/>
                    <Section7Cards images={sectionSeven2}/>
                    <Section7Cards images={sectionSeven3}/>
                    <Section7Cards images={sectionSeven4}/>
                    
                    
                </div>
            </div>
           
        </div>
      
      {/*<DashboardSection9/>*/}
    {/* Section-Footer Dashboard */}
      <Footer />

    </div>
  )
}
export default Dashboard;
