"use client";
import Square from "@/app/components/Background/Square";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { container, item } from "@/lib/animate";
import { motion } from "framer-motion";
import Project from "./components/Project";

export default function Projects() {


  return (
    <>
      <div className="relative z-10 h-full">
        <Square
          column="10"
          row="10"
          transparentEffectDirection="bottomToTop"
          blockColor="#161616"
        />

        <Header />
        <motion.div
          initial={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          className="container mx-auto w-11/12 sm:w-9/12 my-16 pb-4 pt-12">
          <div>
            <h2 className="text-5xl font-semibold">My Projects</h2>
            <p className="text-[#a7a7a7] sm:w-3/5 mt-1"></p>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-12">
            <motion.div variants={item}>
              <Project
                imgUrl="https://cdn.wondexz.com/image/tunasite.png"
                name="ttunaes"
                githubLink="https://github.com/ttunaxz"
                websiteLink="https://www.youtube.com/channel/UCuDl8FzC_YWYngg55Nxf3vA"
                description="Funny videos"
                tags={["Fun"]}
              />
            </motion.div>


          </motion.div>
        </motion.div>
        <Footer />
      </div>
    </>
  );
}
