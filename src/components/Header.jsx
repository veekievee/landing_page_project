import Link from "next/link"


function Header() {
  return (
    <div className="container mx-auto flex justify-between items-center w-full px-2">
        <div>
            <h2 className="text-2xl font-bold text-amber-500">Logo</h2>
        </div>
        <div>
            <ul className="flex gap-4 items-center" >
                <li className="py-2 border-b-2 border-transparent hover:border-black">
                  <Link href={"#"} >Home</Link>
                </li>
                <li className="py-2 border-b-2 border-transparent hover:border-black">
                  <Link href={"#"}> About</Link>
                </li>
                <li className="py-2 border-b-2 border-transparent hover:border-black">
                  <Link href={"#"}>Services</Link>
                </li>
                <li className="py-2 border-b-2 border-transparent hover:border-black">
                  <Link href={"#"}> Blog</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header