import Image from "next/image"
import Formsend from "./formsend"
import Link from "next/link"


function Skills() {

    return (
        <>
            <div style={{ "height": "150px", "backgroundColor": "#5853B9", "overflow": "hidden" }} >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ "height": "100%", "width": "100%" }}>
                    <path d="M0.00,49.98 C150.00,150.00 349.20,-49.98 500.00,49.98 L502.54,-3.45 L-3.67,-3.45 Z" style={{ "stroke": "none", "fill": "#0F0D53" }}></path>
                </svg>
            </div>
            <div className="projectMain" id="projectMain">
                <h1 className="text-3xl b projectMainHead text-white my-10">Projects</h1>
                <div className="skilldiv" >
                    <div className="frameworks">
                        <Image style={{ "borderRadius": "50%" }} src="./html.jpeg" alt="mickey mouse" width={40} height={80} />


                    </div>
                    <div >
                        <Image src="./css3.svg" alt="mickey mouse" width={40} height={80} />
                    </div>

                    <div className="frameworks">
                        <Image style={{ "borderRadius": "50%" }} src="./js.jpeg" alt="mickey mouse" width={40} height={80} />
                    </div>
                    <div className="frameworks">

                        <Image style={{ "borderRadius": "50%" }} src="./logo192.png" alt="mickey mouse" width={40} height={80} />
                    </div>

                    <div className="frameworks">
                        <Image style={{ "borderRadius": "50%" }} src="./express.jpeg" alt="mickey mouse" width={40} height={80} />
                    </div>


                    <div className="frameworks">
                        <Image style={{ "borderRadius": "50%" }} src="./mongo.jpeg" alt="mickey mouse" width={40} height={80} />
                    </div>
                    <div className="frameworks" >
                        <Image src="./flask.png" alt="mickey mouse" width={40} height={80} />
                    </div>
                    <div>
                        <Image style={{ "borderRadius": "10%" }} src="./next1.jpeg" alt="mickey mouse" width={80} height={160} />
                    </div>

                </div>
                <p className="projectMainHead text-white my-5">These Projects are built using HTML,CSS,Javascript, React JS,Express js, (Database)Mongodb,Flask and Express js</p>

                <div className="projectpartition">
                    <Link href="https://manishyonzan.github.io/htmlcss1/" legacyBehavior>
                        <a target="_blank" className="projectpartitiondiv">
                            
                            <p className="font-bold text-2xl">Udemy Course</p>
                            <p>Learned from Udemy</p>
                            <p>HTML, CSS and JS</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{ "height": "80px", "width": "80px" }}><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" style={{ "stroke": "none", "fill": "white" }} /></svg>
                        </a>
                    </Link>
                    <Link href="https://manishyonzan.github.io/project" legacyBehavior >
                        <a target="_blank" className="projectpartitiondiv"  >
                            
                           <div style={{"display":"flex", "flexDirection":"row"}}>
                            <p className="font-bold text-3xl">MERN</p><p> stack.</p>
                            </div>
                            <p > &nbsp;&nbsp;School Management System (live website)</p>
                            <p>                                &nbsp;&nbsp;Name:admin &nbsp;password:123456</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ "height": "80px", "width": "80px" }}><path d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z" style={{ "stroke": "none", "fill": "white" }} /></svg>
                        </a>
                    </Link>
                    <Link href="https://github.com/manishyonzan/flaskapi1" className="projectpartitiondiv" legacyBehavior>
                        <a target="_blank" className="projectpartitiondiv" >
                            <p >Github repo of The </p>
                            <p className="font-bold text-2xl">Flask Api</p>
                            <p>Some Machine Learning Algorithm.</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" style={{ "height": "80px", "width": "80px" }}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" style={{ "stroke": "none", "fill": "white" }} /></svg>
                        </a>
                    </Link>


                </div>
            </div>
            <div style={{ "height": "150px", "backgroundColor": "#0F0D53", "overflow": "hidden" }} >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ "height": "100%", "width": "100%" }}>
                    <path d="M0.00,49.98 C150.00,150.00 349.20,-49.98 500.00,49.98 L502.54,-3.45 L-3.67,-3.45 Z" style={{ "stroke": "none", "fill": "#5853B9" }}></path>
                </svg>
            </div>
            <Formsend />
        </>
    )
}

export default Skills