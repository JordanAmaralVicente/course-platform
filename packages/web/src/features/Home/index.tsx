import { AboutMeSection } from "./components/about-me";
import { LoginContainer } from "./components/login-container";
import { MainBanner } from "./components/main-banner";
import { WhatsHere } from "./components/whats-here";

export function HomePage(): JSX.Element {
  return (
    <>
      <MainBanner />
      <LoginContainer />
      <WhatsHere />
      <AboutMeSection />
    </>
  );
}
