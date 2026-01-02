import { hi } from "../i18n/hi";
import { en } from "../i18n/en";
import { useLanguage } from "../context/LanguageContext";
import {services,services_hi,features,features_hi} from "../data/services"
export function getServiceAndProblem(serviceSlug, problemSlug) {
  const service = services[serviceSlug];
  if (!service) return {};

  const problem = problemSlug
    ? service.problems.find(p => p.id === problemSlug)
    : null;

  return { service, problem };
}


export const useStrings = () => {
  const { lang } = useLanguage();
  return lang === "hi" ? hi : en;
};
export const useData = () => {
  const { lang } = useLanguage();
  return lang === "hi" ? services_hi : services;
};
export const getFeatutesData = () => {
  const { lang } = useLanguage();
  return lang === "hi" ? features_hi : features;
};
export const openWhatsApp = (phone, message) => {
  const encodedMessage = encodeURIComponent(message);
  window.open(
    `https://wa.me/${phone}?text=${encodedMessage}`,
    "_blank"
  );
};