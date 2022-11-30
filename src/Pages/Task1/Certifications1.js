import axios from "axios";
import { useEffect, useState } from "react";

export const Certifications1 = () => {
    // loading specialties
    const [isVisible, setIsvisible] = useState(false);

    // certificate 
    const [certificate, setCertificate] = useState([]);
    const [loading, isLoading] = useState(true);

    // specialties
    const [specialties, setSpecialties] = useState([]);
    const [loading_2, setLoading_2] = useState(true);

    // visible handlechange
    const visible_HandleChange = (e) => {
        e.preventDefault();
        setLoading_2(true)
        setIsvisible(true);
        getSpecialties();
    }

    // getcertficates function
    const getCertificates = async () => {
        const { data } = await axios.get('https://securityjobapioverturedev.azurewebsites.net/api/Dropdown/getcertifications/1');
        setCertificate(data.data);
        isLoading(false)
    }

    // getspecialties function
    const getSpecialties = async () => {
        const { data } = await axios.get('https://securityjobapioverturedev.azurewebsites.net/api/Dropdown/getspecialties/1');
        setSpecialties(data.data);
        setLoading_2(false);
    }

    // render certificates
    useEffect(() => {
        getCertificates();
    }, [])

    return (
        <div className="">
            <div className="d-flex gap-2 mt-2">
                <select className="form-control" style={{ width: "700px" }} onChange={visible_HandleChange}>
                    <option> -- select --</option>
                    {
                        certificate.map((ele, index) => {
                            return (
                                <option key={index} className="dropdown-item" style={{ width: "300px" }} value={ele.id}>{ele.name}</option>
                            )
                        })
                    }
                </select>
                <div> {loading && <div className="spinner-border" role="status"></div>}</div>
            </div>
            <div className="d-flex gap-2 mt-2">
                <select className="form-control" style={{ width: "700px" }}>
                    {
                        specialties.map((ele, index) => {
                            return (
                                <option key={index} className="dropdown-item" style={{ width: "300px" }}>{ele.name}</option>
                            )
                        })
                    }
                </select>

                {
                    isVisible && (
                        <div> {loading_2 && <div className="spinner-border" role="status"></div>}</div>
                    )
                }
            </div>

        </div>
    )
}