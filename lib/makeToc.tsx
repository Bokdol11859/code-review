export default function makeToc({ children }: { children: string }) {
  return children.match(/(?:##|###)(.*)/g);
}
