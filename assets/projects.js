const PROJECTS = [
  {
    id: "autonomous-scooter",
    title: "Autonomous Scooter",
    summary: "Prototype platform for low-speed autonomy, perception, and safety logic.",
    description: "Exploring sensor fusion, obstacle detection, and conservative path planning in real-world tests.",
    status: "In progress",
    tags: ["Robotics", "Embedded", "Control", "C++"],
    topics: ["Robotics", "ESP32/Embedded", "C++"],
    featured: true,
    links: {
      demo: "https://www.youtube.com/@JSTMelon",
      code: "https://github.com/GuzziFlipFlops",
      writeup: "https://devpost.com/trivani-d-verma?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
    },
    highlights: [
      "Sensors: IMU + wheel encoders + ultrasonic/ToF (sample stack).",
      "Workflow: log drives, tune control loops, iterate in simulation."
    ]
  },
  {
    id: "drone-build",
    title: "Drone Build",
    summary: "Custom quadcopter prototype balancing lift, payload, and live video.",
    description: "Designing frame, power system, and control stack for stable indoor flights.",
    status: "Prototype",
    tags: ["Robotics", "Embedded", "Hardware"],
    topics: ["Robotics", "ESP32/Embedded"],
    featured: true,
    links: {
      demo: "https://www.youtube.com/@JSTMelon",
      code: "https://github.com/GuzziFlipFlops",
      writeup: "https://devpost.com/trivani-d-verma?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
    },
    highlights: [
      "Frame: 3D-printed shell with lightweight reinforcements.",
      "Testing: hover tuning, payload lift checks, and camera latency review."
    ]
  },
  {
    id: "esp32-collection",
    title: "ESP32 Project Collection",
    summary: "Mini embedded demos: TFT dashboards, BLE control, and USB/HID experiments.",
    description: "Small, well-documented builds that can plug into larger systems.",
    status: "Shipped",
    tags: ["ESP32", "Embedded", "C++"],
    topics: ["ESP32/Embedded", "C++"],
    featured: true,
    links: {
      demo: "https://www.youtube.com/@JSTMelon",
      code: "https://github.com/GuzziFlipFlops",
      writeup: "https://devpost.com/trivani-d-verma?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
    },
    highlights: [
      "Demos: BLE telemetry dashboard, LED patterns, USB macro pad.",
      "Focus: clean wiring, reproducible builds, and clear docs."
    ]
  },
  {
    id: "diode-rng",
    title: "Diode-Based RNG",
    summary: "Hardware entropy source exploration using diode noise and sampling.",
    description: "Analog front-end, ADC sampling, and lightweight post-processing pipeline.",
    status: "In progress",
    tags: ["Embedded", "Electronics", "C++"],
    topics: ["ESP32/Embedded", "C++"],
    featured: false,
    links: {
      demo: "https://www.youtube.com/@JSTMelon",
      code: "https://github.com/GuzziFlipFlops",
      writeup: "https://devpost.com/trivani-d-verma?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
    },
    highlights: [
      "Pipeline: amplify noise, sample, and whiten bits.",
      "Validation: frequency tests and basic bias checks."
    ]
  },
  {
    id: "cpp-simulations",
    title: "C++ Simulations",
    summary: "C++ simulation tools for robotics and control experiments.",
    description: "Deterministic models with logging, replay, and visualization hooks.",
    status: "Prototype",
    tags: ["C++", "Simulation"],
    topics: ["C++", "Simulation"],
    featured: false,
    links: {
      demo: "https://www.youtube.com/@JSTMelon",
      code: "https://github.com/GuzziFlipFlops",
      writeup: "https://devpost.com/trivani-d-verma?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
    },
    highlights: [
      "Models: kinematics, sensor noise, and PID response.",
      "Use: compare control strategies before hardware tests."
    ]
  },
  {
    id: "esp32-ambilight",
    title: "ESP32 DIY Ambilight",
    summary: "Ambient lighting system that syncs LEDs with on-screen color zones.",
    description: "Captures average screen colors and drives addressable LEDs with smooth transitions.",
    status: "Shipped",
    tags: ["ESP32", "Embedded", "LEDs", "IoT"],
    topics: ["ESP32/Embedded", "IoT"],
    featured: false,
    links: {
      demo: "https://www.youtube.com/@JSTMelon",
      code: "https://github.com/GuzziFlipFlops",
      writeup: "https://devpost.com/trivani-d-verma?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
    },
    highlights: [
      "Hardware: addressable LED strips + ESP32 controller.",
      "UX: color smoothing and low-latency updates."
    ]
  },
  {
    id: "bldc-summer-fan",
    title: "DIY BLDC Summer Fan",
    summary: "Custom BLDC fan build focused on quiet airflow and efficient control.",
    description: "Designed a compact motor driver and tuned speed control for stable operation.",
    status: "Prototype",
    tags: ["Hardware", "Power", "Embedded"],
    topics: ["ESP32/Embedded", "Power Electronics"],
    featured: false,
    links: {
      demo: "https://www.youtube.com/@JSTMelon",
      code: "https://github.com/GuzziFlipFlops",
      writeup: "https://devpost.com/trivani-d-verma?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
    },
    highlights: [
      "Control: PWM tuning and thermal monitoring.",
      "Build: compact housing and airflow testing."
    ]
  },
  {
    id: "printed-rc-car",
    title: "3D-Printed RC Car",
    summary: "Custom RC chassis with 3D-printed frame and modular electronics bay.",
    description: "Focused on durability, easy maintenance, and quick motor swaps.",
    status: "Shipped",
    tags: ["Robotics", "Hardware", "3D Printing"],
    topics: ["Robotics", "Mechanical"],
    featured: false,
    links: {
      demo: "https://www.youtube.com/@JSTMelon",
      code: "https://github.com/GuzziFlipFlops",
      writeup: "https://devpost.com/trivani-d-verma?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
    },
    highlights: [
      "Chassis: reinforced PLA/TPU mix with shock-absorbing mounts.",
      "Electronics: swappable motor driver and battery bay."
    ]
  },
  {
    id: "pico-walkie-talkie",
    title: "NRF24L01 Pi Pico Walkie Talkie",
    summary: "Low-power 2.4GHz voice link using NRF24L01 modules and Pi Pico.",
    description: "Built a compact, two-way audio prototype with push-to-talk UX.",
    status: "Prototype",
    tags: ["Wireless", "Embedded", "RF"],
    topics: ["ESP32/Embedded", "RF/Wireless"],
    featured: false,
    links: {
      demo: "https://www.youtube.com/@JSTMelon",
      code: "https://github.com/GuzziFlipFlops",
      writeup: "https://devpost.com/trivani-d-verma?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
    },
    highlights: [
      "Radio: packetized audio streaming with error handling.",
      "UX: PTT button, status LED, and volume control."
    ]
  },
  {
    id: "assistive-app",
    title: "Assistance for the Blind and Deaf App",
    summary: "Accessibility-first app concept with visual, haptic, and audio feedback.",
    description: "Explores assistive features for navigation, alerts, and daily tasks.",
    status: "In progress",
    tags: ["Software", "Accessibility", "Mobile"],
    topics: ["Assistive Tech", "Software"],
    featured: false,
    links: {
      demo: "https://www.youtube.com/@JSTMelon",
      code: "https://github.com/GuzziFlipFlops",
      writeup: "https://devpost.com/trivani-d-verma?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
    },
    highlights: [
      "Features: smart alerts, haptic cues, and high-contrast UI.",
      "Focus: inclusive UX and low-friction onboarding."
    ]
  },
  {
    id: "stm32-eeg",
    title: "STM32 EEG Brain Sensing Device",
    summary: "EEG signal acquisition prototype using STM32 and analog front-end.",
    description: "Explores signal filtering, noise reduction, and safe electrode handling.",
    status: "Prototype",
    tags: ["Embedded", "Electronics", "Biomedical"],
    topics: ["ESP32/Embedded", "Biomedical"],
    featured: false,
    links: {
      demo: "https://www.youtube.com/@JSTMelon",
      code: "https://github.com/GuzziFlipFlops",
      writeup: "https://devpost.com/trivani-d-verma?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
    },
    highlights: [
      "Analog: amplification, filtering, and shielding tests.",
      "Firmware: sampling pipeline and data logging."
    ]
  },
  {
    id: "pi-server",
    title: "Raspberry Pi Based Server",
    summary: "Home lab server for hosting services, backups, and monitoring.",
    description: "Configured services for file storage, dashboards, and remote access.",
    status: "Shipped",
    tags: ["Raspberry Pi", "Networking", "Linux"],
    topics: ["Infrastructure", "Networking"],
    featured: false,
    links: {
      demo: "https://www.youtube.com/@JSTMelon",
      code: "https://github.com/GuzziFlipFlops",
      writeup: "https://devpost.com/trivani-d-verma?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
    },
    highlights: [
      "Stack: reverse proxy, backups, and uptime monitoring.",
      "Ops: secure SSH and automated updates."
    ]
  },
  {
    id: "audiophile-amp",
    title: "Custom-Built Audiophile Amplifier + Speaker Setup",
    summary: "DIY amplifier and speaker build focused on clean audio and low noise.",
    description: "Designed the enclosure, tested component layouts, and tuned the system.",
    status: "Shipped",
    tags: ["Audio", "Hardware", "Electronics"],
    topics: ["Audio", "Electronics"],
    featured: false,
    links: {
      demo: "https://www.youtube.com/@JSTMelon",
      code: "https://github.com/GuzziFlipFlops",
      writeup: "https://devpost.com/trivani-d-verma?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
    },
    highlights: [
      "Design: low-noise layout with heat management.",
      "Tuning: speaker crossover experiments and enclosure damping."
    ]
  }
];

window.PROJECTS = PROJECTS;
