import { PiStorefrontLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <PiStorefrontLight />
                <h1>NFT Marketplace</h1>
            </div>

            <nav>
                <ul>
                    <li>Marketplace</li>
                    <li>Rankings</li>
                    <li>Connect a wallet</li>
                    <button>
                        <CgProfile />
                        Sign up
                    </button>
                </ul>
            </nav>
        </header>
    )
}

export default Header;