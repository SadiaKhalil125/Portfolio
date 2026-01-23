import './globals.css'
import { ThemeProvider } from './contexts/ThemeContext'

export const metadata = {
  title: 'Sadia Khalil - Software Engineer & AI/ML Developer',
  description: 'Portfolio of Sadia Khalil, a final-year Software Engineering student specializing in full-stack development and AI/ML applications.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'AI/ML', 'React', 'FastAPI', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Sadia Khalil' }],
  openGraph: {
    title: 'Sadia Khalil - Software Engineer & AI/ML Developer',
    description: 'Portfolio showcasing full-stack development and AI/ML projects',
    type: 'website',
    url: 'https://sadia-khalil-portfolio.vercel.app',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 