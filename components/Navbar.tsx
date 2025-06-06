import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
    return (
        <div className="px-6 py-3 bg-secondary shadow-sm font-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <h3 className="font-bold text-primary">Lucie&apos;s Cauldron</h3>
                </Link>

                <div className="flex items-center gap-6">
                    <h3 className="font-bold text-primary">About</h3>
                    <h3 className="font-bold text-primary">Contact</h3>

                    <button type="button" className="cart-icon">
                        <AiOutlineShoppingCart />
                        <span className="cart-item-qty">3</span>
                    </button>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;