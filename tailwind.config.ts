import type { Config } from "tailwindcss";
export default { content: ["./src/**/*.{ts,tsx}"], theme: { extend: {
  colors: { cream:"#F7F3EC", oat:"#E9DFD0", taupe:"#A99A88", cocoa:"#6F5545", olive:"#879078", ink:"#332F2B" },
  fontFamily: { serif:["Georgia","Cambria","serif"], sans:["system-ui","-apple-system","Segoe UI","sans-serif"] } } }, plugins: [] } satisfies Config;
