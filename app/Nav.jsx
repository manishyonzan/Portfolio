import Link from "next/link"

function Nav() {
  return (
    <>
      <div className="flex justify-between p-2 h-15 mx-5 my-6" style={{"backgroundColor":"#0F0D53","borderRadius":"4px"}}>
      
        <div className="basis-1/4">
          <h1 className="text-4xl text-white font-semibold " >Portfolio</h1>
        </div>
        <div className="flex  mx-4">
          <a className="text-white font-bold btn2" href="#gothere">Service</a>

        </div>
      </div>
    </>

  )
}

export default Nav