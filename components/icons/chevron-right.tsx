export function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.075 15.442a.589.589 0 010-.884l4.487-4.116a.59.59 0 000-.884L7.075 5.442a.59.59 0 010-.884.726.726 0 01.963 0l4.488 4.116c.799.732.799 1.92 0 2.652l-4.488 4.116a.726.726 0 01-.963 0z"
        fill="#1C1C1C"
      />
    </svg>
  );
}
