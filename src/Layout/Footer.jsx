const Footer = () => {
  return (
    <footer className="bg-black/90  py-10">
      <div className="max-w-[1750px] mt-2 sm:mt-24    overflow-hidden mx-auto grid grid-cols-1  xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 p-3 sm:p-0 xs:gap-12 md:gap-24">
        <div className="text-white p-2">
          <h3 className="text-[21px] leading-7 font-bold tex-[#fff] mb-4">
            3legant.
          </h3>
          <p className="flex text-sm sm:w-[300px] items-center text-left">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet.
          </p>
          <p className="flex text-sm sm:w-[300px] mt-4 items-center text-left">
            198 West 21th Street, Suite 721, New York NY 10010 Email:
            suprema@qodeinteractive.com Phone: +88 (0) 101 0000 000 Fax: +88 (0)
            202 0000 001
          </p>
        </div>
        <div className="text-white">
          <h3 className="text-[21px] leading-7 font-bold tex-[#fff] mb-4">
            Latest Post
          </h3>
          <ul className="flex text-left flex-col whitespace-nowrap gap-2">
            <li className="text-[#fff] flex flex-col  cursor-pointer">
              <a
                href="#"
                className=" text-base hover:text-[#0cc3ce] transition-all"
              >
                Where Music Is Headed Next
              </a>
              <span className="text-xs text-[#0cc3ce]">February 12,2016</span>
            </li>
            <li className="text-[#fff] flex flex-col   cursor-pointer">
              <a
                href="#"
                className=" text-base hover:text-[#0cc3ce] transition-all"
              >
                Sports Brand New Advertising Campaign
              </a>
              <span className="text-xs text-[#0cc3ce]">February 12,2016</span>
            </li>
            <li className="text-[#fff] flex flex-col   cursor-pointer">
              <a
                href="#"
                className=" text-base hover:text-[#0cc3ce] transition-all"
              >
                Snippets From The Tech Mobile Conference
              </a>
              <span className="text-xs text-[#0cc3ce]">February 12,2016</span>
            </li>
            <li className="text-[#fff] flex flex-col   cursor-pointer">
              <a
                href="#"
                className=" text-base hover:text-[#0cc3ce] transition-all"
              >
                New Music Video Will Blow Your Mind
              </a>
              <span className="text-xs text-[#0cc3ce]">February 12,2016</span>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <h3 className="text-[21px] leading-7 font-bold text-[#fff] mb-4">
            Legal
          </h3>
          <ul className="flex text-left flex-col whitespace-nowrap gap-2">
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                User Agreement
              </a>
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                Cookie and Privacy Policies
              </a>
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <a href="#" className="hover:underline">
                Personal Data Protection Law (KVKK) Information Text
              </a>
            </li>
          </ul>
        </div>
        <div className="text-white p-2">
          <h3 className="text-[21px] leading-7 font-bold tex-[#fff] mb-4 w-[300px]">
          Download the App
                    </h3>
          <ul className="flex text-left flex-col whitespace-nowrap gap-2">
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <img
                src="https://terappin.com/images/market-icons/app_store_download.webp"
                alt=""
              />
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <img
                src="https://terappin.com/images/market-icons/google_play_download.webp"
                alt=""
              />
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <img
                src="https://terappin.com/images/market-icons/huawei_app_gallery_download.webp"
                alt=""
              />
            </li>
          </ul>
        </div>
        <div className="text-white ">
          <h2 to={"/"} className="sm:text-2xl text-xl font-bold md:text-4xl">
            3legant.
          </h2>
          <ul className="flex text-left  mt-3  sm:mt-10 whitespace-nowrap gap-3">
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <img
                src="https://terappin.com/new-site/images/icons/social/instagram.svg"
                alt=""
              />
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <img
                src="https://terappin.com/new-site/images/icons/social/twitter.svg"
                alt=""
              />
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <img
                src="https://terappin.com/new-site/images/icons/social/facebook.svg"
                alt=""
              />
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <img
                src="https://terappin.com/new-site/images/icons/social/linkedin.svg"
                alt=""
              />
            </li>
            <li className="text-[#fff] hover:underline text-[14px] cursor-pointer">
              <img
                src="https://terappin.com/new-site/images/icons/social/youtube.svg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center max-w-[1650px] mx-auto justify-end">
        <div className=" mt-4  sm:mt-20">
          <img src="https://terappin.com/new-site/images/bitmap.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
