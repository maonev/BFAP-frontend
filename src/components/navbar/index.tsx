import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logoImg from "@/assets/logo.svg";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";
import { Paths } from "@/routes/paths";

type Props = {};

export const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";
  const classDropdown =
    "rounded-lg px-4 py-2 transition-colors text-base font-medium";
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1024px)");
  // top page?

  return (
    <nav>
      <div className={`${flexBetween} bg-white py-5 top-0 fixed z-20 w-full`}>
        <div className={`${flexBetween} mx-auto w-7/8`}>
          <div className={`${flexBetween} w-full gap-10`}>
            <Link to={Paths.HOME}>
              <img src={logoImg} alt="logo" className="size-10 lg:size-12" />
            </Link>

            <div className="relative">
              {isAboveMediumScreen ? (
                <div className={`${flexBetween} gap-15`}>
                  <Link to={Paths.HOME}>Home</Link>
                  <Link to={Paths.TEAMS}>Teams</Link>
                  <Link
                    to={Paths.LOGIN}
                    className="button-link bg-primary-button text-xs py-2 px-6 rounded-md hover:scale-110 transition duration-200 ease-in-out">
                    Login
                  </Link>
                </div>
              ) : (
                <button
                  className="bg-black p-2 rounded-md"
                  onClick={toggleMenu}>
                  <AnimatePresence mode="wait" initial={false}>
                    {isMenuOpen ? (
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
                {!isAboveMediumScreen && isMenuOpen && (
                  <>
                    <motion.div
                      key="dropdown"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute right-0 top-12 w-48 rounded-lg bg-black p-3 shadow-2xl">
                      <div className="flex flex-col gap-1 text-white">
                        <Link
                          to={Paths.HOME}
                          onClick={toggleMenu}
                          className={`${classDropdown} hover:bg-zinc-700`}>
                          Home
                        </Link>
                        <Link
                          to={Paths.TEAMS}
                          onClick={toggleMenu}
                          className={`${classDropdown} hover:bg-zinc-700`}>
                          Teams
                        </Link>
                        <Link
                          to={Paths.LOGIN}
                          onClick={toggleMenu}
                          className={`${classDropdown} button-link bg-primary-button hover:bg-primary-button/70`}>
                          login
                        </Link>
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
