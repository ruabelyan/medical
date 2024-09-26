import Link from "next/link"
import { useRouter } from "next/router"

export default function Menu() {

    return (
        <>
            <ul className="navigation clearfix">
                <li ><Link href="/">Գլխավոր</Link>
                </li>
                <li><Link href="/about-us">Մեր մասին</Link></li>
                <li ><Link href="/service">Ծառայություններ</Link>
                </li>
                <li ><Link href="/team">Աշխատակազմ</Link>
                </li>
                <li><Link href="/contact">Կապ</Link></li>
            </ul>

        </>
    )
}
