import { useScroll, motion} from "motion/react"
import { useRef } from "react"
import { LiIcon } from "./LiIcon"

const Details = ({type, time, center, info}) => {

    const ref = useRef(null)
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}} className="text-left w-full">
                <h3 className="capitalize font-bold text-2xl">{type}</h3>
                <span className="capitalize font-medium opacity-60">
                    {time} | {center}
                </span>
                <p className="font-medium w-full">
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

export const EducationSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

  return (
    <section id="experience" className="py-24 px-4 relative">
        <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Education</span>
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative">

    <motion.div 
        style={{ scaleY: scrollYProgress }}
        className="absolute left-9 top-0 w-[4px] h-full bg-primary origin-top" 
    />
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details 
                        type={"Bachelor's Degree in Techniques for Software Application Development"}
                        time={"2023 - 2026"}
                        center={"Universitat Oberta de Catalunya (UOC)"}
                        info={""}
                    />
                    <Details 
                        type={"Bachelor's Degree of Mechanical Engineering"}
                        time={"2019 - 2023"}
                        center={"Universitat Politècnica de Catalunya (UPC)"}
                        info={"Awarded 1st Prize for the Best Final Degree Project (TFG) in Industrial Engineering at UPC Manresa."}
                    />
                    <Details 
                        type={"First Certificate in English"}
                        time={"2019"}
                        center={"Cambridge English"}
                        info={""}
                    />
                    <Details 
                        type={"Curso de Iniciación a Tècnico de Deportes (CIATE)"}
                        time={"2019"}
                        center={"Club BMX Terrassa"}
                        info={""}
                    />
                </ul>
            </div>
        </div>
       
    </section>
  )
}