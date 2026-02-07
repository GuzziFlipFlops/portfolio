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
  }
];

window.PROJECTS = PROJECTS;
