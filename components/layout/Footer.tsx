const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-center min-h-12 px-[clamp(20px,4vw,64px)] py-3 border-t bg-(--bg) border-(--line)
      sm:justify-start"
    >
      <p className="text-[clamp(11px,2vw,13px)] leading-normal text-center text-(--mute)
        lg:text-sm
        sm:text-left"
      >
        &copy; 2026 Dániel Nyíri · built from coffee and commits
      </p>
    </footer>
  )
}

export default Footer