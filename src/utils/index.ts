export function dynamicImpoter(requireContext: __WebpackModuleApi.RequireContext) {
  const components: any = {};

  requireContext.keys().forEach((fileName: string) => {
    if (fileName === './index.js') return;

    const name = fileName.replace(/(\.\/|\.tsx)/g, '');
    components[name] = requireContext(fileName).default;
  });
  return components;
}
