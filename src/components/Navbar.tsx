import MaxWidthWarpper from "./MaxWidthWrapper";
import Link from 'next/link';
import { buttonVariants } from "./ui/button";
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from '@kinde-oss/kinde-auth-nextjs/server'
const Navbar = () => {
  return (
    <nav className= "sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <MaxWidthWarpper>
            <div className="flex h-14 items-center justify-between
            border-b border-zinc-200">
                <Link href={'/'} className="flex z-40 font-bold">
                <span>ChatPDF</span></Link>

                {/* todo: add mobile navbar */}
                <div className="hidden items-center space-x-4 sm:flex">
                    <>
                      <Link  href={'/pricing'}className={buttonVariants({
                        variant:"ghost",
                        size:'lg'
                      })}>Pricing
                      </Link> 
                    
                      <LoginLink 
                      className = {buttonVariants({
                        variant:'ghost',
                        size:"sm",
                      })}> Sign in</LoginLink>
                      <RegisterLink className={buttonVariants({
                      size:'sm'})}>Get Started</RegisterLink> 
                    </>
                </div> 
            </div>
        </MaxWidthWarpper>
    </nav>
  )
}


export default Navbar;