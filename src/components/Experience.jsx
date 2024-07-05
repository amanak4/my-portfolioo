import React, { useEffect } from 'react'
import html from '../assets/experience/html.png'
import css from '../assets/experience/css.png'
import javascript from '../assets/experience/javascript.png'
import node from '../assets/experience/node.png'
import react from '../assets/experience/react.png'
import tailwind from '../assets/experience/tailwind.png'
import python from '../assets/experience/python.png';
import mongodb from '../assets/experience/download.png'
import c from '../assets/experience/c++.png'
import git from '../assets/experience/git.jpg'
import matplotlib from '../assets/experience/matplotlib.png'
import panda from '../assets/experience/panda.png'
import numpy from '../assets/experience/numpy.png'
import sql from '../assets/experience/sql.png'
import seaborn from '../assets/experience/seaborn.jpeg.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {motion} from "framer-motion";

const Experience = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    const techs = () => [
        {
            id: 1,
            scr: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            scr: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            scr: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            scr: react,
            title: 'REACT',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            scr: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-500'
        },
        {
            id: 6,
            scr: node,
            title: 'NodeJS',
            style: 'shadow-green-500'
        },
        {
            id: 7,
            scr: python,
            title: 'Python',
            style: 'shadow-blue-400'
        },
        {
            id: 6,
            scr: mongodb,
            title: ' MongoDB',
            style: 'shadow-green-500'
        },{
            id: 16,
            scr: sql,
            title: 'SQL',
            style: 'shadow-orange-500'
        },
        {
            id: 9,
            scr: git,
            title: 'Git',
            style: 'shadow-gray-400'
        },
        {
            id: 10,
            scr: c,
            title: 'C++',
            style: 'shadow-blue-500'
        },
        {
            id: 13,
            scr: matplotlib,
            title: 'Matplotlib',
            style: 'shadow-orange-500'
        },
        {
            id: 14,
            scr: panda,
            title: 'Pandas',
            style: 'shadow-orange-500'
        },
        {
            id: 15, 
            scr: numpy,
            title: 'Numpy',
            style: 'shadow-orange-500'
        },
        {
            id: 17,
            scr: seaborn,
            title: 'Seaborn',
            style: 'shadow-orange-500'
        },

    ]

    return (
        <div name="skills" className='bg-gradient-to-b from-gray-800 to-black text-white
     w-full h-full'>
            <div className='max-w-screen-lg max-h-screen-lg p-4 mx-auto flex flex-col justify-center w-full '>
                <motion.div initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        type: 'spring',
        stiffness: 150,
        duration: 0.5,
        delay:0.5
      }}   className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Skills</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </motion.div>

                <div className='w-full h-full grid grid-cols-2 text-center sm:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        techs().map(({ id, scr, title, style }) => (

                            <div data-aos="zoom-in" data-aos-duration="500" key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={scr} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience