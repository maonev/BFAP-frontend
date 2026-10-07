import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logoImg from "@/assets/logo.svg";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { AnimatePresence, motion } from "motion/react";

type Props = {};

export const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";
  const classDropdown =
    "rounded-lg px-4 py-2 transition-colors text-base font-medium";
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const toggleMenu = () => setIsMobile(!isMobile);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1024px)");
  // top page?

  return (
    <nav>
      <div className={`${flexBetween} bg-white py-5 fixed top-0 z-20 w-full`}>
        <div className={`${flexBetween} mx-auto w-7/8`}>
          <div className={`${flexBetween} w-full gap-10`}>
            <a href="#">
              <img src={logoImg} alt="logo" className="size-10 lg:size-12" />
            </a>

            <div className="relative">
              {isAboveMediumScreen ? (
                <div className={`${flexBetween} gap-15`}>
                  <a href="#">Home</a>
                  <a href="#">Teams</a>
                  <button className="bg-primary-button text-xs py-2 px-6 rounded-md hover:scale-110 transition duration-200 ease-in-out">
                    Login
                  </button>
                </div>
              ) : (
                <button
                  className="bg-black p-2 rounded-md"
                  onClick={toggleMenu}>
                  <AnimatePresence mode="wait" initial={false}>
                    {isMobile ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}>
                        <XMarkIcon className="h-6 w-6 text-white" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="bars"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}>
                        <Bars3Icon className="h-6 w-6 text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              )}

              <AnimatePresence>
                {!isAboveMediumScreen && isMobile && (
                  <>
                    <motion.div
                      key="dropdown"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute right-0 top-12 w-48 rounded-lg bg-black p-3 shadow-2xl">
                      <div className="flex flex-col gap-1 text-white">
                        <a
                          href="#"
                          onClick={toggleMenu}
                          className={`${classDropdown} hover:bg-zinc-700`}>
                          Home
                        </a>
                        <a
                          href="#"
                          onClick={toggleMenu}
                          className={`${classDropdown} hover:bg-zinc-700`}>
                          Teams
                        </a>
                        <button
                          className={`${classDropdown} bg-primary-button text-xs py-2 px-6 rounded-md hover:bg-primary-button/70`}>
                          login
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
