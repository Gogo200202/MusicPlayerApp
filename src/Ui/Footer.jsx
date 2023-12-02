import { Outlet, Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="fixed  bottom-0 w-full max-w-screen-xl mx-auto p-4 md:py-8  bg-white rounded-lg shadow dark:bg-gray-900">
     
        <div className=" sm:flex sm:items-center sm:justify-between">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            My music site
          </span>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
            
              <Link to="/about" className="hover:underline me-4 md:me-6">
                  About Us
                </Link>
              
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 All Rights Reserved.
        </span>
    </footer>
  );
}

export default Footer;
