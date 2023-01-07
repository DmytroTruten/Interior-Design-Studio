let wasInvoked = false
export function ourServicesReveal(breakpoint) {
  if(!wasInvoked) {
    const ourServicesSectionHeader = document.getElementById(
      "our-services-section-header"
    );
    if(breakpoint === 'xs-1') {
      ourServicesSectionHeader.style.animation = 'reveal-to-right 1s ease-in-out'
    }
    wasInvoked = true
  }
}



