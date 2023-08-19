import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="w-full bottom-0 bg-cyan-400">
        <div className="mx-auto max-w-[1560px] px-6 py-6">
          <div className="border py-4">
            <h1 className="font-bold text-lg">ComradesQuare</h1>
          </div>
          <hr />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center my-6">
            <div className='text-start'>
              <p className='font-semibold'>
                Empowering student entrepreneurs, ComradeSquare is your
                destination for student-made goods and services. Explore, shop,
                and connect with the innovative spirit of your fellow students
                today!
              </p>
            </div>
            <div>Shopping & Categories</div>
            <div>Useful Links</div>
            <div>Help & Information</div>
          </div>
          <hr />
          <div className="mt-4 text-center ">
            <p>
              &copy;{" "}
              <Link to="/" className="font-bold tracking-wider">
                ComradesQuare
              </Link>
              . All Rights Reserved. Designed by{" "}
              <Link className="font-semibold tracking-wide">
                ApexMinds Software Agency
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer
