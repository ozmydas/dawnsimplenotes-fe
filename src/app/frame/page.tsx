import "@/styles/frame.css";
import MotionSimple from "./motion_simple";

export default function FramePage(){
    return <div className="frame-container">
        <h1>Hello from Frame ✨</h1>
        <div className="frame-wrapper">
            {/*  */}
            <MotionSimple />
            {/*  */}
        </div>
    </div>
}