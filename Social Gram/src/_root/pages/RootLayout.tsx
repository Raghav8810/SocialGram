import Bottombar from "@/components/shared/Bottombar"
import LeftBar from "@/components/shared/LeftBar"
import Topbar from "@/components/shared/Topbar"
import { Outlet } from "react-router-dom" 


const RootLayout = () => {
  return (
    <div className="w-full md:flex">
        <Topbar/>
        <LeftBar/>


        <section className="flex flex-1 h-full">
             <Outlet />
         </section>

        <Bottombar/>
    </div>
  )
}

export default RootLayout
