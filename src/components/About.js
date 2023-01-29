import React from 'react';
 
 
function About(props)
{
    // const togalStyle =()=>{
    //     if(mystyle.color === 'white')
    //     {
    //         setMystyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             borderColor: 'black'
    //         })
    //         setBtntext('Enable dark mode')
    //     }
    //     else
    //     {
    //         setMystyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             borderColor: 'white'
    //         })
    //         setBtntext('Disable dark mode')
    //     }
    // }
    // const [mystyle, setMystyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     borderColor: 'black',
    //  })
    //  const [btntext, setBtntext] = useState('Enable dark mode')
    return( 
    <>
    
    <div className="container my-2" style={{color: (props.mode==="dark" ? 'white':'')}}>
            <h1>About TextUtils</h1>
    </div>
    <div className="container">
    <table >
        <tr>
           <td> <div className="card" Style="width: 18rem;"style={{backgroundColor: (props.mode ==='success' ? '#198754':props.mode==='dark' ? '#212529de':'white'),color: props.mode ==='dark' ? 'white':'black',borderColor: props.mode === 'dark' ?'#212529de':''}}>
                <img src="./kr.jpeg" className="card-img-top" alt="Developer" />
                <div className="card-body">
                    <h5 className="card-title">Krish Patel</h5>
                    <h6>CEO</h6>
                    <p className="card-text">Developer of the TextUtils web-app. Provides all the services related to the web.</p>
                </div>
            </div></td>
            <td> <div className="card mx-2" Style="width: 18rem;" style={{backgroundColor: (props.mode ==='success' ? '#198754':props.mode==='dark' ? '#212529de':'white'),color: props.mode ==='dark' ? 'white':'black',borderColor: props.mode === 'dark' ?'#212529de':''}}>
                <img src="./ad.png" className="card-img-top" alt="Developer" />
                <div className="card-body">
                    <h5 className="card-title">Aditya Khachar</h5>
                    <h6>President</h6>
                    <p className="card-text">He make TextUtils very popular among people through his marketing skills.</p>
                </div>
            </div></td>
        </tr>
     </table>
    </div>
    
    </>
    )
}



export default About;