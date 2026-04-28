import LandingPage from "@/app/landing/page"
import { ThemeProvider } from "@/components/theme-provider"

export default function App() {
  return (
    <div className="font-sans antialiased" style={{ fontFamily: "var(--font-inter)" }}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <LandingPage />
      </ThemeProvider>
    </div>
  )
}
