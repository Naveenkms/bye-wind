export function Blog(props: React.SVGProps<SVGSVGElement>) {
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
        d="M6.25 3.125v13.75h-2.5a.625.625 0 01-.625-.625V3.75a.625.625 0 01.625-.625h2.5z"
        fill="#1C1C1C"
        fillOpacity={0.1}
      />
      <path
        d="M14.375 8.75a.625.625 0 01-.625.625h-5a.625.625 0 010-1.25h5a.625.625 0 01.625.625zm-.625 1.875h-5a.625.625 0 100 1.25h5a.624.624 0 100-1.25zM17.5 3.75v12.5a1.25 1.25 0 01-1.25 1.25H3.75a1.25 1.25 0 01-1.25-1.25V3.75A1.25 1.25 0 013.75 2.5h12.5a1.25 1.25 0 011.25 1.25zM3.75 16.25h1.875V3.75H3.75v12.5zm12.5 0V3.75H6.875v12.5h9.375z"
        fill="#1C1C1C"
      />
    </svg>
  );
}
