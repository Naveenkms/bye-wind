export function ArrowUpAndDown(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4.192 13.308a.625.625 0 10-.884.884l2.5 2.5a.625.625 0 00.884 0l2.5-2.5a.626.626 0 00-.884-.884L6.25 15.366l-2.058-2.058z"
        fill="#1C1C1C"
      />
      <path
        d="M5.625 3.75v12.5a.625.625 0 101.25 0V3.75a.625.625 0 10-1.25 0zM15.808 6.692a.626.626 0 00.884-.884l-2.5-2.5a.625.625 0 00-.884 0l-2.5 2.5a.625.625 0 10.884.884l2.058-2.058 2.058 2.058z"
        fill="#1C1C1C"
      />
      <path
        d="M14.375 16.25V3.75a.625.625 0 10-1.25 0v12.5a.625.625 0 101.25 0z"
        fill="#1C1C1C"
      />
    </svg>
  );
}
