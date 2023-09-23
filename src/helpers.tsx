export const scrollTo = (sectionRef: any) => {
  window.scrollTo({ top: sectionRef.current.offsetTop, behavior: 'smooth' })
}
