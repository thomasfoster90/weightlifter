import React, { Component } from 'react';
import './App.css';

class Chest extends Component {
  render() {
    return (
      <div className="Chest">
        <h1>Chest</h1>

        <ul>
          <li>1. Barbell Bench Press </li>
          <li>2. Flat Bench Dumbbell Press </li>
          <li>3. Low-Incline Barbell Bench Press </li>
          <li>4. Machine Decline Press </li>
          <li>5. Seated Machine Chest Press </li>
          <li>6. Incline Dumbbell Press </li>
          <li>7. Dips For Chest </li>
          <li>8. Incline Bench Cable Fly </li>
          <li>9. Incline Dumbbell Pull-Over </li>
          <li>10. Pec-Deck Machine </li>
        </ul>
      </div>
    );
  }
}

export default Chest;
