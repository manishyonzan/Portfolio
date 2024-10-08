import Image from "next/image"

function Intro() {
  return (
    <section className="introSection">
      <div className="introSectionDiv">
        <div className="text-white">

          <p className="mobile-text">Hello, My Name is</p>
          <h1 className="text-3xl mobile-text">Manish lama</h1>
          <p>I am a student currently at st.lawrence college(BSC CSIT).This is a
            portfolio website,where i show my projects built during college practical and
            extra time
          </p>
          <p><b>Skills:</b></p>
          <p>Basic Understanding of these Languages,library and Frameworks</p>
            <p>Html, CSS, Javascript,React js,Express js , Mongodb, Flask, Next js.</p>
          
          
          <br/>
          <p>Nice Meeting you,Hit the Connect below to hire me  </p>
          <div className="introduction_para_bottom">
            <a className="btn1" href="#formapi">Lets connect</a>
            <a className="btn2" href="#projectMain">See Portfolio</a>
          </div>

        </div>

      </div>
      <div className="introSectionDiv introSectionDivImage">
        <Image title="cool kid" src="./kid_zoro.png" alt="kid zoro" width={300} height={300} />
      </div>
    </section>
  )
}

export default Intro