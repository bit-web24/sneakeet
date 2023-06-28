import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Cart() {
  const [Basket, setBasket] = useState([]);

  useEffect(() => {
    setBasket(...Basket, [
      {
        key: "09988888#ggddghvc",
        img: "../assets/images/product-13.jpeg",
        Quantity: 1,
        name: "loafy",
        brand: "adidas",
        price: 278,
        Discount : 10,
      },
      {
        key: "09988888#ggddghvc",
        img: "../assets/images/product-13.jpeg",
        Quantity: 1,
        name: "loafy",
        brand: "adidas",
        price: 278,
        Discount : 10,
      },
    ]);
  }, []);

  const childVariants = {
    initial: {
      y: "50px",
    },
    final: {
      y: "0px",
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  return (
    <>
    <motion.div
      initial={{ y : '100vh', scale : 0.4 }}
      animate ={{ y : '0vh',scale :1}}
      final={{ y: "0vh",
        transition: {
          type: "spring",
          mass: 0.4,
        },
      }}
      exit={{ y: "100px" }}
      transition={{ duration: 0.6 }}
    >
      {Basket.length === 0 ? (
        <div className="w-full h-screen grid place-items-center">
          <div className="p-2">
            <img src={"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"}
            className="w-3/4 md:ml-10"></img>
          </div>
        </div>
      ) : (
        <div className="container min-h-screen">
          {Basket.map((x) => {
            return (
              <motion.div variants={childVariants} initial="initial" animate="final"
                key={x.key}
                className="w-full p-4 m-4  h-fit flex gap-4 flex-wrap justify-between items-center shadow-2xl shadow-neutral-300"
              >
                <div className="flex gap-2">
                  <div className="h-20">
                    <img
                      src={`${x.img}`}
                      alt="image"
                      className="width-full h-full"
                    ></img>
                  </div>
                  <div className="ml-3 flex flex-col gap-1">
                    <h2 className="text-xl font-medium capitalize">{x.name}</h2>
                    <p className=" text-lg capitalize">Brand : {x.brand}</p>
                    <p className="text-sm p-1 text-center bg-gray-200 shadow-xl text-green-700">Discount : {x.Discount}%</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p className="pr-2 border-r-2 border-gray-500 mt-2">
                    Quantity : {x.Quantity}
                  </p>
                  <button className="p-2 px-4 text-white tracking-wider bg-sky-700 shadow-xl shadow-blue-300">
                    BUY
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
      </motion.div>
    </>
  );
}

export default Cart;
