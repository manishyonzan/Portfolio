import Link from "next/link"

function Nav() {
  const style = {
    maxWidth:"1250px"
  }
  return (
    <>
      <div className="" style={{ "backgroundColor": "#0F0D53", "borderRadius": "4px", }}>
        <div className="flex justify-between items-center p-2 h-15 mx-auto my-3" style={style}>
          <div className="basis-1/4">
            <h1 className="text-3xl text-white font-semibold" >Portfolio</h1>
          </div>
          <div className="flex  mx-3 ">
            <a className="text-white font-bold btn2 " href="#gothere">Service</a>

          </div>
        </div>
      </div>
    </>

  )
}

export default Nav