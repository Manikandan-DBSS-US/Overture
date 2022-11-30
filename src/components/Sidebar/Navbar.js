import { HiMenuAlt1 } from 'react-icons/hi';
import { TbWorld } from 'react-icons/tb';
import { BsBell } from 'react-icons/bs';
import { BiMessage } from 'react-icons/bi';
import profile from "../../assets/profile.jpg";

export const Navbar = ({ show, setShow }) => {
    return (
        <div className="border-start">
            <nav class="navbar navbar-expand-lg p-2">
                <div class="container-fluid mt-2">
                    <i className={`fas fa-bars ${show ? 'fas fa-bars' : null}`} onClick={() => setShow(!show)}></i>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item mx-4">
                                <input className='form-control' placeholder='Search for results...' style={{ width: "300px" }} />
                            </li>
                            <li class="nav-item">

                            </li>

                        </ul>
                        <div className='d-flex gap-4'>
                            <div>
                                <h6 className='text-primary'><TbWorld /><span>Switch to Employer</span></h6>
                            </div>
                            <div>
                                <h6 className='text-primary'><BsBell /></h6>
                            </div>
                            <div>
                                <h6 className='text-primary'><BiMessage /></h6>
                            </div>
                            <div>
                                <img className='profile-logo' src={profile} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
