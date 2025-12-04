export default function SmartCoasterWithFriendsPage() {
  return (
    <>
      <section className="main-content">
        <h1>Smart Coaster with Friends</h1>
        <article>
        <h2>Overview</h2>
        <p>The Smart Coaster with Friends is an IoT-enabled device designed to track water consumption and provide timely hydration reminders. It integrates with Discord, allowing friends to motivate each other. This project was developed in a IoT class and was driven by the personal goal of encouraging better hydration habits.

</p>
<h2>Systems Functionality</h2>
<p>The Smart Coaster with Friends system offers a set of features designed to encourage consistent hydration and facilitate social interaction. Each smart coaster functions as follows:

</p>
<h3>Core Coaster Actions</h3>
<li>
    <ul>Placing a water bottle on the coaster registers a new drink. Upon lifting the cup and placing it back down lighter, a sip is registered. A heavier weight detected upon placement registers a new drink.
</ul>
<ul>Each time a sip is taken, a drinking timer activates.
</ul>
<ul>An RGB light fades from green to red to indicate the status of the timer.
</ul>
<ul>A tune plays to alert the user when the timer is up.
</ul>
<ul>The brightness of the RGB light can be controlled by a dial (potentiometer).
</ul>
<ul>A push button on the system allows for individual actions:
</ul>
{/* add in second line list */}
<ul>Single Press: If its's the first press after the device is ready, it starts a new tracking session, resetting the total consumed, starting a new session, and resetting the reminder light to green. If a cup is already on the scale, this action registers a new cup, corrects a mistaken sip recording (by reverting the last sip), and sets the current weight as the new starting weight for a full cup.</ul>
<ul>Double Press: This action resets the total consumption, starts a new session, and resets the reminder cycle.</ul>
<ul>Long Press: This action instructs the scale to re-tare itself.</ul>
</li>
<h3>Discord Intergration</h3>
<ul>Each coaster is registered as a separate unit and connected to a shared Discord server.
</ul>
<ul>Devices send notifications to the Discord channel regarding status or action updates, such as when a user starts the device or a session, starts a new drink, takes a sip (including sip amount and total amount), or when the buzzer is active.
</ul>
<ul>The Discord server can also be used to control the individual timer and buzzer of each coaster. Proposed commands include setting the drinking timer length and muting or unmuting the buzzer.
</ul>
<ul>This setup enables friends to update their device settings, monitor their friends's drinking habits, engage in conversations about water consumption, or even unmute someone's buzzer to provide a friendly nudge-all from a centralized location.
</ul>

    <div>
      {/* Flask Web Server Section */}
      <section>
        <h3>Flask Web Server (for local debugging)</h3>
        <p>
          A Flask web server provides a local graphical interface for debugging and monitoring each device. 
          It allows for updating settings as well as hosting two primary pages:
        </p>
        <ul>
          <li>
            <strong>Index:</strong> Periodically calls the data endpoint to display the most up-to-date system information.
          </li>
          <li>
            <strong>History:</strong> Shows a breakdown of past sessions.
          </li>
        </ul>
      </section>

      <hr />

      {/* ThingsBoard Integration Section */}
      <section>
        <h3>ThingsBoard Integration</h3>
        <p>
          All devices are connected to a ThingsBoard cloud platform for monitoring hardware telemetry data. 
          This allowed for real-time monitoring of system properties for debugging purposes and as an assignment requirement, 
          without flooding the Discord channel with unnecessary notifications.
        </p>
      </section>

      <hr />

      {/* System Architecture Section */}
      <section>
        <h3>System Architecture & Design</h3>
        <p>
          The system was designed so that each unit integrates both front-end and back-end components 
          with a robust data-fetching mechanism through various communication protocols.
        </p>
        
        {/* Placeholder for your Diagram */}
        <div>
          [Insert Architecture Diagram Here]
        </div>
        

[Image of multi-layered IoT architecture diagram showing physical, edge, network, and cloud layers]


        <h4>Multi-layered IoT Architecture</h4>
        <p>
          The system's architecture came together through an iterative process, integrating its physical and software components 
          to enable data reporting to ThingsBoard and communication through various protocols.
        </p>
        <ul>
          <li>
            <strong>Physical Layer:</strong>
            This layer is composed of the fundamental hardware components for the four smart coasters that were made. 
            This includes the Arduino, a 5Kg load cell used for accurate weight measurement, a user input button, 
            a potentiometer for brightness control, an RGB LED, and a buzzer for feedback.
          </li>
          <li>
            <strong>Edge Computing Layer:</strong>
            Each coaster has a Raspberry Pi connected through this layer, running Raspberry Pi software on a virtual machine using Debian. 
            The Raspberry Pi is responsible for immediate data collection, running the core logic, and managing the states of the local device.
          </li>
          <li>
            <strong>Network/Communication Layer:</strong>
            This layer is responsible for the communication between the Serial from the Arduino to the Raspberry Pi, 
            then the MQTT protocol between the Raspberry Pi and the Cloud, and then HTTPS from the Raspberry Pi to the Discord API.
          </li>
          <li>
            <strong>Cloud/Application Layer:</strong>
            ThingsBoard.io was utilized to serve as the cloud layer for monitoring and visualizing device telemetry data. 
            Its primary role in this system was for debugging and fulfilling assignment requirements. 
            The Discord API facilitates crucial bidirectional communication for notification services and bot interaction.
          </li>
        </ul>
      </section>

      <hr />

      {/* Key Components Section */}
      <section>
        <h3>Key Components (Hardware)</h3>
        <ul>
          <li>
            <h5>Load Cell and HX711 Amplifier</h5>
            <p>
              The 5KG Load cell Beam and HX711 Amplifier are connected, with the amplifier converting the analog signal from the load cell to digital. 
              The assembly involved soldering the amplifier to the wire connections, extending wires using soldering and heat shrink, 
              and then connecting to the load cell and breadboard. Finally, the load cell was calibrated using the HX711 library.
            </p>
          </li>
          <li>
            <h5>Potentiometer</h5>
            <p>
              A 10K potentiometer with three terminal resistors, providing an analog voltage from 0 to 5V, used for brightness control of the RGB LED.
            </p>
          </li>
          <li>
            <h5>Push Button</h5>
            <p>
              A digital sensor for each smart coaster, detecting whether it is high or low (pressed or released). 
              The main purpose was to allow a user to perform operations such as taring the weight sensor, resetting, restarting, or initiating the weight sensor.
            </p>
          </li>
          <li>
            <h5>RGB LED</h5>
            <p>
              Displays the current timer state, fading from green to red.
            </p>
          </li>
          <li>
            <h5>Passive Buzzer</h5>
            <p>
              Used to play a song or tune when the timer is up, chosen over an active buzzer to allow for custom tunes.
            </p>
          </li>
        </ul>
      </section>
    </div>
          </article>
      </section>
    </>
  );
}
