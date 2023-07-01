import React, { useEffect } from "react";
import { motion } from "framer-motion";

function Account() {
  // Dummy user data for demonstration purposes
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    orders: [
      { id: 1, product: "Product 1", price: 29.99 },
      { id: 2, product: "Product 2", price: 39.99 },
      { id: 3, product: "Product 3", price: 19.99 },
    ],
    birth: "7-0-2005",
    region: "Jharkhand , Ranchi",
    language: "Hindi",
  };

  useEffect(() => {
    let heads = document.querySelectorAll(".info--box h2");
    heads.forEach((links) => links.classList.remove("active"));

    heads.forEach((link) =>
      link.addEventListener("click", () => {
        if (link.classList.contains("active")) {
          link.classList.remove("active");
        } else {
          link.classList.add("active");
        }
      })
    );
  }, []);

  return (
    <>
    <motion.div
      initial={{ y: "100px" }}
      animate={{y : "0px"}}
      final={{ y: "0px",
        transition: {
          type: "spring",
          mass: 0.4,
        },
      }}
      exit={{ y: "100px" }}
      transition={{ duration: 1 }}
    >
      <section className="container p-2 relative block w-screen h-max min-h-screen mt-20">
        <div className="p-1">
          <div className="flex w-full justify-between p-1 items-center mb-2">
            <h1>Sneakeet Account</h1>
            <button className="rounded-2xl p-1 px-2 text-white font-medium bg-cyan-500 shadow-xl shadow-cyan-300/50">
              Sign Out
            </button>
          </div>
          <hr />
        </div>
        <div className="flex gap-2 w-full h-full relative">
          <div className="md:static top-0 left-0 flex-auto w-1/3">
            <div className="w-full flex flex-col p-2 items-center mt-3 border-b-2 border-gray-300">
              <img
                src={require("../assets/shop/images.jpeg")}
                className=" object-cover w-32 h-32 rounded-full"
              ></img>
              <div className="user--box text-center mt-6 mb-2">
                <h2 className="text-xl font-medium">{user.name}</h2>
                <p className="text-gray-400">{user.email}</p>
              </div>
            </div>
            <div className="info--box flex flex-col items-start mt-6 gap-3">
              <h2 className="active text-xl font-medium text-gray-400 cursor-pointer">
                Personal Information
              </h2>
              <h2 className="text-xl font-medium text-gray-400 corsor-pointer">
                Billing & Payment
              </h2>
              <h2 className="text-xl font-medium text-gray-400 cursor-pointer">
                Order History
              </h2>
            </div>
          </div>
          <div className="flex-auto w-full h-full ">
            <div className="m-3">
              <div className="w-full h-fit p-2 border-b-2" id="Personal_info">
                <h2 className="text-xl font-medium">Personal Information</h2>
                <p className="mt-2">
                  Manage Your Personal Infoormation including Phone Number and
                  Gmail Address.
                </p>
                <div className="grid--info mt-2 p-2  grid w-full gap-4">
                  <motion.div initial={{ opacity : 0 , scale : 0.4}} animate = {{ opacity : 1, scale : 1}}
                    transition={{ duration : 2}}
                   className=" bg-slate-50 shadow-2xl h-20 rounded-lg flex items-center justify-between">
                    <div className="m-1 pl-4">
                      <h2 className="text-xl font-medium">Name</h2>
                      <p>{user.name}</p>
                    </div>
                    <div className="p-8">
                      <i
                        className="fa-solid fa-user"
                        style={{ color: "#fe0644" }}
                      ></i>
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity : 0 , scale : 0.4}} animate = {{ opacity : 1, scale : 1}}
                    transition={{ duration : 2}}
                  className=" bg-slate-50 shadow-2xl h-20 rounded-lg flex items-center justify-between">
                    <div className="m-1 pl-4">
                      <h2 className="text-xl font-medium">Date of Birth</h2>
                      <p>{user.birth}</p>
                    </div>
                    <div className="p-8">
                      <i
                        className="fa-solid fa-cake-candles"
                        style={{ color: "#fe0644" }}
                      ></i>
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity : 0 , scale : 0.4}} animate = {{ opacity : 1, scale : 1}}
                    transition={{ duration : 2}}
                   className=" bg-slate-50 shadow-2xl h-20 rounded-lg flex items-center justify-between">
                    <div className="m-1 pl-4">
                      <h2 className="text-xl font-medium">Country Region</h2>
                      <p>{user.region}</p>
                    </div>
                    <div className="p-6">
                      <i
                        className="fa-solid fa-globe"
                        style={{ color: "#fe0644" }}
                      ></i>
                    </div>
                  </motion.div>
                  <motion.div  initial={{ opacity : 0 , scale : 0.4}} animate = {{ opacity : 1, scale : 1}}
                    transition={{ duration : 2}}
                   className=" bg-slate-50 shadow-2xl h-20 rounded-lg flex items-center justify-between">
                    <div className="m-1 pl-4">
                      <h2 className="text-xl font-medium">Language</h2>
                      <p>{user.language}</p>
                    </div>
                    <div className="p-5">
                      <i
                        className="fa-solid fa-language"
                        style={{ color: "#fe0644" }}
                      ></i>
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity : 0 , scale : 0.4}} animate = {{ opacity : 1, scale : 1}}
                    transition={{ duration : 2}}
                  className=" bg-slate-50 shadow-2xl h-20 rounded-lg flex items-center justify-between">
                    <div className="m-1 pl-4">
                      <h2 className="text-xl font-medium">Contact</h2>
                      <p>{user.email}</p>
                    </div>
                    <div className="p-3">
                      <i
                        class="fa-solid fa-address-book"
                        style={{ color: "#fe062b" }}
                      ></i>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
    <motion.div 
    className='fixed top-0 left-0 w-full h-screen bg-slate-950 origin-bottom grid place-items-center' initial={{ scaleY : 0}}
    animate={{scaleY : 0 }} final={{ scaleY : 1 }}
    transition={{ duration : 1.5, ease : [0.22,1, 0.36,1]}}>
        <h1 className="font-2xl text-gray-500 font-medium">SNEAKEET</h1>
      </motion.div>
    <motion.div 
    className='fixed top-0 left-0 w-screen h-screen bg-slate-950 origin-top grid place-items-center'
     initial={{ scaleY : 1}}
    animate={{scaleY : 0 }} final={{ scaleY : 0 }}
    transition={{ duration : 1.5, ease : [0.22,1, 0.36,1]}}>
       <motion.h1 initial={{opacity : 1}} animate={{opacity:0}} className=" text-9xl text-gray-300 font-medium">SNEAKEET</motion.h1>
      </motion.div>
    </>
  );
}

export default Account;
