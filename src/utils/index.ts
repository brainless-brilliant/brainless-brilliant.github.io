export const scrollToSection = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const downloadResume = () => {
  // Add resume download logic here
  window.open('/resume.pdf', '_blank');
};

export const openContact = () => {
  // Add contact logic here
  console.log('Opening contact form...');
};
