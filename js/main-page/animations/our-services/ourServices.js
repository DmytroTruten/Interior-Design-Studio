import { revealIntoDirection } from "../reveal-function/revealIntoDirection.js";

let wasInvoked = false;

export function ourServicesReveal(breakpoint) {
  if (!wasInvoked) {
    if (breakpoint === "xs") {
      interiorDesignReveal(breakpoint);
      setTimeout(() => {
        decorativeServicesReveal(breakpoint);
      }, 500);
      setTimeout(() => {
        spacePlanningReveal(breakpoint);
      }, 1000);
      setTimeout(() => {
        projectManagementReveal(breakpoint);
      }, 1500);
    } else {
      interiorDesignReveal(breakpoint);
      decorativeServicesReveal(breakpoint);
      spacePlanningReveal(breakpoint);
      projectManagementReveal(breakpoint);
    }
    wasInvoked = true;
  }
}

function interiorDesignReveal(breakpoint) {
  let interiorDesignCardArray = [
    document.getElementById("our-services-section-header"),
    document.getElementById("interior-design-card-icon"),
    document.getElementById("interior-design-card-header"),
    document.getElementById("interior-design-card-description"),
  ];

  if (breakpoint === "xs") {
    revealIntoDirection(interiorDesignCardArray[0], "right");

    for (let i = 1; i < interiorDesignCardArray.length; i++) {
      servicesReveal(interiorDesignCardArray[i], "right");
    }
  } else {
    revealIntoDirection(interiorDesignCardArray[0], "top");

    for (let i = 1; i < interiorDesignCardArray.length; i++) {
      servicesReveal(interiorDesignCardArray[i], "top");
    }
  }
}

function decorativeServicesReveal(breakpoint) {
  let decorativeServicesCardArray = [
    document.getElementById("services-splitting-line"),
    document.getElementById("decorative-services-card-icon"),
    document.getElementById("decorative-services-card-header"),
    document.getElementById("decorative-services-card-description"),
  ];
  if (breakpoint === "xs") {
    revealIntoDirection(decorativeServicesCardArray[0], "right");

    for (let i = 1; i < decorativeServicesCardArray.length; i++) {
      servicesReveal(decorativeServicesCardArray[i], "right");
    }
  } else {
    for (let i = 1; i < decorativeServicesCardArray.length; i++) {
      servicesReveal(decorativeServicesCardArray[i], "top");
    }
  }
}

let spacePlanningCardArray = [
  document.getElementById("planning-splitting-line"),
  document.getElementById("space-planning-card-icon"),
  document.getElementById("space-planning-card-header"),
  document.getElementById("space-planning-card-description"),
];
function spacePlanningReveal(breakpoint) {
  if (breakpoint === "xs") {
    revealIntoDirection(spacePlanningCardArray[0], "right");

    for (let i = 1; i < spacePlanningCardArray.length; i++) {
      servicesReveal(spacePlanningCardArray[i], "right");
    }
  } else {
    for (let i = 1; i < spacePlanningCardArray.length; i++) {
      servicesReveal(spacePlanningCardArray[i], "top", 'second');
    }
  }
}

function projectManagementReveal(breakpoint) {
  let projectManagementCardArray = [
    document.getElementById("management-splitting-line"),
    document.getElementById("project-management-card-icon"),
    document.getElementById("project-management-card-header"),
    document.getElementById("project-management-card-description"),
  ];
  if (breakpoint === "xs") {
    revealIntoDirection(projectManagementCardArray[0], "right");

    for (let i = 1; i < projectManagementCardArray.length; i++) {
      servicesReveal(projectManagementCardArray[i], "right");
    }
  } else {
    for (let i = 1; i < projectManagementCardArray.length; i++) {
      servicesReveal(projectManagementCardArray[i], "top", 'second');
    }
  }
}

function servicesReveal(element, direction, row) {
  if(row === 'second') {
    setTimeout(() => {
      revealIntoDirection(element, direction);
    }, 600);
  
    setTimeout(() => {
      revealIntoDirection(element, direction);
    }, 800);
  
    setTimeout(() => {
      revealIntoDirection(element, direction);
    }, 1000);
  } else {
    setTimeout(() => {
      revealIntoDirection(element, direction);
    }, 200);
  
    setTimeout(() => {
      revealIntoDirection(element, direction);
    }, 400);
  
    setTimeout(() => {
      revealIntoDirection(element, direction);
    }, 600);

  }
}
