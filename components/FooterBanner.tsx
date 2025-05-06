import Link from 'next/link'
import React from 'react'

const FooterBanner = () => {
  return (
    <div className="px-3 py-3 bg-secondary shadow-sm font-sans">
    <nav className="flex justify-between items-center">
        <Link href="/">
            <h3 className="font-bold text-primary">Lucy's Cauldron</h3>
        </Link>

        <div className="flex items-center gap-5">
            <h3 className="font-bold text-primary">Shop</h3>
            <h3 className="font-bold text-primary">Cart</h3>
            <h3 className="font-bold text-primary">About</h3>
            <h3 className="font-bold text-primary">Contact</h3>
        </div>
    </nav>

</div>
  )
}

export default FooterBanner