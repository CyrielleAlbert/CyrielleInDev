import React, { Component } from 'react';
import linkedinPage from './LinkedinPage.png'
import projects from './projects.jpg'
import writings from './writings.jpg'
import IG from './Logo/IG.png'
import github from './Logo/Github.png'
import twitter from './Logo/Twitter_Logo_Blue.png'
import LinkedinLogo from './Logo/LI-In-Bug.png'
class MainScreen extends Component{
  render() {
    return(
    <div style={{backgroundColor:"#FFFDFA",}}>
    <div  style={{
            color:"#FFFDFA", 
            fontFamily:"Times new Roman",
            color:"#004C52",
            fontSize:80,
            textAlign:"center"}}>
      Cyrielle Albert
      <div style={{
        fontFamily:"Montserrat",
        fontSize:30,
        color:"#000000"}}>
          Software Engineer | Music passionate | DIY enthousiast
          </div>
    </div>
    <div style={{fontSize: 20,fontFamily: 'Montserrat', paddingLeft:'5%',paddingTop:100}}>
    <p style={{fontSize:40}}>Hi, there! 🖖</p>
    <p style={{fontSize:30}}> Welcome to my personnal website.<br></br>
If you want to check my projects, you are at the right place.<br></br><br></br>

I also recently started to write about my journey as a software engineer freelance, give it a look & let me know what you think of it.<br></br><br></br>

If you want to grab a coffee, meet for the lunch, have a video call, or anything else, just send me a message, I’d be happy to meet you. :)</p></div>
    <div style={{
          backgroundColor:"#FFFDFA",
          flexDirection:"row",
          display:'flex',
          paddingTop:50,
          paddingBottom: 50

    }}>
    <div style={{borderRadius:12.5,
                    width:'40%',
                    height:'auto',
                    marginLeft:'5%',
                    marginRight:'5%',
                    backgroundColor:"white",
                    boxShadow: " 3px 3px 3px #C4C2C0",
                }} >
      <a href="https://www.linkedin.com/in/cyriellealbert/">
      <img  src={linkedinPage}
            style={{borderRadius:12.5,
                    width:'100%',
                    position:'relative'}}/> </a>
      
    </div>
     
     <div style={{
            borderRadius:12.5,
            width:'40%',
            height:"auto",
            marginRight:'5%',
            marginLeft:'5%',
            boxShadow: " 3px 3px 3px #C4C2C0"

      }}
     >
       <img  src={projects}
            style={{borderRadius:12.5,
                    width:'100%'}}/>
     </div>

    </div>
    {/* <div style={{
            borderRadius:12.5,
            width:'90%',
            height:"auto",
            marginRight:'5%',
            marginLeft:'5%',
            boxShadow: " 0px 3px 25% #C4C2C0"

      }}>
        <img  src={writings}
            style={{borderRadius:12.5,
                    width:'100%'}}/>
      </div> */}
    <div style={{ paddingTop:50,
                  fontFamily:'Montserrat',
                  fontSize:40,
                  textAlign:'center'}}>
      Contact Information:<br></br><br></br>
      <div style={{fontSize:30}}>Email: mail@cyriellealbert.fr <br></br><br></br>
      Phone number: +33635121409</div>

    </div>
    <div style={{
          backgroundColor:"#FFFDFA",
          flexDirection:"row",
          display:'flex',
          paddingTop:100,
          paddingBottom: 50
      }}>
      <div style={{ width:'45%',
                    flexDirection:'column',
                    display:"flex",
                    fontFamily:'Times new Roman',
                    fontSize:60,
                    textAlign:'center',
                    paddingLeft:'5%'
                  }}> 
        <div style={{height:100}}>Follow me:</div>
        <div style={{ flexDirection:'row',
                      display:"flex",
                    }}> 
          <div style={{width: '20%',paddingLeft:'10%',paddingRight:'10%'}}>
            <a href="https://www.instagram.com/al_rielle/">
            <img src={IG} style={{width:'100%'}}/></a>
            </div>
            <div style={{width: '20%'}}>
            <a href="https://twitter.com/Cyri_official">
            <img src={twitter} style={{width:'100%'}}/></a>
            </div>
            <div style={{width: '20%', paddingLeft:'10%',paddingRight:'10%'}}>
            <a href="https://github.com/CyrielleAlbert">
            <img src={github} style={{width:'100%'}}/></a>
            </div>
        </div>
        </div>
      <div style={{ width:'45%',
                    flexDirection:'column',
                    display:"flex",
                    fontFamily:'Times new Roman' ,
                    fontSize:60,
                    textAlign:'center'
                  }}>
        <div style={{height:100}}>Add me:</div>
        <div style={{ flexDirection:'row',
                      display:"flex",
                    }}> 
            <div style={{width: '20%',paddingLeft:'40%',paddingRight:'40%'}}>
            <a href="https://www.linkedin.com/in/cyriellealbert/">
            <img src={LinkedinLogo} style={{width:'100%'}}/></a>
            </div>
            
        </div>
                    
      </div>
      <div style={{ width:'0%',
                    flexDirection:'column',
                    display:"flex",
                    fontFamily:'Times new Roman',
                    fontSize:40,
                    textAlign:'center'
                  }}>
                    
      </div>
    </div>

    </div>
    
  );
  }
}

export default MainScreen;
