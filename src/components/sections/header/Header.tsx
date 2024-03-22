import Discord from "@/components/imageComponents/discord";
import Logomark from "@/components/imageComponents/logoMark";
import Twitter from "@/components/imageComponents/twitter";
import Link from "next/link";
import Logo from "../../imageComponents/logo";
import css from "./header.module.css";

export default function Header() {
  return (
    <div className={css.container}>
      <header className={css.header}>
        {/* <div> */}
          <Link href="/">
            <Logo className={css.logo} />
          </Link>
          <div>
            <button type="button" className={css.burgerButton}>
              MENU
            </button>
            <ul className={css.SocialList}>
              <li>
                <Link
                  href="https://discord.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={css.sociaListItem}
                >
                  <Discord className={css.socialListIcon} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.softryzen.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={css.sociaListItem}
                >
                  <Logomark className={css.socialListIcon} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={css.sociaListItem}
                >
                  <Twitter className={css.socialListIcon} />
                </Link>
              </li>
            </ul>
          </div> 
        {/* </div> */}
      </header>
    </div>
  );
}
