import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="pb-3 text-white bg-black pt-14 full-bleed">
      <div className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          <div className="flex flex-col gap-3 shrink-0">
            <div className="text-sm font-medium uppercase cursor-pointer font-oswald">
              Find a store
            </div>
            <div className="text-sm font-medium uppercase cursor-pointer font-oswald">
              become a partner
            </div>
            <div className="text-sm font-medium uppercase cursor-pointer font-oswald">
              sign up for email
            </div>
            <div className="text-sm font-medium uppercase cursor-pointer font-oswald">
              send us feedback
            </div>
            <div className="text-sm font-medium uppercase cursor-pointer font-oswald">
              student discount
            </div>
          </div>

          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
            <div className="flex flex-col gap-3">
              <div className="text-sm font-medium uppercase font-oswald">get help</div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Order Status
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Delivery
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Returns
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Payment Options
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Contact Us
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-sm font-medium uppercase font-oswald">About nike</div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">News</div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Careers
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Investors
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Sustainability
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 md:justify-start">
          <Link
            href="https://facebook.in"
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaFacebookF size={20} />
          </Link>
          <Link
            href="https://twitter.com"
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaTwitter size={20} />
          </Link>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
            <FaYoutube size={20} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
            <FaInstagram size={20} />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
          © 2023 Nike, Inc. All Rights Reserved
        </div>

        <div className="flex flex-wrap justify-center gap-2 text-center md:gap-5 md:text-left">
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">Guides</div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Sale
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Use
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Privacy Policy
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
