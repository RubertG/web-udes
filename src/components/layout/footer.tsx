import { ExternalLink } from '../common/icons'

export const Footer = () => {
  return (
    <footer
    className="text-center bg-bg-100 p-4 text-sm text-text-200"
    >
      <p>© 2024. Todos los derechos reservados. Desarrollado por <a
        href="https://www.linkedin.com/in/rubert-gonzalez-8782b8252/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-primary-100 transition-color group"
        >Rubert Gonzalez <ExternalLink className='-mt-[2px] stroke-text-100 group-hover:stroke-primary-100 transition-all' /></a></p>
    </footer>
  )
}
