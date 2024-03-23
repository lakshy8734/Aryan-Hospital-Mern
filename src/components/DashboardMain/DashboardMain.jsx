import React, { useState } from 'react';
import styles from '../../styles/DashboardMain.module.css'; // Import styles from the CSS module

function DashboardMain() {
 // Dummy data
 const [appointments, setAppointments] = useState([
    // Your appointments data
    {
      name: 'John Doe',
      email: 'john@example.com',
      gender: 'Male',
      doctor: 'Dr. Smith',
      date: '2024-03-25',
      number: '1234567890',
      department: 'Cardiology',
      status: 'Pending',
      statusColor: '#fff',
      actionTaken: false // Flag to track if action has been taken
    },
    {
      name: 'Jane Doe',
      email: 'jane@example.com',
      gender: 'Female',
      doctor: 'Dr. Johnson',
      date: '2024-03-26',
      number: '9876543210',
      department: 'Neurology',
      status: 'Pending',
      statusColor: '#fff',
      actionTaken: false // Flag to track if action has been taken
    }
 ]);

 // Function to handle status change
 const handleStatusChange = (index, newStatus) => {
    // Your status change logic
    const updatedAppointments = [...appointments];
    updatedAppointments[index].status = newStatus === 'Confirmed' ? 'Approved' : newStatus;
    updatedAppointments[index].statusColor = newStatus === 'Confirmed' ? '#5cb85c' : newStatus === 'Rejected' ? '#d9534f' : '';
    updatedAppointments[index].actionTaken = true; // Mark action as taken
    setAppointments(updatedAppointments);
 };

 return (
    <div>
      <div className={styles.homeContainer}>
        <div className={styles.box}>
          <p style={{fontSize:"1.4em"}}>
            Doctor
          </p>
        </div>
        <div className={styles.box}>
          <p style={{fontSize:"1.4em"}}>
            Blog
          </p>
        </div>
        <div className={styles.box}>
          <p style={{fontSize:"1.4em"}}>
            Nurse
          </p>
        </div>
        <div className={styles.box}>
          <p style={{fontSize:"1.4em"}}>  
            Appointment
          </p>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Dr. Name</th>
              <th>Date</th>
              <th>Number</th>
              <th>Department</th>
              <th>Status</th>
              <th>Actions</th> {/* New table header for actions */}
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index} style={{ backgroundColor: appointment.statusColor }}>
                <td>{appointment.name}</td>
                <td>{appointment.email}</td>
                <td>{appointment.gender}</td>
                <td>{appointment.doctor}</td>
                <td>{appointment.date}</td>
                <td>{appointment.number}</td>
                <td>{appointment.department}</td>
                <td>{appointment.status}</td>
                <td style={{display:'flex'}}> {/* Actions column */}
                 {appointment.actionTaken ? (
                    <span>Action Taken</span>
                 ) : (
                    <>
                      <button className={`${styles.statusBtn} ${styles.approveBtn}`} onClick={() => handleStatusChange(index, 'Confirmed')}>Approve</button>
                      <button className={`${styles.statusBtn} ${styles.rejectBtn}`} onClick={() => handleStatusChange(index, 'Rejected')}>Reject</button>
                    </>
                 )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
 );
}

export default DashboardMain;