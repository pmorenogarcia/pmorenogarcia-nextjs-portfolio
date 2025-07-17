import { useScroll, motion} from "motion/react"
import { useRef } from "react"
import { LiIcon } from "./LiIcon"

const Details = ({position, company, companyLink, time, address, work}) => {

    const ref = useRef(null)
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}} className="text-left w-full">
                <h3 className="capitalize font-bold text-2xl">{position}&nbsp;<a href={companyLink} target="_blank" className="text-primary capitalize">@{company}</a></h3>
                <span className="capitalize font-medium opacity-60">
                    {time} | {address}
                </span>
                <p className="font-medium w-full">
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

export const ExperienceSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

  return (
    <section id="experience" className="py-24 px-4 relative">
        <div >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Experience</span>
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative">

    <motion.div 
        style={{ scaleY: scrollYProgress }}
        className="absolute left-9 top-0 w-[4px] h-full bg-primary origin-top" 
    />
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details 
                        position={"Backend Engineer Intern"}
                        company={"BackMarket"}
                        companyLink={"https://www.backmarket.com/"}
                        time={"March 2025 - September 2025"}
                        address={"Barcelona"}
                        work={"Developed foundational software tools, libraries, and standards to enhance developer productivity and ensure consistency across the company."}
                    />
                    <Details 
                        position={"3D Mechanical Design Engineer Intern"}
                        company={"DEIMA"}
                        companyLink={"https://www.deima.biz/"}
                        time={"September 2022 - February 2025"}
                        address={"Manresa"}
                        work={"3D design of assembly machinery for the automotive industry, collaborating with partners such as SEAT"}
                    />
                    <Details 
                        position={"Motoclub Sant Andreu de la Barca Member"}
                        company={"MotoClub SAB"}
                        companyLink={"https://www.instagram.com/motoclubsantandreu/"}
                        time={"2016 - Present"}
                        address={"Sant Andreu de la Barca"}
                        work={"BMX Teacher, Event organization member, Bike mechanic & Nationals downhill championship speaker"}
                    />
                </ul>
            </div>
        </div>
       
    </section>
  )
}