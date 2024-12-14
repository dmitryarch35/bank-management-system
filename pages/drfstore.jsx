import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import drfImg from "../public/projects/drf.webp";

const drfstore = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/50 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={drfImg}
          alt="drfImg"
          priority
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Django REST Store</h2>
          <h3>Django / DRF </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is my first try to use Django backend and next js front end
            with tailwinds. <br />
            Features: •Category, • Product Type, • Sub Category, • Product add,
            Multiple Image Upload, Product variation set, <br />
          </p>
          <a
            href="https://github.com/mushfiqur-rahman/django_nextJS_DRF"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 ">
          <div className="p-2 dark:text-slate-200">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 dark:text-slate-200 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Django
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                <RiRadioButtonFill className="pr-1" /> DRF
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                <RiRadioButtonFill className="pr-1" /> MPTT
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                <RiRadioButtonFill className="pr-1" /> SQLite3
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                <RiRadioButtonFill className="pr-1" /> Next js
              </p>
            </div>
          </div>
        </div>
        <Link href="/#project">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default drfstore;
