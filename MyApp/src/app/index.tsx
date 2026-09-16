import { Redirect } from "expo-router";
import { routes } from "@/constants/routes";

export default function Index() {
  return <Redirect href={routes.onboarding.landingPage} />;
}