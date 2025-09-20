export function Bag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 4.375V6.25h-15V4.375a.625.625 0 01.625-.625h13.75a.625.625 0 01.625.625z"
        fill="#1C1C1C"
        fillOpacity={0.1}
      />
      <path
        d="M16.875 3.125H3.125a1.25 1.25 0 00-1.25 1.25v11.25a1.25 1.25 0 001.25 1.25h13.75a1.25 1.25 0 001.25-1.25V4.375a1.25 1.25 0 00-1.25-1.25zm0 1.25v1.25H3.125v-1.25h13.75zm0 11.25H3.125v-8.75h13.75v8.75zM13.75 8.75a3.75 3.75 0 01-7.5 0 .625.625 0 011.25 0 2.5 2.5 0 005 0 .625.625 0 111.25 0z"
        fill="#1C1C1C"
      />
    </svg>
  );
}
