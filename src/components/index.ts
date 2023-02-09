import { dynamicImpoter } from "../utils/index";

const requireContext = require.context("./", false, /.*\.(tsx)$/);

export const { A, B, C, D, E, F, G, H } = dynamicImpoter(requireContext);
