export function getServiceAndProblem(serviceSlug, problemSlug) {
  const service = services[serviceSlug];
  if (!service) return {};

  const problem = problemSlug
    ? service.problems.find(p => p.id === problemSlug)
    : null;

  return { service, problem };
}
