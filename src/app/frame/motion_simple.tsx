'use client';
import TabFruits from "@/components/TabFruits";
import { AnimatePresence, motion, useCycle, useInView } from "motion/react"
import { pre } from "motion/react-client";
import { useRef, useState } from "react";
import {
    CircularInput,
    CircularTrack,
    CircularProgress,
    CircularThumb,
} from 'react-circular-input'

export default function MotionSimple() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [rotate, setRotate] = useState(0)
    const [circle, setCircle] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const ref = useRef(null)
    const isInView = useInView(ref)
    const [abjad, cycleAbjad] = useCycle("A", "B", "C");

    // const box = {
    //     width: 100,
    //     height: 100,
    //     backgroundColor: "#98c379",
    //     borderRadius: 5,
    // }

    const inputChange = (key: string, value: any) => {
        switch (key) {
            case 'x':
                // console.log("🏃‍♂️", Math.round(value.target.value / 10) * 10)
                setX(Math.round(value.target.value / 10) * 10)
                break;
            case 'y':
                setY(Math.round(value.target.value / 10) * 10)
                break;
            default:
                let prev = rotate;
                let next = Math.round(value * 10) / 10;
                setRotate(next)

                if (next == 0 && prev == 1) {

                    let rotation = Math.floor(circle / 180)
                    console.log("🛞", circle, rotation)
                    setCircle(180 * rotation)
                    return
                }

                if (next == 1 && prev == 0) {
                    // console.log("unded 10")
                    setCircle(circle - (180 / 10))
                    return
                }

                if (next > prev) {
                    // console.log("added 10")
                    setCircle(circle + (180 / 10))
                }

                if (next < prev) {
                    // console.log("unded 10")
                    setCircle(circle - (180 / 10))
                }

                break;
        }
    }

    return <div className="relative">
        <input
            className="slider"
            type="range"
            min={0} max={100}
            style={{
                width: '100%',
            }}
            value={x}
            onChange={(val) => {
                inputChange("x", val)
            }} />

        <input
            className="range-y"
            type="range"
            min={0} max={100}
            value={y}
            onChange={(val) => {
                inputChange("y", val)
            }} />

        <div className="circulator">
            <CircularInput value={rotate} onChange={(val) => {
                inputChange("rotate", val)
            }}>
                <CircularTrack fill="transparent" stroke="#bbb" strokeWidth="16px" />
                <CircularProgress stroke="rgba(255,99,72, .9)" />
                <CircularThumb r={15} fill="tomato" />
            </CircularInput>
        </div>

        <div style={{
            margin: '30px 0'
        }}>
            <ul>
                <li>x : {x}</li>
                <li>y : {y}</li>
                <li>rotate : {rotate}</li>
            </ul>
        </div>

        <div className="box-div">
            <motion.div
                className="box"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: x * 5, y: y * 5, rotate: circle }}
                transition={{ type: "spring", stiffness: 200 }}

                whileHover={{
                    scale: 1.1,
                    backgroundColor: "#FF1493",
                    transition: { duration: 0.3 },
                }}

                whileTap={{ scale: 0.9 }}
            />
        </div>

        <div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{
                    scale: 1.1,
                    backgroundColor: "#FF1493",
                }}
                whileTap={{
                    scale: 0.95,
                    rotate: -5,
                    backgroundColor: "#FFD700",
                }}
                drag
                style={{
                    width: 200,
                    height: 200,
                    background: "#00BFFF",
                    borderRadius: 20,
                    margin: "50px auto",
                    cursor: "grab",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    color: "white",
                }}
            >
                Move me!
            </motion.div>

            <motion.div onClick={(x) => {
                cycleAbjad()
            }}>Cycle through Abjad : {abjad}</motion.div>

            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                style={{
                    height: 200,
                    background: "#6a5acd",
                    margin: "150px auto",
                    borderRadius: 20,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    width: 300,
                }}
            >
                I fade in on scroll ✨
            </motion.div>

            <motion.div layoutId="card">Card A</motion.div>
            <motion.div layoutId="card">Card B</motion.div>
            <TabFruits />

            <motion.button
                className="bg-sky-500 hover:bg-sky-700 m-9 px-8 py-2"
                layoutId="modal"
                onClick={() => setIsOpen(true)}
                initial={false}
                animate={{
                    backgroundColor: isOpen ? "#fff" : "blue",
                    color: isOpen ? "black" : "white",
                }}
                transition={{ duration: 0.3 }}
            >
                {!isOpen && "Open"}
            </motion.button>

            <AnimatePresence mode="wait">
                {isOpen &&
                    <>
                        <motion.div className="modal-bg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        ></motion.div>
                        <motion.div
                            layoutId="modal"
                            className="modalan"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring" }}
                            exit={{ opacity: 0, scale: 0.95 }}
                        >
                            <p>Hi, I'm a modal!</p>
                            <button onClick={() => setIsOpen(false)}>Close</button>
                        </motion.div>
                    </>
                }
            </AnimatePresence>
        </div>
    </div>
}