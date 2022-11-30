import { useEffect, useState } from "react"
import { Certifications1 } from "./Certifications1";


export const Task1 = () => {
    // visibility state
    const [isVisible, setIsvisible] = useState(false);

    // visibility handlechange
    const visible_HandleChange = (e) => {
        e.preventDefault();
        setIsvisible(true);
    }

    return (
        <div className="content-page">
            <div className="inner-content">
                <h5>Certifications</h5>
            <div className="container mt-2 bg-light rounded p-3">
                <button className="btn btn-success" onClick={visible_HandleChange}>getCertifications</button>
                {
                    isVisible && (
                        <Certifications1 />
                    )
                }
            </div>
            </div>
        </div>
    )
} 