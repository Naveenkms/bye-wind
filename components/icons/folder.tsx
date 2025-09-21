export function Folder(props: React.SVGProps<SVGSVGElement>) {
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
        d="M10 6.25L7.666 8a.625.625 0 01-.375.125H2.5V5a.625.625 0 01.625-.625h4.166c.136 0 .267.044.375.125L10 6.25z"
        fill="#1C1C1C"
        fillOpacity={0.1}
      />
      <path
        d="M16.875 5.625h-6.666L8.04 4a1.26 1.26 0 00-.75-.25H3.125A1.25 1.25 0 001.875 5v10.625a1.25 1.25 0 001.25 1.25h13.75a1.25 1.25 0 001.25-1.25v-8.75a1.25 1.25 0 00-1.25-1.25zM3.125 5h4.166L8.96 6.25 7.29 7.5H3.125V5zm13.75 10.625H3.125V8.75h4.166c.27 0 .534-.088.75-.25l2.168-1.625h6.666v8.75z"
        fill="#1C1C1C"
      />
    </svg>
  );
}
