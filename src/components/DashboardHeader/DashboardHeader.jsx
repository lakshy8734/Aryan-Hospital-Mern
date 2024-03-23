import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdLocalHospital } from 'react-icons/md';
import styles from '../../styles/DashboardHeader.module.css'; // Import styles from the CSS module

function DashboardHeader() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        // Add logout logic here
        console.log("Logged out!");
    };

    return (
        <header className={styles.dashboardHeader}>
            <h1 style={{display:'flex',alignItems:'center',gap:'0.4em'}}><MdLocalHospital />Aryan</h1>
            <div className={styles.userDropdown}>
                <div className={styles.userIcon} onClick={handleDropdownToggle}>
                    <FaUser />
                </div>
                {showDropdown && (
                    <div className={styles.dropdownContent}>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default DashboardHeader;