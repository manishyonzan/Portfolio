
import Script from "next/script"
import Image from "next/image"


function Service() {

    const spinFunc=()=>{    
        setTimeout(window.pausefunction, 2600);

    }
    const spinFunc2=()=>{    
        setTimeout(window.pausefunction2, 2600);

    }
    return (
        <>

            <Script src="./rotate.js" />

            <div style={{ "height": "150px", "backgroundColor": "#0F0D53", "overflow": "hidden" }} >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ "height": "100%", "width": "100%" }}>
                    <path d="M0.00,49.98 C150.00,150.00 349.20,-49.98 500.00,49.98 L502.54,-3.45 L-3.67,-3.45 Z" style={{ "stroke": "none", "fill": "#5853B9" }}></path>
                </svg>
            </div>

            <div className="service-container" id="gothere">
                
                <div className="service-main">
                    <div className="dotbg">
                        <svg className="svgc" height="450" width="450">
                            <polygon id="svvg" className="svgtrack svground" points="220,100 350 ,180 300,340 120,340 80,180" rx="50" ry="20" style={{ "fill": "skyblue" }} strokeWidth="5" />
                            Sorry, your browser does not support inline SVG.
                        </svg>
                        <div className="topic">
                            <div className="topic-box">
                                <div className="topic-head">
                                    WEB
                                </div>
                                <div className="topic-head">Mobile</div>
                            </div>

                        </div>
                    </div>
                    <div className="dota">
                        <Image className="firstimg1 dot1" src="./burger.PNG" width={500} height={500} alt='A delicious burger'  />
                        {/* <Image className="firstimg1 dot1" src='/burger.PNG' width={500} height={500} alt='A delicious burger' layout='responsive' quality={90} /> */}
                        <Image className="firstimg2 dot2" src="./ball4.PNG"  width={500} height={500} />

                    </div>
                    <div className="dotb">
                        <Image className="secondimg1 dot3" src="./ball2.PNG"  width={500} height={500} />
                        <Image className="secondimg2 dot4" src="./ball4.PNG"  width={500} height={500} />

                    </div>
                    <div className="dotc">
                        <Image className="thirdimg1 dot5" src="./mobile.PNG"  width={500} height={500}/>
                        <Image className="thirdimg2 dot6" src="./laptop.PNG"  width={500} height={500} />

                    </div>





                    <div className="topic-description">
                        <div className="topic-description-content">
                            <div className="topic-description-div topic-description-mobile">
                                <h2>WEB</h2>
                                <h4><b>Develop</b> Web application,Desktop Application. Simple Websites for your Business.Mobile Friendly websites </h4>
                                <li style={{ "listStyle": "none", "fontWeight": "bold", "margin": "10px" }}>
                                    Responsive Design
                                    <svg className="laptop-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{ "fill": "orangered" }}>
                                        <path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
                                    </svg>
                                </li>
                                <li style={{ "listStyle": "none", "fontWeight": "bold", "margin": "10px" }}>
                                    Mobile Friendly
                                    <svg className="mobile-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{ "fill": "blue" }}>
                                        < path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                                    </svg>
                                </li>
                            </div>
                            <div className="topic-description-div topic-description-web">
                                <h2>Mobile App</h2>
                                <h4><b>Develop</b> MObile Application for Android and IOS with React Native.Simple Apps for your Business.Processor Friendly Application. </h4>
                                <li style={{ "listStyle": "none", "fontWeight": "bold", "margin": "10px" }}>
                                    Responsive Design
                                    <svg className="laptop-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{ "fill": "orangered" }}>
                                        < path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
                                    </svg>
                                </li>
                                <li style={{ "listStyle": "none", "fontWeight": "bold", "margin": "10px" }}> Mobile Friendly<svg className="mobile-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{ "fill": "blue" }}>< path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg></li >
                            </div >
                        </div >
                    </div >






                    <div className="topic-description-div-head"><h1>Services</h1></div>

                    {/* <button className="buttondiv2" onClick="setTimeout(pausefunction2, 2600)">WEB</button>
            <button className="buttondiv" onClick="setTimeout(pausefunction, 2600)">Mobile</button> */}
                    <button className="buttondiv2" onClick={spinFunc2}>WEB</button>
                    <button className="buttondiv" onClick={spinFunc}>Mobile</button>
                </div >
            </div >
            
        </>
    )
}

export default Service