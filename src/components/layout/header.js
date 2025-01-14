import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Logo from "@/components/Logo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBook } from '@fortawesome/sharp-solid-svg-icons';

const Header = ({ className }) => {
  return (
    <header className={`text-white bg-fate-600 ${className}`}>
      <div className="flex flex-row justify-between items-center max-w-7xl mx-auto">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>

        <Sheet>
          <SheetTrigger><FontAwesomeIcon icon={faBars} className="text-2xl" /></SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>The Official Fate SRD</SheetTitle>
              <SheetDescription>
                <ul>
                  <li>
                    <Link href="/"><FontAwesomeIcon
                  icon={faBook}
                  className="nav-primary__link-icon"
                />Rules</Link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        
      </div>
    </header>
  );
};

export default Header;