export function PageTitle({ title }: { title: string }) {
  return (
    <h1 className="px-2 py-1 font-semibold text-sm text-foreground">{title}</h1>
  );
}
